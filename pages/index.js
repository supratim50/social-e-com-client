import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";

import Sidecard from "../components/Cards/Sidecard/Sidecard";
import Postcard from "../components/Cards/Postcard/Postcard";
import Sidenav from "../components/Navbar/Sidenav/Sidenav";

export default function Home() {
  const [authenticate, setAuthenticate] = useState(false);

  const getAuth = () => {
    const token = Cookies.get("token");

    if (token) {
      setAuthenticate(true);
    }
  };

  useEffect(() => {
    getAuth();
  }, []);

  return (
    <>
      {authenticate ? (
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
        </>
      ) : (
        <section className="error-section mt-0 w-100 d-flex justify-content-center align-items-center">
          <Link href="/signup">
            <a>Go to Signup page</a>
          </Link>
        </section>
      )}

      <style jsx>{`
        section {
          margin-top: 95px;
          background-color: #fafafa;
        }
        .error-section {
          height: 100vh;
        }

        .postcard_box {
          margin-left: 80px;
        }
      `}</style>
    </>
  );
}
