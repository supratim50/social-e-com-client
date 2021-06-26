import profile from "../../../pages/profile";
import Profile from "../../Profile/Profile";

const SmallCard = ({ name, date, profileImage, images, caption }) => {
  return (
    <div className="card_body p-3 bg-white rounded-md">
      <Profile
        profileImage={profileImage && profileImage}
        name={name && name}
        date={date && date}
        small
      />
      {caption ? (
        <p className="paragraph-sm paragraph-text mt-3">{caption}</p>
      ) : null}

      <div className="image-box overflow-hidden rounded-md w-100 mt-3">
        <img src={images && images} className="image w-100 h-100" />
      </div>
      <p className="paragraph-sm paragraph-text mb-0 mt-2">
        <span className="heading-text font-weight-bold">Mr. John</span>
        &nbsp;and 59 others
      </p>
      <style jsx>{`
        .image-box {
          height: 198px;
        }
        .image {
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default SmallCard;
