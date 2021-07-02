const posts = () => {
  return (
    <>
      <div className="background"></div>
      <div className="modal-box bg-white rounded-md">
        <div className="modal">hello</div>
      </div>

      <style jsx>{`
        .background {
          height: 100vh;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          position: fixed;
          top: 0;
          left: 0;
          z-index: 99999;
        }
        .modal-box {
          height: 90vh;
          width: 100%;
          max-width: 1097px;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 99999;
        }
      `}</style>
    </>
  );
};

export default posts;
