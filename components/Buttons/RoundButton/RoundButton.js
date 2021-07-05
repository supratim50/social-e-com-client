const RoundButton = ({ icon, classList, onClick }) => {
  return (
    <>
      <div
        className={`button shadow-sm rounded-circle bg-white d-flex justify-content-center align-items-center ${
          classList ? classList : ""
        }`}
        onClick={onClick}
      >
        {icon && icon}
      </div>

      <style jsx>{`
        .button {
          width: 62px;
          height: 62px;
          font-size: 28px;
          cursor: pointer;
          color: var(--primary-color);
        }
      `}</style>
    </>
  );
};

export default RoundButton;
