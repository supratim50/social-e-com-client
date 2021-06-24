const InputPrimary = ({ placeholder, classList }) => {
  return (
    <div className="input-box py-3 px-4 bg-light_grey">
      <input
        className="w-100 input border-0 paragraph-text"
        placeholder={placeholder && placeholder}
      />

      <style jsx>{`
        .input-box {
          border-radius: 10px;
        }
        .input {
          background-color: transparent;
        }
        .input:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default InputPrimary;
