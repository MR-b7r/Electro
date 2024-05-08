import React from "react";
import { useCartList } from "../context/CartContext";
import CartlistItem from "../ui/CartlistItem";
import { Link, useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const { cartlist, totalCost } = useCartList();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col">
      <div className="flex items-start justify-between">
        <h2 className="text-[30px] sm:text-[35px] md:text-[40px] font-bold text-black-04 dark:text-white-01 mb-7 leading-[60px] tracking-wider">
          Shopping cart
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto ">
        <div className="mt-3">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-white-02 px-5">
              {cartlist.map((product, i) => (
                <CartlistItem key={i} data={product} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white-01 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-[16px] font-bold text-black-04 dark:text-gray-100  tracking-wider italic">
          <p>Subtotal</p>
          <p>${totalCost.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-[16px] font-bold text-black-04 dark:text-gray-100 tracking-wider italic">
          <p>Taxes</p>
          <p>${totalCost}</p>
        </div>
        <div className="flex justify-between text-[16px] font-bold text-black-04 dark:text-gray-100 tracking-wider italic">
          <p>Total</p>
          <p>${totalCost}</p>
        </div>
        <div className="mt-6">
          <Link
            onClick={() => navigate("/checkout")}
            className="flex items-center justify-center rounded-md border border-transparent bg-yellow-500 dark:bg-yellow-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-yellow-600 dark:hover:bg-yellow-700"
          >
            Checkout
          </Link>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{" "}
            <Link
              onClick={() => navigate("/shop")}
              type="button"
              className="font-medium text-yellow-600 hover:text-yellow-500"
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
