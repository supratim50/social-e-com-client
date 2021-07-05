import { useContext, useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

// lAYOUTS
import AuthLayout from "../components/Layouts/AuthLayout";
// CONTEXTS
import { ProfileContext } from "../contexts/ProfileContext/profile-context";

// COMPONENTS
import RoundButton from "../components/Buttons/RoundButton/RoundButton";

// ICONS
import { FaAngleRight, FaCamera } from "react-icons/fa";

const uploadProfileImage = () => {
  // CONTEXT
  const [state, dispatch] = useContext(ProfileContext);

  // HANDLE HIDDEN FILE INPUT
  const handleInput = () => {
    document.querySelector(".file-input").click();
  };

  // HANDLE FILE ONCHANGE
  const fileOnChange = async (e) => {
    const formData = new FormData();
    formData.append("upload", e.target.files[0]);
    const { data } = await axios.post(
      "http://localhost:4000/upload/me/avatar",
      formData,
      { headers: { Authentication: `Bearer ${state.token}` } }
    );

    dispatch({
      type: "SET-IMAGE",
      userImage: data.userImage,
    });
  };

  // USE EFFECT
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <section className="w-100 d-flex justify-content-center align-items-center">
      <div>
        {/* UPLOAD IMAGES */}
        <div className="image-outside-box d-flex justify-content-center align-items-center">
          <div className="image_box bg-white d-flex justify-content-center align-items-center">
            <div className="image overflow-hidden position-relative">
              <span
                className={`image-layer w-100 h-100 position-absolute d-flex justify-content-center align-items-center`}
                onClick={handleInput}
              >
                <input
                  type="file"
                  className="d-none file-input"
                  onChange={fileOnChange}
                />
                <FaCamera />
              </span>
              <img className="img w-100 h-100" src={state.userImage} />
            </div>
          </div>
        </div>
        {/* REDIRECT PAGE */}
        <Link href="/interests">
          <a>
            <div className="d-flex justify-content-center mt-5">
              <RoundButton icon={<FaAngleRight />} />
            </div>
          </a>
        </Link>
      </div>

      <style jsx>{`
        section {
          height: 100vh;
          background-color: #f0f0f0;
        }

        .image-outside-box {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background-image: linear-gradient(
            138.14deg,
            #413eeb 11.47%,
            rgba(221, 122, 217, 0.87) 84.69%
          );
        }

        .image-outside-box:hover .image-layer {
          opacity: 1;
          visibility: visible;
        }

        .image_box {
          width: 192px;
          height: 192px;
          border-radius: 50%;
        }

        .image {
          width: 188px;
          height: 188px;
          border-radius: 50%;
        }

        .image-layer {
          background-color: rgba(0, 0, 0, 0.7);
          color: #fff;
          font-size: 36px;
          opacity: 0;
          visibility: hidden;
          transition: 0.5s ease;
        }

        .img {
          object-fit: cover;
        }
      `}</style>
    </section>
  );
};

uploadProfileImage.Layout = AuthLayout;

export default uploadProfileImage;
