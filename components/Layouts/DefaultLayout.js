import Topbar from "../Navbar/Topbar/Topbar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
};

export default DefaultLayout;
