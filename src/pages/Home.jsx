import React from "react";
import TopByFansComponent from "../features/phones/TopByFansComponent";

const Home = () => {
  return (
    <div className="mb-5 ">
      <div className="text-[30px] sm:text-[35px] md:text-[40px] font-bold text-black-04 dark:text-white-01 mb-7 leading-[60px]">
        Explore Which Devices are <br />
        <span className="boxEffect relative z-10 before:bg-gradient-to-br from-yellow-400 to-yellow-600 dark:text-white ">
          Top Rated
        </span>{" "}
        By Fans!
      </div>
      <TopByFansComponent />
    </div>
  );
};

export default Home;
