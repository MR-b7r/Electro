/* eslint-disable */

import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Image,
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

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useWishList } from "../context/WishListContext";
import ModalComponent from "./ModalComponent";
import { useCartList } from "../context/CartContext";
import { extractNumbersFromString } from "../utils/helpers";
const WishlistItem = ({ data, slug }) => {
  const { removeFromWishlist } = useWishList();
  const { cartlist, addToCartlist, removeFromCartlist } = useCartList();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const {
    brand,
    phone_name,
    phone_images,
    thumbnail,
    release_date,
    storage,
    specifications,
  } = data;
  const specArr = specifications.filter((spec) => spec.title === "Misc");

  let price = specArr[0].specs;

  if (price.length < 2 || (price.length < 3 && price.at(1).key !== "Price")) {
    price = "Price is not available";
  } else {
    price = price
      .filter((r) => r.key === "Price")
      ?.at(0)
      .val?.at(0)
      .split("/")
      .at(0);
  }
  const finalPrice = price.startsWith("About") ? price.slice(5) : price;
  const cartPrice = Number(extractNumbersFromString(finalPrice));

  const isProductInCartlist = cartlist?.some(
    (item) => item.data.phone_name === phone_name
  );
  function handleToggleCartList() {
    if (isProductInCartlist) {
      navigate("/cart");
    } else {
      addToCartlist({ data, slug }, cartPrice);
    }
  }
  function RemoveItem() {
    removeFromWishlist(phone_name);
    onClose();
  }
  return (
    <>
      <Card
        maxW="sm"
        className="group cursor-pointer duration-300 dark:bg-black-04 hover:dark:bg-black-01 hover:bg-slate-100"
      >
        <CardBody p={0}>
          <div className="flex items-center justify-center">
            <Image
              src={thumbnail}
              alt={brand}
              borderRadius="20px"
              className="transition-all duration-200 p-3 "
            />
          </div>
          <Stack mt="5" spacing="1" px={3}>
            <Text className="font-bold text-sm leading-3 tracking-wide text-[#222] dark:text-gray-200">
              {brand}
            </Text>
            <Heading
              size=""
              className="text-[15px] md:text-base text-gray-800 dark:text-gray-400"
            >
              {phone_name}
            </Heading>

            <div className="flex items-center justify-start">
              <Text className="text-yellow-500 font-semibold text-base sm:text-xl tracking-wide mr-2">
                {finalPrice}
              </Text>
              {finalPrice !== "Price is not available" && (
                <Text className="text-white-01 font-semibold text-base sm:text-xl tracking-wide line-through">
                  {finalPrice}
                </Text>
              )}
            </div>
          </Stack>
        </CardBody>
        <CardFooter className="flex items-center justify-between" px={3}>
          <Link
            className="flex items-center gap-1 font-bold text-[15px]  text-blue-600 hover:text-blue-700  dark:text-blue-500 dark:hover:text-blue-600  duration-300 underline underline-offset-2"
            onClick={() => navigate(`/details/${slug}`)}
          >
            more details <ArrowTopRightOnSquareIcon className="w-[15px]" />
          </Link>

          <div className="flex">
            <HeartIcon
              onClick={onOpen}
              className={`transition-all duration-300 cursor-pointer  mr-3 w-[20px] sm:w-[24px] text-red-700 fill-red-700`}
            />
            <ShoppingCartIcon
              onClick={handleToggleCartList}
              className={`transition-all duration-300 hover:text-blue-700 hover:fill-blue-700 cursor-pointer  text-white-02 w-[20px] sm:w-[24px] ${
                isProductInCartlist
                  ? `text-blue-700 fill-blue-700`
                  : `text-white-02`
              }`}
            />
          </div>
        </CardFooter>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="self-center">
          <ModalHeader>Remove from Wishlist</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Item will be Removed from Wishlist, Are you sure to complete
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

export default WishlistItem;
