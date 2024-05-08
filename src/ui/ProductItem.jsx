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
} from "@chakra-ui/react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useWishList } from "../context/WishListContext";
import usePhoneLink from "../features/phones/usePhoneLink";
import { useCartList } from "../context/CartContext";
import { extractNumbersFromString } from "../utils/helpers";

const ProductItem = ({ detailLink, slug }) => {
  const { details, isLoading, error } = usePhoneLink(detailLink, slug);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishList();
  const { cartlist, addToCartlist, removeFromCartlist } = useCartList();
  const navigate = useNavigate();

  if (isLoading) return;
  const { data } = details;

  const {
    brand,
    phone_name,
    phone_images,
    thumbnail,
    release_date,
    storage,
    specifications,
  } = data;

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

  const isProductInWishlist = wishlist?.some(
    (item) => item.data.phone_name === phone_name
  );

  const isProductInCartlist = cartlist?.some(
    (item) => item.data.phone_name === phone_name
  );
  function handleToggleWishList() {
    if (isProductInWishlist) {
      removeFromWishlist(phone_name);
    } else {
      addToWishlist({ data, slug });
    }
  }
  function handleToggleCartList() {
    if (isProductInCartlist) {
      navigate("/cart");
    } else {
      addToCartlist({ data, slug }, cartPrice);
    }
  }

  return (
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
            onClick={handleToggleWishList}
            className={`transition-all duration-300 hover:text-red-700 hover:fill-red-700 cursor-pointer  mr-3 w-[20px] sm:w-[24px] ${
              isProductInWishlist
                ? "text-red-700 fill-red-700"
                : "text-white-02"
            }`}
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
  );
};

export default ProductItem;
