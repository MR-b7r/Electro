import { HeartIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const WishHeaderIcon = () => {
  return (
    <Link to="/wishlist">
      <HeartIcon
        width={24}
        className="transition duration-200 hover:text-red-700 cursor-pointer "
      />
    </Link>
  );
};

export default WishHeaderIcon;
