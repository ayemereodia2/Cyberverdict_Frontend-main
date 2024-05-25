import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("");

  const forgotPasswordSubmitHandler = async () => {
    try {
      // const config = {
      //   headers: {
      //     "Content-type": "application/json",
      //   },
      // };
      const { data } = await axios.post(
        "https://cyberverdictbackend.onrender.com/api/users/reset-password",
        {
          email,
        }
        // config
      );
      toast.success(`${data.message}`);
    } catch (error: any) {
      console.log(error)
      toast.error(error.response.data);
    }
  };
  return (
    <div className="px-4 lg:px-16 relative flex-1">
      <div className="">
        <p className="text-3xl text-center leading-10 font-bold tracking-wide mt-12">
          Forgot Password?
        </p>
        <p className="text-[#A09D9D] text-center text-sm leading-5 tracking-wide mt-1">
          We'll send you instructions to reset your password
        </p>
      </div>
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
              isFocused
                ? "text-blue-600 scale-75 top-2 -translate-y-4"
                : "text-gray-500 scale-100 top-1/2 -translate-y-1/2"
            } left-2 bg-white px-1`}
          >
            Email
          </label>
        </div>
        <div
          onClick={forgotPasswordSubmitHandler}
          className="cursor-pointer mt-3 px-10 py-3 rounded-3xl bg-primaryColor text-white font-semibold text-xs"
        >
          Continue
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
