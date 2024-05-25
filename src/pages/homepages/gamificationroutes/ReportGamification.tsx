import { useContext } from "react";
import avatarImg from "../../../assets/gamificationAssets/Mask group (1).svg";
import { Store } from "../../../Store";
import rankImg from "../../../assets/gamificationAssets/award.svg";
import pointsImg from "../../../assets/gamificationAssets/ranking.svg";
import badgeImg from "../../../assets/gamificationAssets/medal-star.svg";
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import avatarFirstImg from "../../../assets/gamificationAssets/avatarFirst.svg";
import avatarSecondImg from "../../../assets/gamificationAssets/avatarSecond.svg";
import avatarThirdImg from "../../../assets/gamificationAssets/avatarThird.svg";

const localizer = momentLocalizer(moment);
const events = [
  {
    title: "Meeting",
    start: new Date(),
    end: new Date(),
  },
  {
    title: "Read new post",
    start: new Date(),
    end: new Date(),
  },
  {
    title: "Read new post",
    start: new Date(),
    end: new Date(),
  },
  {
    title: "Read new post",
    start: new Date(),
    end: new Date(),
  },
  {
    title: "Read new post",
    start: new Date(),
    end: new Date(),
  },
  {
    title: "Made one comment",
    start: new Date(),
    end: new Date(),
  },
];

const dummyLeaderboardData = [
  {
    name: "Tobi Oluwa",
    username: "tobioluwa1",
    points: 1000,
    avatar: avatarFirstImg,
  },
  {
    name: "Tobi Oluwa",
    username: "tobioluwa2",
    points: 800,
    avatar: avatarSecondImg,
  },
  {
    name: "Tobi Oluwa",
    username: "tobioluwa3",
    points: 600,
    avatar: avatarThirdImg,
  },
  {
    name: "Tobi Oluwa",
    username: "tobioluwa2",
    points: 300,
    avatar: avatarImg,
  },
  {
    name: "Tobi Oluwa",
    username: "tobioluwa2",
    points: 100,
    avatar: avatarImg,
  },
  {
    name: "Tobi Oluwa",
    username: "tobioluwa2",
    points: 0,
    avatar: avatarImg,
  },
  {
    name: "Tobi Oluwa",
    username: "tobioluwa2",
    points: 0,
    avatar: avatarImg,
  },
  {
    name: "Tobi Oluwa",
    username: "tobioluwa2",
    points: 0,
    avatar: avatarImg,
  },
  {
    name: "Tobi Oluwa",
    username: "tobioluwa2",
    points: 0,
    avatar: avatarImg,
  },
  {
    name: "Tobi Oluwa",
    username: "tobioluwa2",
    points: 0,
    avatar: avatarImg,
  },
  {
    name: "Tobi Oluwa",
    username: "tobioluwa2",
    points: 0,
    avatar: avatarImg,
  },
  {
    name: "Tobi Oluwa",
    username: "tobioluwa2",
    points: 0,
    avatar: avatarImg,
  },
  {
    name: "Tobi Oluwa",
    username: "tobioluwa2",
    points: 0,
    avatar: avatarImg,
  },
];

function FacebookCircularProgress(props: CircularProgressProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        disableShrink
        sx={{
          color: "#1935CA",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        value={25}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

const ReportGamification = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return (
    <div className="w-full mt-6">
      <div className="flex flex-row flex-wrap justify-between gap-4">
        <div className="flex flex-col basis-[45%] lg:basis-auto items-center justify-center gap-y-2 bg-white px-12 py-5">
          <div className="avaterGradient w-10 h-10 p-1 rounded-full">
            <img src={avatarImg} className="w-full h-full" alt="user avater" />
          </div>
          <p className="text-sm font-bold text-center">
            {" "}
            {userInfo ? userInfo.name : ""}{" "}
          </p>
        </div>
        <div className="flex flex-col basis-[45%] lg:basis-auto items-center justify-center bg-white px-5">
          <div className="flex flex-row justify-between gap-x-8">
            <div>
              <div className="relative w-12 h-12">
                <img className="w-full h-full" src={rankImg} alt="rank image" />
                <p className="text-[7px] logoFont absolute mt-[3px] font-semibold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                  2
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <p>2</p>
              <p className="text-xs text-[#A09D9D]">Rank</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-[45%] lg:basis-auto items-center justify-center bg-white px-5 py-8 lg:py-0">
          <div className="flex flex-row justify-between gap-x-8">
            <div>
              <div className="relative w-12 h-12">
                <img
                  className="w-full h-full"
                  src={pointsImg}
                  alt="points image"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <p>2000</p>
              <p className="text-xs text-[#A09D9D]">Points</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-[45%] lg:basis-auto items-center justify-center bg-white px-5">
          <div className="flex flex-row justify-between gap-x-8">
            <div>
              <div className="relative w-12 h-12">
                <img
                  className="w-full h-full"
                  src={badgeImg}
                  alt="badge image"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-between">
              <p>2</p>
              <p className="text-xs text-[#A09D9D]">Badge</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-[100%] lg:basis-auto items-center justify-center bg-white px-5 py-8 lg:py-0">
          <div className="flex flex-row w-full justify-between lg:gap-x-8">
            <div>
              <FacebookCircularProgress />
            </div>
            <div className="flex flex-col items-center justify-between">
              <p>100/1000</p>
              <p className="text-xs text-[#A09D9D]">Progress</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-5 w-full justify-between">
        <div className="text-xs w-full lg:w-[65%] bg-white p-5 rounded-lg shadow-md">
          <p className="text-xs">Your Activity</p>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            className="mt-5"
            style={{ height: 410, fontSize: "12px" }}
          />
        </div>
        <div className="leaderboardBackground text-[#49454F] w-full lg:w-[33%] p-5 rounded-lg h-[500px]">
          <p className="font-medium">Leader Board</p>
          <div className="mt-5 w-full">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-x-4">
                <div className="text-xs text-[#A09D9D] font-semibold">
                  Leader
                </div>
                <div className="text-xs text-[#A09D9D] font-semibold mr-2">
                  Name
                </div>
              </div>
              <div className="text-xs text-[#A09D9D] font-semibold mr-2">
                Points
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-y-3 overflow-hidden max-h-[380px] overflow-y-auto pr-2">
              {dummyLeaderboardData.map((data, index) => (
                <div
                  className={`flex flex-row justify-between items-center`}
                  key={index}
                >
                  <div className="flex flex-row gap-x-4">
                    <div
                      className={`w-10 h-10 p-2.5 ${
                        index <= 2 ? "topStyles" : "avaterGradient"
                      } rounded-full`}
                    >
                      {" "}
                      <img
                        className="w-full h-full"
                        src={data.avatar}
                        alt="avatar"
                      />{" "}
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-sm leading-5 font-semibold">
                        {" "}
                        {data.name}{" "}
                      </span>
                      <span className="text-xs"> {data.username} </span>
                    </div>
                  </div>
                  <div className="text-sm font-semibold"> {data.points} </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportGamification;
