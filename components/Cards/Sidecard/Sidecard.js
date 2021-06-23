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
      <FollowersList name="Joshep Watson" image="profile.jpg" />
      <FollowersList name="John Watson" image="profile.jpg" />
      <FollowersList name="Joshep Watson" image="profile.jpg" />
      <FollowersList name="Joshep Watson" image="profile.jpg" />
      <FollowersList name="Joshep Watson" image="profile.jpg" />
    </div>
  );
};

export default Sidecard;
