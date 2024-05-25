import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [hash, setHash] = useState<any>(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const singlevalue = queryParams.get("hash");
    if (!singlevalue) return;
    setHash(singlevalue);
  }, [location.search]);

  const resetPasswordSubmitHandler = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://cyberverdictbackend.onrender.com/api/users/reset-password-confirm",
        {
          hash,
          password,
        },
        config
      );
      toast.success(`${data.message}`);
      navigate("/authpage/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data);
    }
  };
  return (
    <div className="px-4 lg:px-16 relative flex-1">
      <div className="">
        <p className="text-3xl text-center leading-10 font-bold tracking-wide mt-12">
          Create new password
        </p>
        <p className="text-[#A09D9D] text-center text-sm leading-5 tracking-wide mt-1">
          Please enter your new password here
        </p>
      </div>
      <div className="mt-4 flex flex-col gap-3">
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
          <span className="absolute right-3 top-2.5">
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
              isFocusedPassword
                ? "text-blue-600 scale-75 top-2 -translate-y-4"
                : "text-gray-500 scale-100 top-1/2 -translate-y-1/2"
            } left-2 bg-white px-1`}
          >
            password
          </label>
        </div>
        <div
          onClick={resetPasswordSubmitHandler}
          className="cursor-pointer mt-3 px-10 py-3 rounded-3xl bg-primaryColor text-white font-semibold text-xs"
        >
          Continue
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
