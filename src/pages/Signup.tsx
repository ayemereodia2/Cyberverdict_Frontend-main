import { useContext, useEffect, useState } from "react";
// import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import polygon1 from "../assets/Polygon 1.png";
import polygon2 from "../assets/Polygon 5.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "firebase/auth";
import { Store } from "../Store";
// import {auth, provider} from '../components/FirebaseConfig'
import { MyLoader, MyLoader2 } from "../components/ButtonLoader";
// import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";

// const appId = "929383144996932";

const Signup = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsCon, setTermsCon] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  // const [facebookLoading, setFacebookLoading] = useState(false);
  const navigate = useNavigate();

  const { dispatch: ctxDispatch } = useContext(Store);

  const signupWithGoogle = async (userInfoResponse: any) => {
    setGoogleLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "https://cyberverdictbackend.onrender.com/api/users/signUpWithGoogle",
        {
          name: userInfoResponse.data.name,
          email: userInfoResponse.data.email,
        },
        config
      );
      console.log(response.data);
      ctxDispatch({ type: "USER_SIGNIN", payload: response.data });
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate("/authpage/preference");
      setGoogleLoading(false);
    } catch (error: any) {
      toast.error(error.response.data);
      setGoogleLoading(false);
    }
    setGoogleLoading(false);
  };

  const signup = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfoResponse = await axios.get(
          "https://www.googleapis.com/oauth2/v1/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        signupWithGoogle(userInfoResponse);
      } catch (error) {
        console.error("Error fetching user info:", error);
        toast.error("Error fetching user info. Please try again.");
      }
    },
  });

  const signupSubmitHandler = async () => {
    setLoading(true);
    try {
      if (!termsCon) {
        setLoading(false);
        return toast.error(
          "you need to agree to the terms and conditions before you can continue"
        );
      }
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "https://cyberverdictbackend.onrender.com/api/users/signup",
        {
          name,
          email,
          password,
        },
        config
      );
      ctxDispatch({ type: "USER_SIGNIN", payload: response.data });
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      console.log(response.data);
      // setSidesignup(false)
      toast.success(
        "Please visit your email address to activate your account and continue your registration process"
      );
      setLoading(false);
      setName("");
      setEmail("");
      setPassword("");
      setShowPassword(false);
    } catch (error: any) {
      toast.error(error.response.data);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    if(name) {
      setIsFocusedName(true)
    }
  }, [name]);

  return (
    <div className="px-4 lg:px-16 relative flex-1">
      <img className="absolute top-0 left-3" src={polygon1} alt="polygon 1" />
      <img
        className="absolute bottom-0 left-16"
        src={polygon2}
        alt="polygon 2"
      />
      <div className="">
        <p className="text-3xl text-center leading-10 font-semibold tracking-wide mt-12">
          Sign Up
        </p>
        <p className="text-[#A09D9D] text-center text-sm leading-5 tracking-wide mt-1">
          Create a Cyberverdict account in a snap using your social media
          accounts
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div
          onClick={() => signup()}
          className="cursor-pointer px-10 py-2 border border-black rounded-3xl flex flex-row items-center justify-center gap-2.5"
        >
          {googleLoading ? (
            <MyLoader2 />
          ) : (
            <>
              <span>
                <FcGoogle className="text-[28px]" />
              </span>
              <span className="text-xs text-[#232424]">
                Sign up with Google
              </span>
            </>
          )}
        </div>
        <div className="cursor-pointer px-10 py-2 border border-black rounded-3xl flex flex-row items-center justify-center gap-2.5">
          <span>
            <FaFacebook className="text-primaryColor text-[28px]" />
          </span>
          <span className="text-xs text-[#232424]">Sign up with Facebook</span>
        </div>
        <div
          onClick={() => toast.warning("Feature coming soon...")}
          className="cursor-pointer px-10 py-2 border border-black rounded-3xl flex flex-row items-center justify-center gap-2.5"
        >
          <span>
            <FaApple className="text-[28px]" />
          </span>
          <span className="text-xs text-[#232424]">Sign up with Apple</span>
        </div>
      </div>
      <div className="mt-4 text-[#A09D9D] text-xs">Or sign in with email</div>
      <div className="mt-4 flex flex-col gap-3">
        <div className="relative">
          <input
            type="text"
            className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
              isFocusedName ? "border-primaryColor" : "border-[#79747E]"
            } bg-transparent outline-none focus:border-primaryColor transition duration-300`}
            onFocus={() =>{
              setIsFocusedName(true);
            }}
            onBlur={() => setIsFocusedName(false)}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
          />
          <label
            className={`absolute text-sm duration-300 transform ${
              isFocusedName || name
                ? "text-blue-600 scale-75 top-2 -translate-y-4"
                : "text-gray-500 scale-100 top-1/2 -translate-y-1/2"
            } left-2 bg-white px-1`}
          >
            Name
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
              isFocused ? "border-primaryColor" : "border-[#79747E]"
            } bg-transparent outline-none focus:border-primaryColor transition duration-300`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
          />
          <label
            className={`absolute text-sm duration-300 transform ${
              isFocused || email
                ? "text-blue-600 scale-75 top-2 -translate-y-4"
                : "text-gray-500 scale-100 top-1/2 -translate-y-1/2"
            } left-2 bg-white px-1`}
          >
            Email
          </label>
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
              isFocusedPassword ? "border-primaryColor" : "border-[#79747E]"
            } bg-transparent outline-none focus:border-primaryColor transition duration-300`}
            onFocus={() => setIsFocusedPassword(true)}
            onBlur={() => setIsFocusedPassword(false)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
          />
          <span className="absolute cursor-pointer right-3 top-2.5">
            <AiOutlineEyeInvisible
              onClick={() => {
                setShowPassword(!showPassword);
                setIsFocusedPassword(true);
              }}
              className={`w-5 h-5 ${!showPassword ? "block" : "hidden"}`}
            />
            <AiOutlineEye
              onClick={() => {
                setShowPassword(!showPassword);
                setIsFocusedPassword(true);
              }}
              className={`w-5 h-5 ${showPassword ? "block" : "hidden"}`}
            />
          </span>
          <label
            className={`absolute text-sm duration-300 transform ${
              isFocusedPassword || password
                ? "text-blue-600 scale-75 top-2 -translate-y-4"
                : "text-gray-500 scale-100 top-1/2 -translate-y-1/2"
            } left-2 bg-white px-1`}
          >
            password
          </label>
        </div>
      </div>
      {/* <p className="text-[#A09D9D] text-xs tracking-wide float-left mt-1">
        Password must be 8 or more characters
      </p>{" "} */}
      <div className="mt-5 flex flex-row gap-3 items-center">
        <input
          onClick={() => setTermsCon(!termsCon)}
          name="termsCon"
          type="checkbox"
          checked={termsCon}
        />
        <p className="text-xs text-[#212121]">
          I agree to{" "}
          <span className="text-primaryColor">Terms & Conditions</span> and{" "}
          <span className="text-primaryColor">Privacy Policy</span>
        </p>
      </div>
      <div onClick={signupSubmitHandler}>
        <div className="cursor-pointer mt-5 px-10 text-center py-3 rounded-3xl bg-primaryColor text-white font-semibold text-xs">
          {loading ? <MyLoader /> : "Continue"}
        </div>
      </div>
      <div className="text-xs mt-5">
        Already have an Account?
        <Link to="/authpage/login">
          <span className="text-primaryColor"> Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
