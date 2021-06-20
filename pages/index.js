import Topbar from "../components/Navbar/Topbar/Topbar";
import Sidenav from "../components/Navbar/Sidenav/Sidenav";
import Sidecard from "../components/Cards/Sidecard/Sidecard";

export default function Home() {
  return (
    <section>
      <Topbar />
      <Sidenav />

      <Sidecard />

      <style jsx>{`
        section {
          height: 100vh;
          background-color: #fafafa;
        }
      `}</style>
    </section>
  );
}
