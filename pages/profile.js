import SquareButton from "../components/Buttons/SquareButton/SquareButton";
import SmallCard from "../components/Cards/SmallCards/SmallCard";

// followers component
const Counting = ({ number, text }) => {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center">
      <p className="paragraph heading-text font-weight-bold mb-0">
        {number && number}
      </p>
      <p className="paragraph paragraph-text mb-0">{text && text}</p>
    </div>
  );
};

// profile
const profile = () => {
  return (
    <section className="overflow-hidden">
      <div className="profile-box row mt-4">
        <div className="posts">
          {/* heading */}
          <div className="px-4 py-3 bg-white rounded-md d-flex justify-content-between align-items-center">
            <h3 className="heading primary-text font-weight-bold mb-0">
              Posts
            </h3>
            <SquareButton />
          </div>
          {/* posts section */}
          <div className="w-100 mt-3 border row mx-auto">
            <div className="col-4 px-1">
              <SmallCard
                name="John Watson"
                date="12 hours ago"
                profileImage="/assets/images/profile.jpg"
                images="/assets/images/productOne.png"
                caption="Social media are interactive Web 2.0 Internet-based applications."
              />
            </div>
            <div className="col-4 px-1">
              <SmallCard
                name="John Watson"
                date="12 hours ago"
                profileImage="/assets/images/profile.jpg"
                images="/assets/images/productOne.png"
              />
            </div>
            <div className="col-4 px-1">
              <SmallCard
                name="John Watson"
                date="12 hours ago"
                profileImage="/assets/images/profile.jpg"
                images="/assets/images/productOne.png"
                caption="Social media are interactive Web 2.0 Internet-based applications."
              />
            </div>
          </div>
        </div>
        {/* profile section */}
        <div className="profile bg-white rounded-md px-3 py-4">
          {/* profile details */}
          <div className="d-flex flex-column justify-content-center align-items-center">
            {/* profile image */}
            <div className="image-outside-box d-flex justify-content-center align-items-center">
              <div className="image_box bg-white d-flex justify-content-center align-items-center">
                <img className="image" src="/assets/images/profile.jpg" />
              </div>
            </div>
            {/* name */}
            <h2 className="heading-secondary heading-text mt-2 mb-0">
              John Watson
            </h2>
            <p className="paragraph paragrph-text mt-1 mb-0">
              joshepwatson@gmail.com
            </p>
          </div>
          {/* profile details end */}
          {/* like post and followers */}
          <div className="d-flex align-items-center justify-content-between mt-4">
            <Counting number="88" text="Posts" />
            <Counting number="52" text="Products" />
            <Counting number="3.5k" text="Followers" />
          </div>
          {/* like post and followers end */}
          {/* about */}
          <div className="mt-4">
            <p className="paragraph paragraph-text">
              Social media are interactive Web 2.0 Internet-based applications.
              User-generated content—such as text posts or comments, digital
              photos or videos.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        section {
          height: 100vh;
          margin-top: 95px;
          background-color: #fafafa;
        }

        .profile-box {
          margin-left: 80px;
        }

        .posts {
          width: 67%;
        }
        .profile {
          width: 28%;
          height: 83%;
          margin-top: 120px;
          position: fixed;
          top: 0;
          right: 10px;
          bottom: 10px;
        }

        .image-outside-box {
          width: 125px;
          height: 125px;
          border-radius: 50%;
          background-image: linear-gradient(
            138.14deg,
            #413eeb 11.47%,
            rgba(221, 122, 217, 0.87) 84.69%
          );
        }

        .image_box {
          width: 117px;
          height: 117px;
          border-radius: 50%;
        }

        .image {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
        }
      `}</style>
    </section>
  );
};

export default profile;
