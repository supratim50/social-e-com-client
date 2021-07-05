import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";

// component
import SquareButton from "../components/Buttons/SquareButton/SquareButton";
import SmallCard from "../components/Cards/SmallCards/SmallCard";
import Modal from "../components/modals/PostsModals/PostsModal";
import Sidenav from "../components/Navbar/Sidenav/Sidenav";

// CONTEXT
import { ProfileContext } from "../contexts/ProfileContext/profile-context";

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
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [show, setShow] = useState(false);
  const [authenticate, setAuthenticate] = useState(false);

  //context
  const [state] = useContext(ProfileContext);

  // SHOW MODAL FUNCTION
  const showFunc = () => {
    setShow(!show);
  };

  const ENDPOINT = "http://localhost:4000";

  // FETCH DATA
  const getPosts = async () => {
    const posts = await axios.get(`${ENDPOINT}/post`);
    setPosts(posts.data);
  };

  const getAuth = () => {
    const token = Cookies.get("token");

    if (token) {
      setAuthenticate(true);
    }
  };

  useEffect(() => {
    getAuth();
    getPosts();
  }, []);

  return (
    <>
      {authenticate ? (
        <>
          <Sidenav active="profile" />
          {/* SECTION */}
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
                <div className="w-100 mt-1 row mx-auto">
                  {/* POST GET DATA */}
                  {posts.map(({ images, title, userEmail }) => {
                    // console.log(likes, images, title, _id);

                    // getProfile(userID);
                    axios
                      .get(`${ENDPOINT}/user/${state.userEmail}`)
                      .then(({ data }) => {
                        setUser(data);
                      })
                      .catch((err) => {
                        console.log(err);
                      });

                    return (
                      <div className="col-4 px-1 mt-2">
                        <SmallCard
                          // key={_id}
                          name={user.name}
                          date="12 hours ago"
                          profileImage={
                            user.userImage
                              ? user.userImage
                              : "/assets/images/defaultProfile.jpg"
                          }
                          images={images}
                          caption={title}
                          showModal={showFunc}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* profile section */}
              <div className="profile bg-white rounded-md px-3 py-4">
                {/* profile details */}
                <div className="d-flex flex-column justify-content-center align-items-center">
                  {/* profile image */}
                  <div className="image-outside-box d-flex justify-content-center align-items-center">
                    <div className="image_box bg-white d-flex justify-content-center align-items-center">
                      <img className="image" src={state.userImage} />
                    </div>
                  </div>
                  {/* name */}
                  <h2 className="heading-secondary heading-text mt-2 mb-0">
                    {state.userName}
                  </h2>
                  <p className="paragraph paragrph-text mt-1 mb-0">
                    {state.userEmail}
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
                    Social media are interactive Web 2.0 Internet-based
                    applications. User-generated content—such as text posts or
                    comments, digital photos or videos.
                  </p>
                </div>
              </div>
            </div>

            {/* SHOW MADAL */}
            {show ? <Modal show showFunction={showFunc} /> : <Modal />}
          </section>
        </>
      ) : (
        <section className="mt-0 w-100 d-flex justify-content-center align-items-center">
          <Link href="/signup">
            <a>Go to Signup page</a>
          </Link>
        </section>
      )}

      <style jsx>{`
        section {
          margin-top: 95px;
          background-color: #fafafa;
          min-height: 100vh;
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
    </>
  );
};

export default profile;
