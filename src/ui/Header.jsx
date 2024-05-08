import React, { useEffect, useRef, useState } from "react";
import {
  Bars2Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import DarkModeToggle from "./DarkModeToggle";
import WishHeaderIcon from "./WishHeaderIcon";
import SearchBar from "./SearchBar";
import CartHeader from "./CartHeader";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isBarOpen, setIsBarOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const barMobileRef = useRef(null);
  const AccountRef = useRef(null);
  const navigate = useNavigate();
  function toggleMenu() {
    setIsBarOpen((isBarOpen) => !isBarOpen);
  }

  function toggleAccount() {
    setIsAccountOpen((isAccountOpen) => !isAccountOpen);
  }

  const handleClickOutside = (event) => {
    if (barMobileRef.current && !barMobileRef.current.contains(event.target)) {
      setIsBarOpen(false);
    }
    if (AccountRef.current && !AccountRef.current.contains(event.target)) {
      setIsAccountOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-[44px] my-[24px] flex justify-between items-start">
      <SearchBar />
      <div className="md:flex items-end justify-center gap-5 text-neutral-700 hidden py-[9px] dark:text-white">
        <DarkModeToggle />
        <WishHeaderIcon />
        <CartHeader />
        <div className="relative" ref={AccountRef}>
          <UserCircleIcon
            onClick={() => toggleAccount()}
            width={24}
            className={`cursor-pointer rounded-full ${
              isAccountOpen && "ring ring-yellow-500"
            }`}
          />
          {isAccountOpen && (
            <div className="absolute flex flex-col items-center justify-center  shadow-lg rounded-lg overflow-hidden bg-stone-100 dark:bg-black-04 right-0 top-8 min-w-[90px] min-h-[120px] z-20 ">
              <Link
                className="flex-1 text-center text-black-04  content-center dark:text-gray-200 font-semibold  cursor-pointer hover:text-yellow-600 hover:dark:text-yellow-500 w-full hover:bg-stone-200 hover:dark:bg-black-01"
                onClick={() => navigate("/login")}
              >
                Login
              </Link>
              <Link
                className="flex-1  text-center  content-center text-black-04 dark:text-gray-200 font-semibold cursor-pointer hover:text-yellow-600 hover:dark:text-yellow-500 w-full hover:bg-stone-200 hover:dark:bg-black-01"
                onClick={() => navigate("/signup")}
              >
                Sign-up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* For Mobile View */}
      <div className="block md:hidden py-[9px] ml-4" ref={barMobileRef}>
        <div className="relative">
          {isBarOpen ? (
            <XMarkIcon
              width={24}
              className="cursor-pointer transition-all duration-200  text-white-02 hover:text-black-04 dark:hover:text-white"
              onClick={() => toggleMenu()}
            />
          ) : (
            <Bars2Icon
              width={24}
              className="cursor-pointer transition-all duration-200  text-white-02 hover:text-black-04 dark:hover:text-white"
              onClick={() => toggleMenu()}
            />
          )}
          <ul
            className={`absolute z-[1000] m-0  right-0 flex flex-col items-center list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg dark:bg-black-04 transition-all duration-300 ${
              isBarOpen ? "block top-[35px] min-w-max" : "hidden top-0"
            }`}
          >
            <li>
              <a
                className="block w-full whitespace-nowrap px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-black-04 dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                href="#"
              >
                <DarkModeToggle />
              </a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-black-04 dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                href="wishlist"
              >
                <WishHeaderIcon />
              </a>
            </li>
            <li>
              <a
                className="block w-full whitespace-nowrap px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-black-04 dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                href="#"
              >
                <CartHeader />
              </a>
            </li>

            <li>
              <Link
                className="group block w-full whitespace-nowrap px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-black-04 dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                onClick={() => navigate("/login")}
              >
                <span className="group-hover:text-yellow-500">Log in</span>
              </Link>
            </li>
            <li>
              <Link
                className="group block w-full whitespace-nowrap px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-black-04 dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                onClick={() => navigate("/signup")}
              >
                <span className="group-hover:text-yellow-500">Sign up</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
