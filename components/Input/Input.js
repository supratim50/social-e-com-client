const Input = ({ placeholder, classList }) => {
  return (
    <>
      <input
        className={`input py-3 px-3 border-0 shadow-sm ${classList && classList}`}
        placeholder={placeholder}
      />

      <style jsx>{`
        .input {
          width: 98%;
          max-width: 339px;
        }
      `}</style>
    </>
  );
};

export default Input;
