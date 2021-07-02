import Postcard from "../../Cards/Postcard/Postcard";

const posts = ({ show, showFunction }) => {
  return (
    <>
      <div
        className={`background ${show ? "show" : ""}`}
        onClick={showFunction}
      ></div>
      <div className={`modal-box bg-white rounded-md ${show ? "show" : ""}`}>
        <Postcard />
      </div>

      <style jsx>{`
        .background {
          height: 100vh;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.6);

          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 99999;

          opacity: 0;
          visibility: hidden;
          transition: 0.5s;
        }
        .modal-box {
          height: 90vh;
          width: 100%;
          max-width: 1097px;
          overflow-y: scroll;

          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-90%, -50%);
          z-index: 99999;

          opacity: 0;
          visibility: hidden;
          transition: 0.5s;
        }

        .show {
          opacity: 1;
          visibility: visible;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
};

export default posts;
