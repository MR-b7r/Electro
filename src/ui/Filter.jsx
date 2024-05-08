import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
/* eslint-disable */
const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get(filterField) || "All";
  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  useEffect(() => {
    function initalLoad() {
      searchParams.get(options[0].value);
    }
    if (!searchParams) document.addEventListener("load", initalLoad);
    return () => document.removeEventListener("load", initalLoad);
  }, [searchParams, options]);

  return (
    <select
      className="py-2 px-3 border-2  border-yellow-500 rounded-lg shadow-sm font-medium text-black-02 dark:text-white-01 bg-slate-100 dark:bg-gray-900 focus:outline-none"
      value={filter}
      onChange={(e) => handleClick(e.target.value)}
    >
      {options.map((option) => (
        <option className="font-medium" key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Filter;
