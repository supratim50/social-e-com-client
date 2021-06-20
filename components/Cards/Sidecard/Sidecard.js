import FollowersList from "../../Listview/ProfileListview/ProfileListview";

import style from "./Sidecard.module.scss";

const Sidecard = () => {
  return (
    <div className={`${style.sidecard} bg-white mt-4 p-4 mr-3`}>
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
