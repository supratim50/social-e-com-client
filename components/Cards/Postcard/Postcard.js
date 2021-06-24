import Profile from "../../Profile/Profile";
// import PostImageOne from "../../Images/PostImages/PostImageOne";
import PostImageTwo from "../../Images/PostImages/PostImageTwo";
import IconButton from "../../Buttons/IconButton/IconButton";
import InputPrimary from "../../Input/InputPrimary/InputPrimary";

// CSS
import style from "./Postcard.module.scss";

// ICON
import { FaThumbsUp, FaComment, FaShare } from "react-icons/fa";

const Postcard = ({ classList }) => {
  return (
    <div className={`${style.postcard} ${classList && classList} bg-white`}>
      <Profile
        profileImage="/assets/images/profile.jpg"
        name="John Watson"
        date="12 hours ago"
      />
      <div className="mt-4">
        <p className="paragraph paragraph-text">
          Social media are interactive Web 2.0 Internet-based applications.
          User-generated content—such as text posts or comments, digital photos
          or videos
        </p>
      </div>
      {/* <PostImageOne classList="mt-4" /> */}
      <PostImageTwo classList="my-4" />
      {/* ------------ icons ------------- */}
      <div className="d-flex">
        <IconButton icon={<FaThumbsUp />} />
        <IconButton icon={<FaComment />} classList="ml-4" />
        <IconButton icon={<FaShare />} classList="ml-4" />
      </div>
      {/* -------------- like count --------------- */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <p className="paragraph paragraph-text">
          <span className="heading-text font-weight-bold">Mr. John</span>
          &nbsp;and 59 others
        </p>
        <p className="paragraph paragraph-text">29 comments</p>
      </div>
      {/* --------------- comment --------------- */}
      <InputPrimary placeholder="Type your comment" />
    </div>
  );
};

export default Postcard;
