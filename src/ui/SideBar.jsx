import React from "react";
import bars from "../assets/icons/bars.svg";
import logo from "../assets/icons/logo-base.svg";
import rectangel from "../assets/icons/Rectangle 4.svg";
import { NavLink, useLocation } from "react-router-dom";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
  InboxStackIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";

const topElems = [
  {
    name: "Home",
    img: <HomeIcon width={24} />,
    path: "/home",
  },
  {
    name: "Shop",
    img: <ShoppingBagIcon width={24} />,
    path: "/shop",
  },
  {
    name: "Popular Products",
    img: <InboxStackIcon width={24} />,
    path: "/popular-products",
  },
  {
    name: "Contact Us",
    img: <ChatBubbleOvalLeftEllipsisIcon width={24} />,
    path: "/contact",
  },
];
const bottomElems = [
  {
    name: "Settings",
    img: <Cog6ToothIcon width={24} />,
    path: "/settings",
  },
  {
    name: "Help",
    img: <QuestionMarkCircleIcon width={24} />,
    path: "/help",
  },
];

const SideBar = () => {
  const location = useLocation();
  return (
    <>
      <div className="flex items-center mb-[44px] gap-[30px] px-[34px] justify-center ">
        <img
          src={logo}
          alt="logo"
          className="md:mr-auto md:border-r-[2px]  md:dark:border-gray-700  md:border-gray-300 md:pr-[68px] min-w-[24px]"
        />
        <img src={bars} alt="bar" className="ml-auto hidden md:block" />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <ul>
          {topElems.map((el, i) => (
            <NavLink
              to={`${el.path}`}
              className={`mb-4 rounded-r-full h-[44px] flex items-center md:justify-normal justify-center text-gray-500 dark:text-gray-400  hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white duration-200 ${
                location.pathname === el.path
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                  : ""
              }`}
              key={i}
            >
              {location.pathname === el.path && (
                <img src={rectangel} className="hidden md:block" />
              )}

              <div className="sidebar flex gap-2 items-center md:px-[34px] ">
                <div
                  className={` ${
                    location.pathname === el.path
                      ? "text-yellow-500"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {el.img}
                </div>

                <span className="hidden md:block">{el.name}</span>
              </div>
            </NavLink>
          ))}
        </ul>
        <ul className="">
          {bottomElems.map((el, i) => (
            <li
              className={`mb-4 rounded-r-full h-[44px] flex items-center md:justify-normal justify-center text-gray-500 dark:text-gray-400  hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white duration-200 ${
                location.pathname === el.path
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                  : ""
              }`}
              key={i}
            >
              {location.pathname === el.path && (
                <img src={rectangel} className="hidden md:block" />
              )}

              <NavLink className="flex gap-2 items-center md:px-[34px]">
                <div
                  className={` ${
                    location.pathname === el.path
                      ? "text-yellow-500"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {el.img}
                </div>
                <span className="hidden md:block ">{el.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3 text-sm font-semibold  text-gray-500 dark:text-gray-4 hidden md:block">
        <div className="flex items-center justify-evenly border-t-[1px] dark:border-gray-700  border-gray-300 pt-3">
          <p className="cursor-pointer">Terms</p>
          <p className="cursor-pointer">Privacy</p>
          <p className="cursor-pointer">Help</p>
        </div>
        <div className="text-center">
          Copyright 2024 <br />
          Coded By Haitham Bahr
        </div>
      </div>
    </>
  );
};

export default SideBar;
