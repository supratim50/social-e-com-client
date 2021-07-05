import { useState, useEffect } from "react";
import router, { useRouter } from "next/router";

// COMPONENTS
import AuthLayout from "../components/Layouts/AuthLayout";
import InterestList from "../components/Cards/InterestLIst/InterestList";
import RoundButton from "../components/Buttons/RoundButton/RoundButton";

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
  FaAngleRight,
} from "react-icons/fa";

const Interests = () => {
  const [interests, setInterests] = useState([]);

  const route = useRouter();

  // ----------- HANDLE INTEREST -------------
  const handleInterest = (item) => {
    const exist = interests.find((element) => element === item);

    // INSERT INTO ARRAY
    if (!exist) {
      return setInterests([...interests, item]);
    }

    //  DELETE FROM THE ARRAY
    const newInterests = interests.filter((element) => element !== item);
    setInterests(newInterests);
  };

  // ----------- GOTO NEXT PAGE ------------
  const nextPage = () => {
    if (interests.length) {
      router.push("/");
      setInterests([]);
    }
  };

  useEffect(() => {
    console.log(interests);
  }, [interests]);

  return (
    <>
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
                active
                onClick={() => handleInterest("grocery")}
              />
              <InterestList
                icon={<FaTshirt />}
                classList="mb-4"
                text="Fashion Item"
                onClick={() => handleInterest("fashion")}
              />
              <InterestList
                icon={<FaMobileAlt />}
                classList="mb-4"
                text="Mobiles"
                onClick={() => handleInterest("mobiles")}
              />
              <InterestList
                icon={<FaMagic />}
                classList="mb-4"
                text="Beauty Products"
                onClick={() => handleInterest("beauty")}
              />
            </div>
            <div className="col-12 col-md-6 px-5">
              <InterestList
                icon={<FaCouch />}
                classList="mb-4 flex-row-reverse"
                text="Furnitures"
                onClick={() => handleInterest("furniture")}
              />
              <InterestList
                icon={<FaSuitcase />}
                classList="mb-4 flex-row-reverse"
                text="Home Appliances"
                onClick={() => handleInterest("homeappliance")}
              />
              <InterestList
                icon={<FaLaptop />}
                classList="mb-4 flex-row-reverse"
                text="Electronic Devices"
                onClick={() => handleInterest("electronics")}
              />
              <InterestList
                icon={<FaBaby />}
                classList="mb-4 flex-row-reverse"
                text="Toys"
                onClick={() => handleInterest("toys")}
              />
            </div>
          </div>
        </div>
        {/* NEXT BUTTON */}
        <div className="d-flex align-items-center justify-content-center my-4">
          <RoundButton
            icon={<FaAngleRight />}
            classList="fixed-bottom-corner"
            onClick={nextPage}
          />
        </div>
      </section>

      <style jsx>{`
        section {
          height: 100vh;
          background-color: #f0f0f0;
        }
      `}</style>
    </>
  );
};

Interests.Layout = AuthLayout;

export default Interests;
