const Input = ({ type, placeholder, classList, changeFunc }) => {
  return (
    <>
      <div className="w-100">
        <input
          onChange={changeFunc}
          className={`w-100 py-3 px-3 border-0 rounded-sm shadow-sm ${
            classList && classList
          }`}
          placeholder={placeholder}
          type={type && type}
        />

        <style jsx>{`
          input:focus {
            outline: none;
          }
        `}</style>
      </div>
    </>
  );
};

export default Input;
