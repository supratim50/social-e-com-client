const PrimaryButton = () => {
  return (
    <>
      <div className="button w-100 d-flex justify-content-center align-items-center py-3 px-5 paragraph-sm text-white mx-auto">
        Sign In
      </div>

      <style jsx>{`
        .button {
          border-radius: 10px;
          background-image: linear-gradient(
            to right,
            var(--primary-color) 8%,
            var(--secondary-color)
          );
          max-width: 233px;
        }
      `}</style>
    </>
  );
};

export default PrimaryButton;
