const AuthLayout = ({ children }) => {
  return (
    <>
      {/* LOGO */}
      <div className="logo">Social-e-com</div>
      {children}

      <style jsx>{`
        .logo {
          background-image: linear-gradient(
            to right,
            var(--primary-color) 8%,
            var(--secondary-color)
          );
          font-size: 36px;
          font-family: "Pattaya", sans-serif;
          -webkit-background-clip: text;
          color: transparent;

          position: fixed;
          top: 20px;
          left: 20px;
        }
      `}</style>
    </>
  );
};

export default AuthLayout;
