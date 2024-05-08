import React, { useEffect, useRef, useState } from "react";
import HeaderProduct from "./HeaderProduct";
import Pagination from "./Pagination";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSearchParams } from "react-router-dom";
import useLatest from "../features/phones/useLatest";
import { RESULT_PER_PAGE } from "../utils/constants";

const SearchBar = () => {
  const { isLoading: isLoadingLatest, latest } = useLatest();
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const listRef = useRef(null);
  const [searchParams] = useSearchParams();

  const handleClickOutside = (event) => {
    if (listRef.current && !listRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  if (isLoadingLatest) return;

  const filterName = latest.filter((name) =>
    name.phone_name.toLowerCase().includes(inputValue.toLocaleLowerCase())
  );
  let page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const from = RESULT_PER_PAGE * (page - 1);
  const to = from + RESULT_PER_PAGE;
  const paginationArray = filterName.slice(from, to);

  function changeInputValue(e) {
    setIsVisible(true);
    setInputValue((v) => (v = e.target.value));
    page = 1;
  }

  return (
    <div className="relative" ref={listRef}>
      <input
        type="search"
        className="relative m-0 block flex-auto rounded-full  px-9 py-[9px] text-base font-normal leading-[1.6] outline-none transition-all duration-200 ease-in-out focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 w-40 md:w-64 md:focus:w-72 bg-gray-100 text-stone-600 placeholder:text-stone-400  tracking-wider dark:bg-black-02 dark:placeholder:text-gray-600 dark:text-white"
        placeholder="Search"
        aria-label="Search"
        value={inputValue}
        onChange={(e) => changeInputValue(e)}
        onFocus={(e) => changeInputValue(e)}
      />

      <MagnifyingGlassIcon
        width={24}
        className="text-gray-500 dark:text-white absolute bottom-1/2 translate-y-1/2 left-2"
      />
      {inputValue && isVisible && filterName.length !== 0 && (
        <div className="absolute  -left-8 flex flex-col bg-gray-100 dark:bg-black-01 rounded-md overflow-hidden shadow-lg my-3 z-20 sm:max-w-[300px] sm:w-[250px] w-[200px]">
          <ul
            className="flex flex-col w-full"
            onClick={() => setIsVisible(false)}
          >
            {paginationArray.map((item, i) => (
              <HeaderProduct
                item={item}
                key={item.phone_name}
                index={i}
                setInputValue={setInputValue}
                inputValue={inputValue}
              />
            ))}
          </ul>
          <Pagination count={filterName.length} inputValue={inputValue} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
