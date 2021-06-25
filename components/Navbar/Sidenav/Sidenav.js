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

const Sidenav = () => {
  const [home, setHome] = useState(true);
  const [profile, setProfile] = useState(false);
  const [myCart, setMyCart] = useState(false);
  const [shop, setShop] = useState(false);
  const [settings, setSettings] = useState(false);

  const setHomeFunc = () => {
    setHome(!home);
  };
  const setProfileFunc = () => {
    setHome(!home);
  };
  const setMyCartFunc = () => {
    setHome(!home);
  };
  const setShopFunc = () => {
    setHome(!home);
  };
  const setSettingsFunc = () => {
    setHome(!home);
  };

  return (
    <div
      className={`${style.sidenav} bg-white mt-4 py-4 px-3 d-flex flex-column justify-content-between`}
    >
      <div className="d-flex align-items-center justify-content-center">
        <SidenavIcon icon={<FaHome />} active />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <SidenavIcon icon={<FaUserFriends />} />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <SidenavIcon icon={<FaShoppingCart />} />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <SidenavIcon icon={<FaShopify />} />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <SidenavIcon icon={<FaCog />} />
      </div>
    </div>
  );
};

export default Sidenav;
