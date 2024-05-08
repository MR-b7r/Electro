import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

function updateLocalStorage(updateWishlist) {
  localStorage.setItem("wishlist", JSON.stringify(updateWishlist));
}
const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
  }, [setWishlist]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
    updateLocalStorage([...wishlist, product]);
  };

  const removeFromWishlist = (productName) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((pr) => {
        return pr.data.phone_name !== productName;
      })
    );
    updateLocalStorage(
      wishlist.filter((pr) => pr.data.phone_name !== productName)
    );
  };
  return (
    <WishListContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishListContext.Provider>
  );
};

WishListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useWishList() {
  const context = useContext(WishListContext);
  if (context === undefined)
    throw new Error("WishListContext used outside Provider");
  return context;
}

export { WishListProvider, useWishList };
