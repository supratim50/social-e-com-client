import style from "./ProfileImage.module.scss";

const ProfileImage = ({image}) => {
    return (
        <div className={`${style.profile_box} overflow-hidden`}>
            <img
              src={image && image}
              className={`w-100 h-100 ${style.profile_img}`}
            />
          </div>
    )
}

export default ProfileImage
