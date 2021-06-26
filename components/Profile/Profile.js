import ProfileImage from "../Images/ProfileImage/ProfileImage";

import { FaEllipsisH } from "react-icons/fa";

const Profile = ({ classList, profileImage, name, date, small }) => {
  return (
    <div
      className={`d-flex justify-content-between align-items-center ${
        classList && classList
      }`}
    >
      {small ? (
        <ProfileImage image={profileImage && profileImage} small />
      ) : (
        <ProfileImage image={profileImage && profileImage} />
      )}

      <div className="flex-fill ml-3">
        <h3
          className={`heading-text mb-0 ${
            small ? "paragraph font-weight-bold" : "heading-secondary"
          }`}
        >
          {name && name}
        </h3>
        <p
          className={`${
            small ? "paragraph-xs" : "paragraph-sm"
          } paragraph-sm-text mb-0 mt-1`}
        >
          {date && date}
        </p>
      </div>
      <i className="threeDotIcon">
        <FaEllipsisH />
      </i>

      <style jsx>
        {`
          .threeDotIcon {
            font-size: 25px;
            color: #b9b9b9;
          }
        `}
      </style>
    </div>
  );
};

export default Profile;
