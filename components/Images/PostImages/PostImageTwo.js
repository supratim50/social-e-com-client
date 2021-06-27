import React from "react";

const PostImageTwo = ({ classList }) => {
  return (
    <div
      className={`image-container d-flex justify-content-between align-items-center overflow-hidden ${
        classList && classList
      }`}
    >
      <div className="image-one-box">
        <img src="/assets/images/productOne.png" className="image-one" />
      </div>

      <div className="image-two-box d-flex flex-column justify-content-between align-items-center">
        <img src="/assets/images/productTwo.png" className="image-two" />
        <img src="/assets/images/productThree.png" className="image-two" />
      </div>

      <style jsx>{`
                .image-one-box {
                    width: 49%;
                    height: 450px;
                }
                .image-one {
                    object-fit: cover;
                    object-position: center;
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
                .image-two-box {
                    width: 49%;
                    height: 450px;
                }
                .image-two {
                    object-fit: cover;
                    object-position: center;
                    width: 100%;
                    max-height: 49%;
                    border-radius: 10px;
                }
                }`}</style>
    </div>
  );
};

export default PostImageTwo;
