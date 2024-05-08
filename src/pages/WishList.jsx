import React from "react";
import { useWishList } from "../context/WishListContext";
import WishlistItem from "../ui/WishlistItem";
import { useToast } from "@chakra-ui/react";
import EmptyCart from "../assets/images/empty-cart.svg";
const WishList = () => {
  const { wishlist } = useWishList();
  const toast = useToast();
  if (!wishlist.length)
    toast({
      position: "top",
      title: `Wishlist is empty!`,
      description:
        "Looks like your wishlist is empty. Let's start filling it up with some fantastic finds!",
      status: "info",
      duration: 4000,
      isClosable: true,
      colorScheme: "yellow",
      variant: "left-accent",
      containerStyle: {
        width: "650px",
        maxWidth: "100%",
        alignItems: "center",
      },
    });

  // function for getting newest added phone to the top of wishlist page
  const wishListByDate = (wishlist) => {
    let reversedArray = [];
    for (let i = wishlist.length - 1; i >= 0; i--) {
      reversedArray.push(wishlist[i]);
    }
    return reversedArray;
  };
  return (
    <div className="mb-5 flex flex-col ">
      <div className="text-[30px] sm:text-[35px] md:text-[40px] font-bold text-black-04 dark:text-white-01 mb-7 leading-[60px] tracking-wider">
        Wishlist
      </div>
      {!wishlist.length ? (
        <div className="flex items-center justify-center ">
          <img src={EmptyCart} className="max-h-[100vh] " alt="empty cart" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-5">
          {wishListByDate(wishlist).map((wish, i) => (
            <WishlistItem key={i} data={wish.data} slug={wish.slug} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
