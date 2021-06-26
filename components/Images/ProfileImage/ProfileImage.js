import style from "./ProfileImage.module.scss";

const ProfileImage = ({ image, small }) => {
  return (
    <div
      className={`${style.profile_box} ${
        small ? style.profile_box__small : ""
      } overflow-hidden`}
    >
      <img
        src={image && image}
        className={`w-100 h-100 ${style.profile_img}`}
      />
    </div>
  );
};

export default ProfileImage;
