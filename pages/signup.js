import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Cookie from "js-cookie";

// COMPONENTS
import Input from "../components/Input/Input";
import PrimaryBtn from "../components/Buttons/PrimaryButton/PrimaryButton";

// CONTEXTS
import { ProfileContext } from "../contexts/ProfileContext/profile-context";

//LAYOUTS
import AuthLayout from "../components/Layouts/AuthLayout";

// ICONS
import { FaArrowRight } from "react-icons/fa";

const Signup = () => {
  // profile context
  const [state, dispatch] = useContext(ProfileContext);

  // STATE
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  // ROUTER
  const router = useRouter();

  // HANDLE THE CHANGE NAME FUNCTION
  const handleName = (e) => {
    setName(e.target.value);
  };
  // HANDLE THE CHANGE PASSWORD FUNCTION
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // HANDLE THE CHANGE EMAIL FUNCTION
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  // CONNECT BACKEND FOR REGISTER
  const registrationFunc = async () => {
    const EndPoint = "http://localhost:4000";

    try {
      const { data } = await axios.post(`${EndPoint}/user`, {
        name,
        password,
        email,
      });

      dispatch({
        type: "SET-INFORMATION",
        name: data.user.name,
        email: data.user.email,
        token: data.token,
      });

      Cookie.set("token", data.token);
      //REDIRECT PAGE
      router.push("/uploadProfileImage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={`d-flex justify-content-center align-items-center`}>
      <div className="form-box">
        <h1 className="heading font-weight-normal">Sign Up</h1>
        <Input
          type="text"
          placeholder="Name"
          classList="mt-4"
          changeFunc={handleName}
        />
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
        <Link href="/signin">
          <a className="text-decoration-none">
            <p className="paragraph-sm paragraph-text text-right mt-3">
              I have an account{" "}
              <i className="ml-2 primary-text">
                <FaArrowRight />
              </i>
            </p>
          </a>
        </Link>
        {/* button */}
        <PrimaryBtn text="Sign up" onClickFunction={registrationFunc} />
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
Signup.Layout = AuthLayout;

export default Signup;
