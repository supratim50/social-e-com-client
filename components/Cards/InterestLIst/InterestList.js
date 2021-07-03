const InterestList = ({ icon, text, classList, active }) => {
  return (
    <div
      className={`list-view shadow-sm rounded-md bg-white py-2 px-4 d-flex justify-content-between align-items-center ${
        classList ? classList : ""
      } ${active ? "active" : ""}`}
    >
      <i className="icon primary-text d-flex align-items-center py-2">
        {icon && icon}
      </i>
      <div>
        <p className="heading-md mb-0 text">{text && text}</p>
      </div>

      <style jsx>{`
        .list-view {
          cursor: pointer;
        }
        .icon {
          font-size: 45px;
        }
        .text {
          font-weight: 500;
        }

        .active {
          background-image: linear-gradient(
            to right,
            var(--primary-color) 8%,
            var(--secondary-color)
          ) !important;
          color: #fff !important;
        }
        .active .icon {
          color: #fff !important;
        }
      `}</style>
    </div>
  );
};

export default InterestList;
