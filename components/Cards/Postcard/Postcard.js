import ProfileImage from "../../Images/ProfileImage/ProfileImage";

import style from "./Postcard.module.scss";

const Postcard = ({ classList }) => {
  return (
    <div className={`${style.postcard} ${classList && classList} bg-white p-4`}>
      <ProfileImage image="/assets/images/profile.jpg" />
    </div>
  );
};

export default Postcard;
