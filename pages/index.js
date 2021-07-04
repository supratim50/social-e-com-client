import Sidecard from "../components/Cards/Sidecard/Sidecard";
import Postcard from "../components/Cards/Postcard/Postcard";
import Sidenav from "../components/Navbar/Sidenav/Sidenav";

export default function Home() {
  return (
    <>
      <Sidenav active="home" />
      <section className="overflow-hidden container-fluid">
        <div className="postcard_box mt-4 row position-relative">
          <div className="col-8">
            <Postcard classList="mb-3" />
            <Postcard classList="mb-3" />
          </div>
          <div className="sidecard col-4 d-flex justify-content-start p-0">
            <Sidecard />
          </div>
        </div>
      </section>

      <style jsx>{`
        section {
          margin-top: 95px;
          background-color: #fafafa;
        }

        .postcard_box {
          margin-left: 80px;
        }
      `}</style>
    </>
  );
}
