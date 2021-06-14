//CSS
import style from "./Topbar.module.scss";

const Topbar = () => {
  return (
    <>
      <div
        className={`px-5 py-3 d-flex justify-content-between align-items-center shadow-sm`}
      >
        {/* logo */}
        <div className={`${style.logo}`}>Social-e-com</div>
        {/* user details */}
        <div>
          {/* user image */}
          <div className={`${style.profile_box} overflow-hidden`}>
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
