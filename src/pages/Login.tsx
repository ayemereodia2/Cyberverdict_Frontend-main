import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import polygon1 from "../assets/Polygon 1.png";
import polygon2 from "../assets/Polygon 5.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Store } from "../Store";
import { MyLoader, MyLoader2 } from "../components/ButtonLoader";
import { useGoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const { dispatch: ctxDispatch } = useContext(Store);

  // useEffect(() => {
  //   // logOut()
  //   if(loading) return
  //   // if (user) navigate("/authpage/preference")
  // })

  const signinWithGoogle = async (userInfoResponse:any) => {
    setGoogleLoading(true)
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "https://cyberverdictbackend.onrender.com/api/users/signInWithGoogle",
        {
          email: userInfoResponse.data.email
        },
        config
      );
      console.log(response.data);
      ctxDispatch({ type: "USER_SIGNIN", payload: response.data });
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate("/")
      setGoogleLoading(false);
    } catch (error:any) {
      toast.error(error.response.data);
      setGoogleLoading(false);
    }
    setGoogleLoading(false)
  }

  const login = useGoogleLogin({
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
        signinWithGoogle(userInfoResponse)
      } catch (error) {
        console.error("Error fetching user info:", error);
        toast.error("Error fetching user info. Please try again.");
      }
    },
  });

  const loginSubmitHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "https://cyberverdictbackend.onrender.com/api/users/login",
        {
          email,
          password,
        },
        config
      );
      ctxDispatch({ type: "USER_SIGNIN", payload: response.data });
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      console.log(response.data);
      // setSidesignup(false)
      toast.success("Login successful");
      setLoading(false);
      setEmail("");
      setPassword("");
      setShowPassword(false);
      navigate("/");
    } catch (error: any) {
      toast.error(error.response.data);
      setLoading(false);
    }
  };

  return (
    <div className="px-4 lg:px-16 relative flex-1">
      <img className="absolute top-0 left-3" src={polygon1} alt="polygon 1" />
      <img
        className="absolute bottom-0 left-16"
        src={polygon2}
        alt="polygon 2"
      />
      <div className="">
        <p className="text-3xl text-center leading-10 font-bold tracking-wide mt-12">
          Welcome Back!
        </p>
        <p className="text-[#A09D9D] text-center text-sm leading-5 tracking-wide mt-1">
          Sign in to CyberVerdict in a snap using your social media accounts
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div
          onClick={() => login()}
          className="cursor-pointer  lg:px-10 py-2 border
           border-black rounded-3xl flex flex-row items-center justify-center gap-2.5"
        >
          {googleLoading ? (
            <MyLoader2 />
          ) : (
            <>
              <span>
                <FcGoogle className="text-[28px]" />
              </span>
              <span className="text-xs text-[#232424]">
                Sign in with Google
              </span>
            </>
          )}
        </div>
        <div
          onClick={() => toast.warning("Feature coming soon...")}
          className="cursor-pointer px-10 py-2 border border-black rounded-3xl flex flex-row items-center justify-center gap-2.5"
        >
          <span>
            <FaFacebook className="text-primaryColor text-[28px]" />
          </span>
          <span className="text-xs text-[#232424]">Sign in with Facebook</span>
        </div>
        <div
          onClick={() => toast.warning("Feature coming soon...")}
          className="cursor-pointer px-10 py-2 border border-black rounded-3xl flex flex-row items-center justify-center gap-2.5"
        >
          <span>
            <FaApple className="text-[28px]" />
          </span>
          <span className="text-xs text-[#232424]">Sign in with Apple</span>
        </div>
      </div>
      <div className="mt-4 text-[#A09D9D] text-xs">Or sign in with email</div>
      <div className="mt-4 flex flex-col gap-3">
        <div className="relative">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="text"
            className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
              isFocused ? "border-primaryColor" : "border-[#79747E]"
            } bg-transparent outline-none focus:border-primaryColor transition duration-300`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
              isFocusedPassword ? "border-primaryColor" : "border-[#79747E]"
            } bg-transparent outline-none focus:border-primaryColor transition duration-300`}
            onFocus={() => setIsFocusedPassword(true)}
            onBlur={() => setIsFocusedPassword(false)}
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
      <div className="mt-5 flex flex-row gap-3 items-center w-full justify-between">
        <div className="flex flex-row gap-2 items-center">
          <input type="checkbox" />
          <p className="text-xs text-[#212121]">Remember me</p>
        </div>
        <Link
          to="/authpage/forgotpassword"
          className="text-primaryColor text-xs font-semibold"
        >
          Forgot Password?
        </Link>
      </div>
      <div
        onClick={loginSubmitHandler}
        className="cursor-pointer mt-5 px-10 py-3 text-center rounded-3xl bg-primaryColor text-white font-semibold text-xs"
      >
        {loading ? <MyLoader /> : "Sign in"}
      </div>
      <div className="text-xs mt-5">
        New to CyberVerdict?{" "}
        <Link to="/authpage/signup">
          <span className="text-primaryColor">Create account</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
