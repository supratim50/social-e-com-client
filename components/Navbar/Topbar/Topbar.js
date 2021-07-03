import { useState } from "react";
import Link from "next/link";

//CSS
import style from "./Topbar.module.scss";

// ICONS
import { FaBell, FaSearch } from "react-icons/fa";

const Topbar = () => {
  const [active, setActive] = useState(false);

  const setActiveFunc = () => {
    setActive(true);
  };

  return (
    <>
      <div
        className={`fixed-top bg-white px-5 py-3 d-flex justify-content-between align-items-center shadow-sm`}
      >
        {/* logo */}
        <Link href="/">
          <a className="text-decoration-none">
            <div className={`${style.logo}`}>Social-e-com</div>
          </a>
        </Link>

        {/* USER DETAILS */}
        <div className="d-flex justify-content-between align-items-center">
          {/* SEARCH BOX */}
          <div
            className={`px-3 d-flex align-items-center rounded-md ${
              style.search_box
            } ${active ? style.search_box_active : ""}`}
            onClick={setActiveFunc}
          >
            <div
              className={`${style.icon} ${style.icon_search} d-flex justify-content-center align-items-center`}
            >
              <FaSearch />
            </div>
            <div>
              <input
                className={`border-0 paragraph py-3 ${style.input} ${
                  active ? style.input_active : ""
                }`}
                placeholder="Search"
              />
            </div>
          </div>
          {/* USER NOTIFICATION */}
          <div
            className={`p-3 d-flex align-items-center ${style.icon} ${style.notification}`}
          >
            <FaBell />
          </div>
          {/* USER IMAGE */}
          <div className={`${style.profile_box} overflow-hidden ml-3`}>
            <img
              src="/assets/images/profile.jpg"
              className={`w-100 h-100 ${style.profile_img}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
