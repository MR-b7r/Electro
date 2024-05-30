import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { extractNumbersFromString } from "../utils/helpers";

function getPrice(cartlist) {
  return cartlist
    .map((data) => {
      const { specifications } = data.data;
      const misc = specifications.filter((spec) => spec.title === "Misc")[0]
        .specs;

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
      return cartPrice;
    })
    .reduce((total, price) => {
      return total + price;
    }, 0);
}

function updateLocalStorage(updateCartlist) {
  localStorage.setItem("cartlist", JSON.stringify(updateCartlist));
}
function updateLocalCartPrice(totalCost) {
  localStorage.setItem("cartlistPrice", JSON.stringify(totalCost));
}

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartlist, setCartList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [quantities, setQuantities] = useState(() => {
    const storedQuantities = localStorage.getItem("itemQuantities");
    return storedQuantities ? JSON.parse(storedQuantities) : {};
  });

  useEffect(() => {
    localStorage.setItem("itemQuantities", JSON.stringify(quantities));
  }, [quantities]);

  useEffect(() => {
    const storedCartList = localStorage.getItem("cartlist");
    const storedCartListPrice = JSON.parse(
      localStorage.getItem("cartlistPrice")
    );

    if (storedCartList || storedCartListPrice) {
      setTotalCost(storedCartListPrice);
    }
  }, []);

  useEffect(() => {
    const storedCartList = localStorage.getItem("cartlist");

    if (storedCartList) {
      setCartList(JSON.parse(storedCartList));
      // getPrice([cartlist]);
    }
  }, [setCartList]);

  const addToCartlist = (product, amount) => {
    setCartList((prevCartlist) => [...prevCartlist, product]);
    updateLocalStorage([...cartlist, product]);
    updateTotal(amount);
  };

  const removeFromCartlist = (productName, amount) => {
    setCartList((prevCartlist) =>
      prevCartlist.filter((pr) => {
        return pr.data.phone_name !== productName;
      })
    );
    updateLocalStorage(
      cartlist.filter((pr) => pr.data.phone_name !== productName)
    );
    updateTotal(amount);
  };

  const updateTotal = (amount = 0) => {
    setTotalCost(totalCost + amount);
    updateLocalCartPrice(totalCost + amount);
  };

  const updateQuantity = (itemId, newQuantity = undefined) => {
    if (newQuantity) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [itemId]: newQuantity,
      }));
    } else {
      setQuantities((quantities) => {
        const updatedQuantities = { ...quantities };
        delete updatedQuantities[itemId];
        return updatedQuantities;
      });
    }
  };
  return (
    <CartContext.Provider
      value={{
        cartlist,
        addToCartlist,
        removeFromCartlist,
        updateTotal,
        setTotalCost,
        totalCost,
        quantities,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useCartList() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext used outside Provider");
  return context;
}

export { CartProvider, useCartList };
