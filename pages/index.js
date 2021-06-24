import Topbar from "../components/Navbar/Topbar/Topbar";
import Sidenav from "../components/Navbar/Sidenav/Sidenav";
import Sidecard from "../components/Cards/Sidecard/Sidecard";
import Postcard from "../components/Cards/Postcard/Postcard";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <Topbar />
      <Sidenav />
      <div className="postcard_box mt-4 row">
        <div className="col-8">
          <Postcard classList="mb-3" />
          <Postcard classList="mb-3" />
        </div>
        <div className="sidecard col-4 d-flex justify-content-start p-0">
          <Sidecard />
        </div>
      </div>

      <style jsx>{`
        section {
          /* height: 100vh; */
          margin-top: 95px;
          background-color: #fafafa;
        }

        .postcard_box {
          margin-left: 80px;
        }
      `}</style>
    </section>
  );
}
