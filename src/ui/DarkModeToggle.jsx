import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      {isDarkMode ? (
        <MoonIcon
          onClick={toggleDarkMode}
          width={24}
          className="transition duration-200 hover:text-yellow-600 cursor-pointer"
        />
      ) : (
        <SunIcon
          onClick={toggleDarkMode}
          width={24}
          className="transition duration-200 hover:text-yellow-600 cursor-pointer"
        />
      )}
    </>
  );
};

export default DarkModeToggle;
