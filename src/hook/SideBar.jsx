import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";
import bars from "../assets/icons/bars.svg";
import logo from "../assets/icons/logo-base.svg";
import rectangel from "../assets/icons/Rectangle 4.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
  InboxStackIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { ClassNames } from "@emotion/react";

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
const MotionNavLink = motion(NavLink);
const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);
  function handleMenuToggle() {
    setSidebarIsOpen(!sidebarIsOpen);
  }
  return (
    // <motion.aside initial={{ width: 80 }} animate={{ width: `var(--width)` }}>
    <motion.div
      initial={{ width: "80px" }} // Initial width
      animate={{ width: sidebarIsOpen ? "var(--width)" : 80 }} // Animated width based on state
      transition={{ duration: 0.3 }} // Duration of the animation
      className={` bg-[#F9FAFB] dark:bg-black-04 transition-colors duration-300 py-[24px] flex justify-between flex-col w-[80px] sm:[140px] md:[260px] width-responsive`}
    >
      <div className="flex items-center mb-[44px] gap-[30px] px-[34px] justify-center ">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
          className={`cursor-pointer md:mr-auto md:border-r-[2px]  md:dark:border-gray-700  md:border-gray-300 md:pr-[68px] min-w-[24px] ${
            !sidebarIsOpen && "md:hidden"
          }`}
        />
        <img
          src={bars}
          alt="bar"
          className={`ml-auto hidden md:block cursor-pointer ${
            !sidebarIsOpen && "min-w-[20px] min-h-[20px]"
          }`}
          onClick={handleMenuToggle}
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <ul className={` ${!sidebarIsOpen && "flex flex-col items-center"}`}>
          {topElems.map((el, i) => (
            <MotionNavLink
              variants={itemVariants}
              to={`${el.path}`}
              className={`mb-4 w-full rounded-r-full h-[44px] flex items-center justify-center text-gray-500 dark:text-gray-400  hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white duration-200 ${
                location.pathname === el.path
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                  : ""
              } ${sidebarIsOpen && "md:justify-normal"}`}
              key={i}
            >
              {location.pathname === el.path && (
                <img
                  src={rectangel}
                  className={`hidden ${!sidebarIsOpen ? "hidden" : "md:block"}`}
                  alt="rectangel"
                />
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

                <span
                  className={`hidden ${!sidebarIsOpen ? "hidden" : "md:block"}`}
                >
                  {el.name}
                </span>
              </div>
            </MotionNavLink>
          ))}
        </ul>
        <ul className={` ${!sidebarIsOpen && "flex flex-col items-center"}`}>
          {bottomElems.map((el, i) => (
            <MotionNavLink
              variants={itemVariants}
              className={`mb-4 w-full rounded-r-full h-[44px] flex items-center  justify-center text-gray-500 dark:text-gray-400  hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white duration-200 ${
                location.pathname === el.path
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                  : ""
              } ${sidebarIsOpen && "md:justify-normal"}`}
              key={i}
              to={`${el.path}`}
            >
              {location.pathname === el.path && (
                <img
                  src={rectangel}
                  className={`hidden ${!sidebarIsOpen ? "hidden" : "md:block"}`}
                  alt="rectangel"
                />
              )}

              <div className="flex gap-2 items-center md:px-[34px]">
                <div
                  className={` ${
                    location.pathname === el.path
                      ? "text-yellow-500"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {el.img}
                </div>
                <span
                  className={`hidden  ${
                    !sidebarIsOpen ? "hidden" : "md:block"
                  }`}
                >
                  {el.name}
                </span>
              </div>
            </MotionNavLink>
          ))}
        </ul>
      </div>
      <div
        className={` flex-col gap-3 text-sm font-semibold  text-gray-500 dark:text-gray-4 hidden ${
          !sidebarIsOpen ? "hidden" : "md:flex"
        }`}
      >
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
    </motion.div>
    // </motion.aside>
  );
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};
export default SideBar;
