import { useContext, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Store } from "../../Store";
import myfeedsimg from "../../assets/myfeeds.svg";
import discoverimg from "../../assets/discover.svg";
import techimg from "../../assets/tech.svg";
import entertainmentimg from "../../assets/entertainment.svg";
import { useNavigate } from "react-router-dom";

const HomeRoute = () => {
  const location = useLocation();
  const currentRouteName = location.pathname;
  const { state } = useContext(Store);
  const navigate = useNavigate();
  const { userInfo } = state;

  useEffect(() => {
    if (!userInfo) {
      navigate("/discover");
    }
  });

  return (
    <>
      <div className="bg-homeBg mt-7 lg:px-28 text-[#101010]">
        {userInfo ? (
          <div className="text-lg font-semibold">Categories</div>
        ) : (
          <div className="w-full bg-[#E5E5FF] flex items-center gap-x-2 lg:gap-x-0 justify-between py-1.5 px-2 lg:px-8 rounded">
            <div className="text-primaryColor text-xs lg:text-sm font-bold tracking-wide">
              To experience the full features of cyberverdict kindly Login!
            </div>
            <Link to="/authpage/login">
              <div className="text-white cursor-pointer text-xs lg:text-sm font-medium py-2.5 px-6 rounded-3xl bg-primaryColor">
                Login
              </div>
            </Link>
          </div>
        )}
        <div className="lg:hidden mt-4 w-full">
          <input
            type="text"
            placeholder="search"
            className="mt-1 block w-full px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primaryColor focus:ring-1 focus:ring-primaryColor
      "
          />
        </div>
        <div className="mt-5 flex flex-row flex-wrap justify-between gap-5 w-full lg:w-3/5 border-b border-[#E7E0EC] ">
          <Link
            to="/"
            className={`h-full cursor-pointer border-b-2 w-auto ${
              currentRouteName === "/" ? "border-[#6750A4]" : "border-none"
            } ${
              userInfo ? "flex" : "hidden"
            } px-2 lg:px-4 py-3 flex-row items-center gap-2`}
          >
            <span>
              <img className="w-5 h-5" src={myfeedsimg} alt="my feeds img" />
            </span>
            <span className="text-sm font-medium">My feeds</span>
          </Link>
          <Link
            to="/discover"
            className={`h-full cursor-pointer border-b-2 w-auto ${
              currentRouteName === "/discover"
                ? "border-[#6750A4]"
                : "border-none"
            } px-2 lg:px-4 py-3 flex flex-row items-center gap-2`}
          >
            <span>
              <img className="w-5 h-5" src={discoverimg} alt="discover img" />
            </span>
            <span className="text-sm font-medium">Discover</span>
          </Link>
          <Link
            to="/tech"
            className={`h-full cursor-pointer border-b-2 w-auto ${
              currentRouteName === "/tech" ? "border-[#6750A4]" : "border-none"
            } ${
              userInfo ? "flex" : "hidden"
            } px-2 lg:px-4 py-3 flex flex-row items-center gap-2`}
          >
            <span>
              <img className="w-5 h-5" src={techimg} alt="tech image" />
            </span>
            <span className="text-sm font-medium">Tech</span>
          </Link>
          <Link
            to="/entertainment"
            className={`h-full cursor-pointer border-b-2 w-auto ${
              currentRouteName === "/entertainment"
                ? "border-[#6750A4]"
                : "border-none"
            } ${
              userInfo ? "flex" : "hidden"
            } px-2 lg:px-4 py-3 flex flex-row items-center gap-2`}
          >
            <span>
              <img
                className="w-5 h-5"
                src={entertainmentimg}
                alt="entertainment image"
              />
            </span>
            <span className="text-sm font-medium">Entertainment</span>
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default HomeRoute;
