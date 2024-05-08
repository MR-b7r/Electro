/* eslint-disable */

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { RESULT_PER_PAGE } from "../utils/constants";

const Pagination = ({ count, inputValue }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageCount = Math.ceil(count / RESULT_PER_PAGE);
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }
  useEffect(() => {
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  }, [inputValue]);
  if (pageCount < 1) return null;

  return (
    <div className="flex items-center justify-between w-full px-3 text-yellow-500 font-semibold my-2">
      <button onClick={prevPage} disabled={currentPage === 1}>
        <ArrowLeftIcon className="w-[21px] cursor-pointer" />
      </button>
      <span>
        {currentPage} / {pageCount}
      </span>
      <button onClick={nextPage} disabled={currentPage === pageCount}>
        <ArrowRightIcon className="w-[21px]  cursor-pointer" />
      </button>
    </div>
  );
};

export default Pagination;
