import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { extractNumbersFromString } from "../utils/helpers";
import { useCartList } from "../context/CartContext";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
/* eslint-disable */

const CartlistItem = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const { removeFromCartlist, updateTotal } = useCartList();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { slug } = data;
  const {
    brand,
    phone_name,
    phone_images,
    thumbnail,
    release_date,
    storage,
    specifications,
  } = data.data;

  const misc = specifications.filter((spec) => spec.title === "Misc")[0].specs;

  let price;
  if (!misc.find((obj) => obj.key === "Price")) {
    price = "Price is not available";
  } else {
    price = misc
      .filter((r) => r.key === "Price")
      ?.at(0)
      .val?.at(0)
      .split("/")
      .at(0);
  }
  const finalPrice = price.startsWith("About") ? price.slice(5) : price;

  const cartPrice = Number(extractNumbersFromString(finalPrice));

  const colors = specifications
    .find((obj) => obj.title === "Misc")
    .specs.find((spec) => spec.key === "Colors").val;

  function handleMinusQ() {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
    updateTotal(-cartPrice);
  }
  function handlePlusQ() {
    setQuantity(quantity + 1);
    updateTotal(cartPrice);
  }
  function RemoveItem() {
    removeFromCartlist(phone_name, -(cartPrice * quantity));
    onClose();
  }
  return (
    <>
      <li className="flex py-6 sm:flex-row flex-col">
        <div className="h-24 w-24 flex-shrink-0 sm:self-start self-center overflow-hidden rounded-md border border-gray-200">
          <img
            src={thumbnail}
            alt={phone_name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-black-04 dark:text-gray-200">
              <Link to={`/details/${slug}`} target="_blank">
                {phone_name}
              </Link>
              <p className="ml-4">{finalPrice}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{colors}</p>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <label className="flex item-center justify-between py-[2px] px-2 rounded-full w-fit text-[18px] font-semibold border bg-stone-100 dark:bg-black-02 border-yellow-500  shadow-inner">
              <button onClick={() => handleMinusQ()}>
                <MinusIcon width={15} className="dark:text-gray-100" />
              </button>
              <input
                className="w-[40px] text-sm text-center dark:text-gray-200 bg-stone-100 dark:bg-black-02 outline-none focus:outline-none "
                defaultValue={quantity}
                value={quantity}
                onChange={(e) => setQuantity((q) => (q = e.target.value))}
              />
              <button onClick={() => handlePlusQ()}>
                <PlusIcon width={15} className="dark:text-gray-100" />
              </button>
            </label>
            <div className="flex">
              <button
                type="button"
                className="font-medium text-yellow-600 hover:text-yellow-500"
                onClick={onOpen}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="self-center">
          <ModalHeader>Remove from CartList</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Item will be Removed from CartList, Are you sure to complete
            process?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="yellow" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={RemoveItem}>
              Remove
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CartlistItem;
