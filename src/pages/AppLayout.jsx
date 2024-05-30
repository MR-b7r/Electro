import React, { useEffect } from "react";
import SideBar from "../ui/SideBar";
import Header from "../ui/Header";
import { Outlet, useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import { Spinner } from "@chakra-ui/react";

const AppLayout = () => {
  // const { isPending, isAuthenticated } = useUser();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuthenticated && !isPending) navigate("/login");
  // }, [isAuthenticated, isPending, navigate]);

  // if (isPending)
  //   return (
  //     <div className="h-screen bg-gray-100 dark:bg-black-04 flex items-center justify-center">
  //       <Spinner width={50} height={50} className="text-yellow-500" />
  //     </div>
  //   );

  // if (isAuthenticated)
  return (
    <main className="flex flex-row max-w-full min-h-screen overflow-x-hidden bg-white dark:bg-black-03 transition-colors duration-300">
      <SideBar />

      <div className="flex-1 px-[15px] sm:px-[24px] flex flex-col transition-colors duration-300  shadow-xl">
        <Header />
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;
