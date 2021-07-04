import { useState } from "react";

import SidenavIcon from "./SidenavIcon/SidenavIcon";
import {
  FaHome,
  FaUserFriends,
  FaShoppingCart,
  FaShopify,
  FaCog,
} from "react-icons/fa";

//CSS
import style from "./Sidenav.module.scss";

const Sidenav = ({ active }) => {
  return (
    <div
      className={`${style.sidenav} bg-white mt-4 py-4 px-3 d-flex flex-column justify-content-between`}
    >
      <div className="d-flex align-items-center justify-content-center">
        {active === "home" ? (
          <SidenavIcon icon={<FaHome />} active />
        ) : (
          <SidenavIcon icon={<FaHome />} />
        )}
      </div>
      <div className="d-flex align-items-center justify-content-center">
        {active === "profile" ? (
          <SidenavIcon icon={<FaUserFriends />} active />
        ) : (
          <SidenavIcon icon={<FaUserFriends />} />
        )}
      </div>
      <div className="d-flex align-items-center justify-content-center">
        {active === "cart" ? (
          <SidenavIcon icon={<FaShoppingCart />} active />
        ) : (
          <SidenavIcon icon={<FaShoppingCart />} />
        )}
      </div>
      <div className="d-flex align-items-center justify-content-center">
        {active === "shop" ? (
          <SidenavIcon icon={<FaShopify />} active />
        ) : (
          <SidenavIcon icon={<FaShopify />} />
        )}
      </div>
      <div className="d-flex align-items-center justify-content-center">
        {active === "settings" ? (
          <SidenavIcon icon={<FaCog />} active />
        ) : (
          <SidenavIcon icon={<FaCog />} />
        )}
      </div>
    </div>
  );
};

export default Sidenav;
