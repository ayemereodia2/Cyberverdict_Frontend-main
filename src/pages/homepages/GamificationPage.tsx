import { Link, Outlet, useLocation } from "react-router-dom";
import reportImg from "../../assets/gamificationAssets/task-square.svg";
import instructionImg from "../../assets/gamificationAssets/info-circle.svg";
import achievementImg from "../../assets/gamificationAssets/medal.svg";

const GamificationPage = () => {
  const location = useLocation();
  const currentRouteName = location.pathname;
  return (
    <div className="bg-homeBg mt-7 lg:px-28 pb-12 text-[#101010]">
      <div className="flex flex-row flex-wrap justify-between gap-2 lg:gap-5 w-full lg:w-2/4 border-b border-[#E7E0EC]">
        <Link
          to="/gamification"
          className={`h-full cursor-pointer border-b-2 w-auto ${
            currentRouteName === "/gamification"
              ? "border-[#6750A4]"
              : "border-none"
          } px-2 lg:px-4 py-3 flex flex-row items-center gap-2`}
        >
          <span>
            <img className="w-5 h-5" src={reportImg} alt="report img" />
          </span>
          <span className="text-sm font-medium">Report</span>
        </Link>
        <Link
          to="/gamification/instruction"
          className={`h-full cursor-pointer border-b-2 w-auto ${
            currentRouteName === "/gamification/instruction"
              ? "border-[#6750A4]"
              : "border-none"
          } px-2 lg:px-4 py-3 flex flex-row items-center gap-2`}
        >
          <span>
            <img
              className="w-5 h-5"
              src={instructionImg}
              alt="instruction img"
            />
          </span>
          <span className="text-sm font-medium">Instructions</span>
        </Link>
        <Link
          to="/gamification/achievement"
          className={`h-full cursor-pointer border-b-2 w-auto ${
            currentRouteName === "/gamification/achievement" || currentRouteName === "/gamification/achievement/badge" || currentRouteName === "/gamification/achievement/rank"
              ? "border-[#6750A4]"
              : "border-none"
          } px-2 lg:px-4 py-3 flex flex-row items-center gap-2`}
        >
          <span>
            <img
              className="w-5 h-5"
              src={achievementImg}
              alt="instruction img"
            />
          </span>
          <span className="text-sm font-medium">Achievements</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default GamificationPage;
