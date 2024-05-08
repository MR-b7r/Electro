import React, { useState } from "react";
import { useWishList } from "../context/WishListContext";

import usePhoneDetails from "../features/phones/usePhoneDetails";
import { Spinner } from "@chakra-ui/react";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useCartList } from "../context/CartContext";
import { extractNumbersFromString } from "../utils/helpers";
const ProductDetails = () => {
  const { isLoading, phoneDetails, slug } = usePhoneDetails();
  const { wishlist, addToWishlist } = useWishList();
  const { cartlist, addToCartlist } = useCartList();

  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);
  if (isLoading)
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="yellow.500"
        size="xl"
        className="self-center text-center justify-center h-full"
      />
    );
  const {
    brand,
    phone_name,
    phone_images,
    thumbnail,
    release_date,
    storage,
    specifications,
  } = phoneDetails;
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

  // misc
  const colors = specifications
    .find((obj) => obj.title === "Misc")
    .specs.find((spec) => spec.key === "Colors")?.val;

  //network
  const networkBand = specifications
    .find((obj) => obj.title === "Network")
    .specs.filter((obj) => obj.key.includes("bands"))
    .at(-1).key;

  // display
  const size = specifications
    .find((obj) => obj.title === "Display")
    .specs.find((obj) => obj.key === "Size")
    ?.val[0].split(",")[0];

  // platform
  const os = specifications
    .find((obj) => obj.title === "Platform")
    .specs.find((spec) => spec.key === "OS")?.val;

  const cpu = specifications
    .find((obj) => obj.title === "Platform")
    .specs.find((spec) => spec.key === "CPU")?.val;
  const gpu = specifications
    .find((obj) => obj.title === "Platform")
    .specs.find((spec) => spec.key === "GPU")?.val;
  // memory
  const ram = specifications
    .find((obj) => obj.title === "Memory")
    .specs.find((spec) => spec.key === "Internal")?.val;

  // Main Camera
  const mainCamera = specifications
    .find((obj) => obj.title === "Main Camera")
    .specs.find(
      (spec) =>
        spec.key === "Single" || spec.key === "Dual" || spec.key === "Triple"
    )
    ?.val[0].split(",")[0];
  const videoCamera = specifications
    .find((obj) => obj.title === "Main Camera")
    .specs.find((spec) => spec.key === "Video")?.val;

  // selfie Camera
  const selfieCamera = specifications
    .find((obj) => obj.title === "Selfie camera")
    .specs.find(
      (spec) =>
        spec.key === "Single" || spec.key === "Dual" || spec.key === "Triple"
    )
    ?.val[0].split(",")[0];

  const selfieVideoCamera = specifications
    .find((obj) => obj.title === "Selfie camera")
    .specs.find((spec) => spec.key === "Video")?.val;

  function handleImage(index) {
    setImageIndex(index);
  }
  const isProductInWishlist = wishlist.some((item) => {
    return item.data.phone_name === phone_name;
  });

  const isProductInCartlist = cartlist?.some(
    (item) => item.data.phone_name === phone_name
  );

  function handleToggleWishList() {
    if (isProductInWishlist) navigate("/wishlist");
    else {
      addToWishlist({ data: phoneDetails, slug });
    }
  }
  function handleToggleCartList() {
    if (isProductInCartlist) navigate("/cart");
    else {
      addToCartlist({ data: phoneDetails, slug }, cartPrice);
    }
  }

  return (
    <div className="flex flex-col justify-center gap-5">
      <div className="h-full flex lg:flex-row flex-col lg:items-start items-center gap-12 lg:mx-5 font-semibold mb-5 border-b-2 border-black-04 dark:border-white-02 pb-7">
        <div className="lg:flex-[0_1_40%] flex flex-col w-[80%]">
          <div className="mb-3">
            <img src={phone_images[imageIndex]} className="w-full rounded-md" />
          </div>
          <div className="w-full flex gap-2 items-center justify-center flex-wrap">
            {phone_images.map((img, i) => (
              <img
                src={img}
                alt="image"
                key={i}
                className={`max-w-[65px] h-[65px] cursor-pointer p-[2px] border-2 border-solid  duration-200 hover:border-yellow-500 dark:hover:border-yellow-500  rounded-md bg-white ${
                  i === imageIndex
                    ? `border-yellow-500 `
                    : `border-white-02 dark:border-white`
                }`}
                onClick={() => handleImage(i)}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col w-full justify-start gap-4 text-black-04 dark:text-stone-100">
          <div>
            <div className="md:text-[22px] text-[19px] font-bold  tracking-wider border-b-2 border-black-01 dark:border-white-02 pb-2 mb-2">
              {brand} {phone_name}
            </div>
            <p className="text-[16px] font-semibold flex gap-1 flex-wrap text-yellow-600 dark:text-yellow-500">
              price:
              <span className="text-black-03 italic dark:text-white-01">
                {finalPrice}
              </span>
            </p>
          </div>
          <div className="flex flex-wrap gap-1">
            <p className=" text-yellow-600 dark:text-yellow-500">
              Available colors:
            </p>
            {colors.map((color) => (
              <span
                key={color}
                className="text-black-03 italic dark:text-white-01"
              >
                {color}
              </span>
            ))}
          </div>
          <p className="sm:text-[16px] text-[14px] font-semibold flex gap-1 flex-wrap text-yellow-600 dark:text-yellow-500">
            Storage & RAM:
            <span className="text-black-03 italic dark:text-white-01">
              {ram}
            </span>
          </p>
          <div>
            <p className=" text-yellow-600 dark:text-yellow-500">
              Size:{" "}
              <span className="text-black-03 italic dark:text-white-01">
                {size}
              </span>
            </p>
          </div>
          <div>
            <p className=" text-yellow-600 dark:text-yellow-500 text-wrap">
              Operating System:{" "}
              <span className="text-black-03 italic dark:text-white-01">
                {os || "Not Provided"}
              </span>
            </p>
          </div>

          <div className="flex flex-row flex-wrap gap-5 items-start  justify-between w-full">
            <div className="flex flex-col md:flex-row items-center justify-start  gap-5 flex-wrap">
              <div className=" bg-yellow-400 dark:bg-yellow-500 rounded-full flex items-center justify-center py-2  px-4 text-[16px] font-semibold shadow-inner hover:bg-yellow-500 dark:hover:bg-yellow-600 duration-200">
                <button
                  className="flex items-center justify-center gap-1"
                  onClick={handleToggleCartList}
                >
                  <ShoppingCartIcon
                    width={18}
                    className={`${
                      isProductInCartlist &&
                      "text-black-02 fill-black-02 dark:text-white dark:fill-white"
                    }`}
                  />
                  {isProductInCartlist ? "View my Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
            <div className=" bg-red-500  rounded-full flex items-center justify-center py-2 px-4 text-[16px] font-semibold shadow-inner hover:bg-red-600  duration-200 self-end">
              <button
                className="flex items-center justify-center gap-1"
                onClick={handleToggleWishList}
              >
                <HeartIcon
                  width={18}
                  className={`${
                    isProductInWishlist &&
                    "text-black-02 fill-black-02 dark:text-white dark:fill-white"
                  }`}
                />
                {isProductInWishlist ? "View my wishlist" : "Add to wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <p className="md:text-[30px] text-[25px] font-bold text-black-02 dark:text-white-01 tracking-wide">
          More Information
        </p>
        <div className="flex md:flex-row flex-col text-white-01 font-semibold">
          <div className="flex flex-col gap-2">
            <p className="sm:text-[16px] text-[14px] font-semibold flex gap-1 flex-wrap text-yellow-600 dark:text-yellow-500">
              CPU:
              <span className="text-black-03 italic dark:text-white-01">
                {cpu || "Not Provided"}
              </span>
            </p>
            <p className="sm:text-[16px] text-[14px] font-semibold flex gap-1 flex-wrap text-yellow-600 dark:text-yellow-500">
              GPU:
              <span className="text-black-03 italic dark:text-white-01">
                {gpu || "Not Provided"}
              </span>
            </p>

            <p className=" text-yellow-600 dark:text-yellow-500">
              Network:{" "}
              <span className="text-black-03 italic dark:text-white-01">
                {networkBand || "Not Provided"}
              </span>
            </p>
            <p className="sm:text-[16px] text-[14px] font-semibold flex gap-1 flex-wrap text-yellow-600 dark:text-yellow-500">
              Main Camera:
              <span className="text-black-03 italic dark:text-white-01">
                {mainCamera || "Not Provided"}
              </span>
            </p>
            <p className="sm:text-[16px] text-[14px] font-semibold flex gap-1 flex-wrap text-yellow-600 dark:text-yellow-500">
              Video Camera:
              <span className="text-black-03 italic dark:text-white-01">
                {videoCamera || "Not Provided"}
              </span>
            </p>

            <p className="sm:text-[16px] text-[14px] font-semibold flex gap-1 flex-wrap text-yellow-600 dark:text-yellow-500">
              Selfi Camera:
              <span className="text-black-03 italic dark:text-white-01">
                {selfieCamera || "Not Provided"}
              </span>
            </p>
            <p className="sm:text-[16px] text-[14px] font-semibold flex gap-1 flex-wrap text-yellow-600 dark:text-yellow-500">
              Selfi Video Camera:
              <span className="text-black-03 italic dark:text-white-01">
                {selfieVideoCamera || "Not Provided"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
