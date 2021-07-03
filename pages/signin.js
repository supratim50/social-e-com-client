import Link from "next/link";

//COMPONENTS
import Input from "../components/Input/Input";
import PrimaryBtn from "../components/Buttons/PrimaryButton/PrimaryButton";

//LAYOUTS
import AuthLayout from "../components/Layouts/AuthLayout";

// ICONS
import { FaArrowRight } from "react-icons/fa";

const signin = () => {
  return (
    <section className={`d-flex justify-content-center align-items-center`}>
      <div className="form-box">
        <h1 className="heading font-weight-normal">Sign In</h1>
        <Input type="email" placeholder="Email" classList="mt-3" />
        <Input type="password" placeholder="Password" classList="mt-3" />
        {/* create account */}
        <Link href="/signup">
          <a className="text-decoration-none">
            <p className="paragraph-sm text-right paragraph-text mt-3">
              Create an account{" "}
              <i className="ml-2 primary-text">
                <FaArrowRight />
              </i>
            </p>
          </a>
        </Link>
        {/* button */}
        <PrimaryBtn text="Sign In" />
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

// SET LAYOUTS
signin.Layout = AuthLayout;

export default signin;
