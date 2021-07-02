const InterestList = ({ icon, text, classList, active }) => {
  return (
    <div
      className={`shadow-sm rounded-md bg-white py-2 px-4 d-flex justify-content-between align-items-center ${
        classList ? classList : ""
      }`}
    >
      <i className="icon primary-text">{icon && icon}</i>
      <div>
        <p className="heading-md mb-0 text">{text && text}</p>
      </div>

      <style jsx>{`
        .icon {
          font-size: 45px;
        }
        .text {
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default InterestList;
