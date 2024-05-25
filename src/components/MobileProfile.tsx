import React from "react";
import { Store } from "../Store";
import userAvater from "../assets/Mask group.svg";
import cardImg from "../assets/profilePopoverAssets/card.svg";
import logoutImg from "../assets/profilePopoverAssets/logout.svg";
import messageImg from "../assets/profilePopoverAssets/message-question.svg";
import saveImg from "../assets/profilePopoverAssets/save-2.svg";
import settingImg from "../assets/profilePopoverAssets/setting-2.svg";
import awardImg from "../assets/profilePopoverAssets/award.svg";
import userCircleImg from "../assets/profilePopoverAssets/user-cirlce-add.svg";
import CompleteProfile from "./CompleteProfile";
import { Link, useNavigate } from "react-router-dom";

const MobileProfile = () => {
  const { state } = React.useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/authpage/login");
  };

  // const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
  //   null
  // );

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="px-2 mt-7 lg:px-56 bg-homeBg pb-5">
      {userInfo && (
        <div className="">
          <div className="bg-homeBg border-b flex flex-row justify-between items-center border-[#EDEDED] w-full p-5">
            <div className="flex flex-row gap-x-2.5">
              <div className="avaterGradient rounded-full self-start">
                <img src={userAvater} className="w-14 h-14" alt="user avater" />
              </div>
              <div>
                <p className="text-sm font-bold leading-5">{userInfo.name}</p>
                <p className="text-[#A09D9D] text-xs leading-5">
                  {userInfo.email}
                </p>
                <p className="text-xs">free</p>
              </div>
            </div>
            <div onClick={logOut} className="cursor-pointer">
              <img className="w-6 h-6" src={logoutImg} alt="logout image" />
            </div>
          </div>
          <div className="p-5 border-l flex flex-col gap-y-5 border-[#EDEDED]">
            <div className="bg-homeBg rounded-md p-3 border border-[#EAEAEA]">
              <div className="flex flex-row items-center justify-between gap-x-5">
                <div>
                  <p className="text-sm font-semibold leading-5">
                    Current Rank
                  </p>
                  <p className="text-[#A09D9D] text-xs">
                    Rank 2 consists of 3 badges
                  </p>
                </div>
                <div className="relative w-10 h-10">
                  <img
                    className="w-full h-full"
                    src={awardImg}
                    alt="award image"
                  />
                  <p className="text-[7px] logoFont absolute mt-[3px] font-semibold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                    2
                  </p>
                </div>
              </div>
              <Link to="/gamification">
                <p className="text-primaryColor cursor-pointer mt-3 text-center text-xs font-semibold">
                  View Gamification Report
                </p>
              </Link>
            </div>
            <div className="bg-homeBg rounded-md p-16 border border-[#EAEAEA]"></div>
            <div className="bg-homeBg rounded-md border border-[#EAEAEA] flex flex-col justify-center items-center gap-y-2 p-2.5">
              <div className="p-2.5 bg-primaryColor rounded-full w-[40px] h-[40px]">
                <img src={userCircleImg} alt="user circle image" />
              </div>
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="border rounded-sm cursor-pointer text-[10px] font-semibold border-primaryColor bg-white px-3 py-1"
              >
                Complete Profile
              </div>
              <CompleteProfile isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
          <div className="flex flex-row gap-x-5">
            <div className="p-5 flex flex-col gap-y-7">
              <div className="flex flex-row gap-x-2 items-center">
                <img src={saveImg} alt="save image" />
                <p className="text-sm">Saved posts</p>
              </div>
              <Link to="/settings" className="flex flex-row gap-x-2 items-center">
                <img src={settingImg} alt="setting image" />
                <p className="text-sm">Preference</p>
              </Link>
              <div className="flex flex-row gap-x-2 items-center">
                <img src={cardImg} alt="card image" />
                <p className="text-sm">Subscription plans</p>
              </div>
              <div className="flex flex-row gap-x-2 items-center">
                <img src={messageImg} alt="message image" />
                <p className="text-sm">Support Centre</p>
              </div>
              <div
                onClick={logOut}
                className="flex flex-row gap-x-2 items-center cursor-pointer"
              >
                <img src={logoutImg} alt="logout image" />
                <p className="text-sm">Logout</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileProfile;
