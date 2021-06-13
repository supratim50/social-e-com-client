const Input = ({ placeholder, classList }) => {
  return (
    <>
      <div className="w-100 shadow-sm rounded-sm">
        <input
          className={`w-100 py-3 px-3 border-0 ${classList && classList}`}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
