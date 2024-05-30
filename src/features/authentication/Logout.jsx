import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import React from "react";
import useLogout from "./useLogout";
import PropTypes from "prop-types";

const Logout = ({ style, screen }) => {
  const { logout, isPending } = useLogout();

  return (
    <button className={style} onClick={logout} disabled={isPending}>
      <ArrowLeftStartOnRectangleIcon
        width={`${screen === "desktop" ? 24 : 20}`}
        className={`${screen === "desktop" ? "mr-0" : "mr-2"}`}
      />
      {!screen && <span className="group-hover:text-yellow-500">Logout</span>}
    </button>
  );
};

Logout.propTypes = {
  style: PropTypes.node.isRequired,
  screen: PropTypes.node.isRequired,
};

export default Logout;
