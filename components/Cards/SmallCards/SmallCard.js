import Profile from "../../Profile/Profile";
import PostImageTwo from "../../Images/PostImages/PostImageTwo";

const SmallCard = ({
  name,
  date,
  profileImage,
  images,
  caption,
  showModal,
}) => {
  return (
    <div className="card_body p-3 bg-white rounded-md d-flex flex-column justify-content-between">
      <Profile
        profileImage={profileImage && profileImage}
        name={name && name}
        date={date && date}
        small
      />
      {caption ? (
        <div className="mt-3" onClick={showModal && showModal}>
          <p className="paragraph-xs paragraph-text text-truncate mb-0">
            {caption}
          </p>
        </div>
      ) : null}

      <div
        onClick={showModal && showModal}
        className="image-box overflow-hidden rounded-md w-100 mt-3 flex-fill"
      >
        {images.map(({ image }) => {
          return <img src={image} className="image w-100 h-100" />;
        })}
      </div>
      <p className="paragraph-sm paragraph-text mb-0 mt-2">
        <span className="heading-text font-weight-bold">Mr. John</span>
        &nbsp;and 59 others
      </p>
      <style jsx>{`
        .card_body {
          height: 350px;
        }

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
