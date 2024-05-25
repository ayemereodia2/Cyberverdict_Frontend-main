// import React from "react";
import badge1 from "../../../assets/badgeAssets/Laurel (1).svg"
import badge2 from "../../../assets/badgeAssets/award (1) 1 (1).svg"
import badge3 from "../../../assets/badgeAssets/award (1) 1.svg"
import badge4 from "../../../assets/badgeAssets/award 1.svg"
import badge5 from "../../../assets/badgeAssets/badge (1) 1.svg"
import badge6 from "../../../assets/badgeAssets/badge (1).svg"
import badge7 from "../../../assets/badgeAssets/badge (2).svg"
import badge8 from "../../../assets/badgeAssets/badge (3).svg"
import badge9 from "../../../assets/badgeAssets/badge (4).svg"
import badge10 from "../../../assets/badgeAssets/badge (5).svg"
import badge11 from "../../../assets/badgeAssets/badge (6).svg"
import badge12 from "../../../assets/badgeAssets/badge (7).svg"
import badge13 from "../../../assets/badgeAssets/badge 1.svg"
import badge14 from "../../../assets/badgeAssets/badge.svg"
import badge15 from "../../../assets/badgeAssets/college 1.svg"
import badge16 from "../../../assets/badgeAssets/crown 1.svg"
import pointImg from "../../../assets/avatarAssets/enjin-coin-(enj).svg";
import lockImg from "../../../assets/gamificationAssets/lock.svg"

const badgeDummy = [
  {
    badge: badge1,
    points: 50,
  },
  {
    badge: badge2,
    points: 100,
  },
  {
    badge: badge3,
    points: 150,
  },
  {
    badge: badge4,
    points: 200,
  },
  {
    badge: badge5,
    points: 250,
  },
  {
    badge: badge6,
    points: 300,
  },
  {
    badge: badge7,
    points: 350,
  },
  {
    badge: badge8,
    points: 400,
  },
  {
    badge: badge9,
    points: 450,
  },
  {
    badge: badge10,
    points: 500,
  },
  {
    badge: badge11,
    points: 550,
  },
  {
    badge: badge12,
    points: 600,
  },
  {
    badge: badge13,
    points: 700,
  },
  {
    badge: badge14,
    points: 800,
  },
  {
    badge: badge15,
    points: 900,
  },
  {
    badge: badge16,
    points: 1000,
  },
];

const userPoints = 0;

const BadgeComp = () => {
  return (
    <div className="mt-5 flex flex-row flex-wrap justify-between gap-4">
      {badgeDummy.map((badge, index) => (
        <div
          key={index}
          className="p-5 relative rounded-lg border border-[#EBECFD] bg-[#FCFCFC] shadow-md flex flex-col gap-y-3 items-center"
        >
          <img
            className={`absolute bottom-9 w-7 h-7 left-1/2 -translate-x-1/2 ${
              userPoints < badge.points ? "block" : "hidden"
            } `}
            src={lockImg}
            alt="lock image"
          />
          <img className="w-12 h-12" src={badge.badge} alt="badge" />
          <div className="flex items-center flex-row gap-x-1">
            <img src={pointImg} alt="point image" />
            <p className="text-xs"> {badge.points} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BadgeComp;
