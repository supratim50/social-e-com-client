import Profile from "../../Profile/Profile";
// import PostImageOne from "../../Images/PostImages/PostImageOne";
import PostImageTwo from "../../Images/PostImages/PostImageTwo";

// CSS
import style from "./Postcard.module.scss";

const Postcard = ({ classList }) => {
  return (
    <div className={`${style.postcard} ${classList && classList} bg-white`}>
      <Profile profileImage="/assets/images/profile.jpg" name="John Watson" date="12 hours ago" />
      <div className="mt-4">
        <p className="paragraph paragraph-text">Social media are interactive Web 2.0 Internet-based applications. User-generated content—such as text posts or comments, digital photos or videos</p>
      </div>
      {/* <PostImageOne classList="mt-4" /> */}
      <PostImageTwo classList="mt-4" />
    </div>
  );
};

export default Postcard;
