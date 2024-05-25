import myfeedsimg from "../../assets/myfeeds.svg";
import discoverimg from "../../assets/discover.svg";
import techimg from "../../assets/tech.svg";
import entertainmentimg from "../../assets/entertainment.svg";
import { Link, Outlet, useLocation } from "react-router-dom";

const VideoRoute = () => {
  const location = useLocation();
  const currentRouteName = location.pathname;
  //     const { state, dispatch: ctxDispatch } = useContext(Store);
  //   const { userInfo, videoCategory} = state;
  return (
    <div className="bg-homeBg mt-7 lg:px-28 text-[#101010]">
      <div className="text-lg font-semibold">Categories</div>
      <div className="mt-5 flex flex-row flex-wrap justify-between gap-5 w-full lg:w-3/5 border-b border-[#E7E0EC]">
        <Link
          to="/videos"
          className={`h-full cursor-pointer border-b-2 w-auto ${
            currentRouteName === "/videos" ? "border-[#6750A4]" : "border-none"
          } px-4 py-3 flex flex-row items-center gap-2`}
        >
          <span>
            <img className="w-5 h-5" src={myfeedsimg} alt="my feeds img" />
          </span>
          <span className="text-sm font-medium">My feeds</span>
        </Link>
        <Link
          to="/videos/discover"
          className={`h-full cursor-pointer border-b-2 w-auto ${
            currentRouteName === "/videos/discover"
              ? "border-[#6750A4]"
              : "border-none"
          } px-4 py-3 flex flex-row items-center gap-2`}
        >
          <span>
            <img className="w-5 h-5" src={discoverimg} alt="discover img" />
          </span>
          <span className="text-sm font-medium">Discover</span>
        </Link>
        <Link
          to="/videos/tech"
          className={`h-full cursor-pointer border-b-2 w-auto ${
            currentRouteName === "/videos/tech"
              ? "border-[#6750A4]"
              : "border-none"
          } px-4 py-3 flex flex-row items-center gap-2`}
        >
          <span>
            <img className="w-5 h-5" src={techimg} alt="tech image" />
          </span>
          <span className="text-sm font-medium">Tech</span>
        </Link>
        <Link
          to="/videos/entertainment"
          className={`h-full cursor-pointer border-b-2 w-auto ${
            currentRouteName === "/videos/entertainment"
              ? "border-[#6750A4]"
              : "border-none"
          } px-4 py-3 flex flex-row items-center gap-2`}
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
  );
};

export default VideoRoute;
