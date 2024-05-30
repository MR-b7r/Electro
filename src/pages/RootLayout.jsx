import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import { Spinner } from "@chakra-ui/react";

const RootLayout = () => {
  const { isPending, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isPending) navigate("/login");
  }, [isAuthenticated, isPending, navigate]);

  if (isPending)
    return (
      <div className="h-screen bg-gray-100 dark:bg-black-04 flex items-center justify-center">
        <Spinner width={50} height={50} className="text-yellow-500" />
      </div>
    );

  if (isAuthenticated)
    return (
      <>
        <Outlet />
      </>
    );
};

export default RootLayout;
