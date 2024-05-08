import React from "react";
/* eslint-disable */

const HighlightMatch = ({ searchValue, text }) => {
  const searchLetters = searchValue.toLowerCase().split("");

  return (
    <p className="text-black-04 dark:text-stone-200 text-[15px] font-normal pr-1 text-wrap">
      {text.split("").map((letter, i) => {
        return searchLetters.includes(letter.toLowerCase()) ? (
          <span key={i} className="font-bold dark:text-white">
            {letter}
          </span>
        ) : (
          <span key={i} className="font-normal">
            {letter}
          </span>
        );
      })}
    </p>
  );
};

export default HighlightMatch;
