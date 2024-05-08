/* eslint-disable */

import React from "react";
import { useNavigate } from "react-router-dom";
import HighlightMatch from "./HighlightMatch";

const HeaderProduct = ({ item, index, setInputValue, inputValue }) => {
  const { slug, phone_name, image } = item;
  const navigate = useNavigate();
  return (
    <li
      className={`z-20 max-w-full  mb-1 cursor-pointer  min-h-[70px] h-20 flex items-center  justify-between duration-200 hover:bg-gray-200 dark:hover:bg-black-02 p-1 rounded-sm border-b-2 border-white-01 dark:border-black-03`}
      onClick={() => {
        navigate(`/details/${slug}`);
        setInputValue("");
      }}
    >
      <img
        src={image}
        className="h-full max-w-20 mr-4 border-2 border-solid border-black-04 dark:border-white"
      />
      {/* <p className="text-black-04 dark:text-stone-300 text-[15px] font-semibold pr-1 text-wrap">
        phone_name
      </p> */}
      <HighlightMatch text={phone_name} searchValue={inputValue} />
    </li>
  );
};

export default HeaderProduct;
