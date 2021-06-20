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
