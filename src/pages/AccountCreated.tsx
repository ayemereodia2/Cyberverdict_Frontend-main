import img from "../assets/accountCreatedGif.gif";
import { Link } from "react-router-dom";

const AccountCreated = () => {
  return (
    <div className="px-4 lg:px-16">
      <div className="mt-12 flex justify-center">
        <img src={img} alt="account created gif" />
      </div>
      <div className="text-center">
        <p className="text-3xl leading-10 font-bold tracking-wide mt-5">
          Account created successfully!
        </p>
      </div>
      <Link to="/">
        <div className="cursor-pointer mt-6 px-10 py-3 rounded-3xl bg-primaryColor text-white font-semibold text-xs">
          Go to home
        </div>
      </Link>
    </div>
  );
};

export default AccountCreated;
