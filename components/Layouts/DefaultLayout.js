import Topbar from "../Navbar/Topbar/Topbar";
import Sidenav from "../Navbar/Sidenav/Sidenav";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Sidenav />
      {children}
    </>
  );
};

export default DefaultLayout;
