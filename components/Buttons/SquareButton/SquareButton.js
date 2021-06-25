import { FaPlus } from "react-icons/fa";

const SquareButton = () => {
  return (
    <div className="icon-box d-flex justify-content-center align-items-center rounded-md text-white">
      <FaPlus />

      <style jsx>{`
        .icon-box {
          width: 50px;
          height: 50px;
          background-image: linear-gradient(
            138.14deg,
            #413eeb 11.47%,
            rgba(221, 122, 217, 0.87) 84.69%
          );

          font-size: 25px;
        }
      `}</style>
    </div>
  );
};

export default SquareButton;
