const IconButton = ({ icon, classList }) => {
  return (
    <div
      className={`bg-light_grey icon rounded-circle d-flex justify-content-center align-items-center ${
        classList && classList
      }`}
    >
      {icon && icon}

      <style jsx>{`
        .icon {
          width: 65px;
          height: 65px;
          font-size: 30px;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default IconButton;
