import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import router from "next/router";
import axios from "axios";
import Cookie from "js-cookie";

//COMPONENTS
import Input from "../components/Input/Input";
import PrimaryBtn from "../components/Buttons/PrimaryButton/PrimaryButton";

//LAYOUTS
import AuthLayout from "../components/Layouts/AuthLayout";

// ICONS
import { FaArrowRight } from "react-icons/fa";

// CONTEXTS
import { ProfileContext } from "../contexts/ProfileContext/profile-context";

const signin = () => {
  // PROFILE CONTEXT
  const [state, dispatch] = useContext(ProfileContext);

  // STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // HANDLE THE CHANGE PASSWORD FUNCTION
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // HANDLE THE CHANGE EMAIL FUNCTION
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // FUNCTION FOR LOGIN
  const loginFunc = async () => {
    const EndPoint = "http://localhost:4000";

    try {
      const { data } = await axios.post(`${EndPoint}/user/login`, {
        password,
        email,
      });

      console.log(data);

      dispatch({
        type: "SET-PROFILE",
        name: data.user.name,
        email: data.user.email,
        token: data.token,
        userImage: data.user.userImage,
      });

      Cookie.set("token", data.token);
      //REDIRECT PAGE
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={`d-flex justify-content-center align-items-center`}>
      <div className="form-box">
        <h1 className="heading font-weight-normal">Sign In</h1>
        <Input
          type="email"
          placeholder="Email"
          classList="mt-3"
          changeFunc={handleEmail}
        />
        <Input
          type="password"
          placeholder="Password"
          classList="mt-3"
          changeFunc={handlePassword}
        />
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
        <PrimaryBtn text="Sign In" onClickFunction={loginFunc} />
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
