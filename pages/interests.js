import AuthLayout from "../components/Layouts/AuthLayout";
import InterestList from "../components/Cards/InterestLIst/InterestList";

//ICONS
import {
  FaShoppingBasket,
  FaTshirt,
  FaMobileAlt,
  FaCouch,
  FaLaptop,
  FaMagic,
  FaSuitcase,
  FaBaby,
} from "react-icons/fa";

const Interests = () => {
  return (
    <>
      {/* LOGO */}
      <div className="logo">Social-e-com</div>
      {/* SECTION */}
      <section className="py-5">
        <div className="container p-4">
          <h1 className="heading-lg text-capitalize text-center">
            Choose your interest
          </h1>

          <div className="row mx-auto mt-5 pt-4">
            <div className="col-12 col-md-6 px-5 border-right border-secondary">
              <InterestList
                icon={<FaShoppingBasket />}
                classList="mb-4"
                text="Grocery Items"
              />
              <InterestList
                icon={<FaTshirt />}
                classList="mb-4"
                text="Fashion Item"
              />
              <InterestList
                icon={<FaMobileAlt />}
                classList="mb-4"
                text="Mobiles"
              />
              <InterestList
                icon={<FaMagic />}
                classList="mb-4"
                text="Beauty Products"
              />
            </div>
            <div className="col-12 col-md-6 px-5">
              <InterestList
                icon={<FaCouch />}
                classList="mb-4 flex-row-reverse"
                text="Furnitures"
              />
              <InterestList
                icon={<FaSuitcase />}
                classList="mb-4 flex-row-reverse"
                text="Home Appliances"
              />
              <InterestList
                icon={<FaLaptop />}
                classList="mb-4 flex-row-reverse"
                text="Electronic Devices"
              />
              <InterestList
                icon={<FaBaby />}
                classList="mb-4 flex-row-reverse"
                text="Toys"
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        section {
          height: 100vh;
          background-color: #f0f0f0;
        }
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

Interests.Layout = AuthLayout;

export default Interests;
