// import React from "react";
import avatar1 from "../../../assets/avatarAssets/Rectangle 1.svg";
import avatar2 from "../../../assets/avatarAssets/Rectangle 2 (1).svg";
import avatar3 from "../../../assets/avatarAssets/Rectangle 2 (10).svg";
import avatar4 from "../../../assets/avatarAssets/Rectangle 2 (11).svg";
import avatar5 from "../../../assets/avatarAssets/Rectangle 2 (12).svg";
import avatar6 from "../../../assets/avatarAssets/Rectangle 2 (13).svg";
import avatar7 from "../../../assets/avatarAssets/Rectangle 2 (14).svg";
import avatar8 from "../../../assets/avatarAssets/Rectangle 2 (2).svg";
import avatar9 from "../../../assets/avatarAssets/Rectangle 2 (3).svg";
import avatar10 from "../../../assets/avatarAssets/Rectangle 2 (4).svg";
import avatar11 from "../../../assets/avatarAssets/Rectangle 2 (5).svg";
import avatar12 from "../../../assets/avatarAssets/Rectangle 2 (6).svg";
import avatar13 from "../../../assets/avatarAssets/Rectangle 2 (7).svg";
import avatar14 from "../../../assets/avatarAssets/Rectangle 2 (8).svg";
import avatar15 from "../../../assets/avatarAssets/Rectangle 2 (9).svg";
import avatar16 from "../../../assets/avatarAssets/Rectangle 2.svg";
import pointImg from "../../../assets/avatarAssets/enjin-coin-(enj).svg";
import lockImg from "../../../assets/gamificationAssets/lock.svg";

const avatarDummy = [
  {
    avatar: avatar1,
    points: 50,
  },
  {
    avatar: avatar2,
    points: 100,
  },
  {
    avatar: avatar3,
    points: 150,
  },
  {
    avatar: avatar4,
    points: 200,
  },
  {
    avatar: avatar5,
    points: 250,
  },
  {
    avatar: avatar6,
    points: 300,
  },
  {
    avatar: avatar7,
    points: 350,
  },
  {
    avatar: avatar8,
    points: 400,
  },
  {
    avatar: avatar9,
    points: 450,
  },
  {
    avatar: avatar10,
    points: 500,
  },
  {
    avatar: avatar11,
    points: 550,
  },
  {
    avatar: avatar12,
    points: 600,
  },
  {
    avatar: avatar13,
    points: 700,
  },
  {
    avatar: avatar14,
    points: 800,
  },
  {
    avatar: avatar15,
    points: 900,
  },
  {
    avatar: avatar16,
    points: 1000,
  },
];

const userPoints = 0;

const AvatarComp = () => {
  return (
    <div className="mt-5 flex flex-row flex-wrap justify-between gap-4">
      {avatarDummy.map((avatar, index) => (
        <div
          key={index}
          className="p-5 relative rounded-lg border border-[#EBECFD] bg-[#FCFCFC] shadow-md flex flex-col gap-y-3 items-center"
        >
          <img
            className={`absolute bottom-9 w-7 h-7 left-1/2 -translate-x-1/2 ${
              userPoints < avatar.points ? "block" : "hidden"
            } `}
            src={lockImg}
            alt="lock image"
          />
          <div
            className={`w-12 h-12 ${
              index == 0 || index == 1
                ? "avaterGradient"
                : index == 2 || index == 3
                ? "avaterGradient2"
                : index == 4 || index == 5
                ? "avaterGradient3"
                : index == 6 || index == 7
                ? "avaterGradient4"
                : index == 8 || index == 9
                ? "avaterGradient5"
                : index == 10 || index == 11
                ? "avaterGradient6"
                : "avaterGradient"
            } rounded-full overflow-hidden`}
          >
            <img src={avatar.avatar} alt="avatar" />
          </div>
          <div className="flex items-center flex-row gap-x-1">
            <img src={pointImg} alt="point image" />
            <p className="text-xs"> {avatar.points} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvatarComp;
