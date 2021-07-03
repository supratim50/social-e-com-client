import FollowersList from "../../Listview/ProfileListview/ProfileListview";

import style from "./Sidecard.module.scss";

const Sidecard = ({ className }) => {
  return (
    <div
      className={`${style.sidecard} ${
        className && className
      } bg-white w-100 p-4`}
    >
      <div>
        <p className={`heading-primary`}>Followers</p>
      </div>
      <FollowersList name="Rumela Ganguly" image="profile.jpg" />
      <FollowersList name="Rishov Mal" image="profile.jpg" />
      <FollowersList name="Soumya Garang" image="profile.jpg" />
      <FollowersList name="Supratim Mondal" image="profile.jpg" />
    </div>
  );
};

export default Sidecard;
