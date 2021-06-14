import Input from "../components/Input/Input";
import PrimaryBtn from "../components/Buttons/PrimaryButton/PrimaryButton";

// ICONS
import { FaArrowRight } from "react-icons/fa";

const signup = () => {
  return (
    <section className={`d-flex justify-content-center align-items-center`}>
      <div className="form-box">
        <h1 className="heading font-weight-normal">Sign Up</h1>
        <Input type="text" placeholder="Name" classList="mt-4" />
        <Input type="email" placeholder="Email" classList="mt-3" />
        <Input type="password" placeholder="Password" classList="mt-3" />
        {/* create account */}
        <p className="paragraph-sm text-right mt-3">
          Create Account{" "}
          <i className="ml-2 primary-text">
            <FaArrowRight />
          </i>
        </p>
        {/* button */}
        <PrimaryBtn />
      </div>

      <style jsx>{`
        section {
          height: 100vh;
          background-color: #f0f0f0;
        }

        .form-box {
          width: 98%;
          max-width: 340px;
        }
      `}</style>
    </section>
  );
};

export default signup;
