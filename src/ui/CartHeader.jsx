import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const CartHeader = () => {
  return (
    <Link to="/cart">
      <ShoppingCartIcon
        width={24}
        className="transition duration-200 hover:text-blue-700 cursor-pointer"
      />
    </Link>
  );
};

export default CartHeader;
