//CSS
import style from "./ProfileListview.module.scss";
//ICONS
import { FaEllipsisH } from "react-icons/fa";

const ProfileListview = ({ name, image }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      <div className={`${style.profile_image_box} overflow-hidden`}>
        <img
          className={`w-100 h-100 ${style.profile_image}`}
          src={`/assets/images/${image && image}`}
          alt="Profile Image"
        />
      </div>
      <p className="heading-secondary flex-fill mb-0 ml-3">{name && name}</p>

      <div className={`${style.icon}`}>
        <FaEllipsisH />
      </div>
    </div>
  );
};

export default ProfileListview;
