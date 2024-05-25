import { Box, SwipeableDrawer } from "@mui/material";
import React, { useContext } from "react";
import logoSvg from "../assets/cy1.svg";
import { AiOutlineClose } from "react-icons/ai";
import { BsMoon } from "react-icons/bs";
import supportImg from "../assets/message-question.svg";
import aboutImg from "../assets/info-circle.svg";
import homeImg from "../assets/home-2.svg";
import videoImg from "../assets/video-square.svg";
import websiteImg from "../assets/wifi-square.svg";
import preferenceImg from "../assets/setting-2.svg";
import profileImg from "../assets/profile.svg";
import notificationImg from "../assets/notification-bing.svg";
import personalizeImg from "../assets/home-hashtag.svg";
import { Store } from "../Store";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  mobileOpen: any;
  setMobileOpen: any;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  mobileOpen,
  setMobileOpen,
}) => {
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setMobileOpen(open);
    };
  const { state } = useContext(Store);
  const { userInfo } = state;
  const box = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="pb-8"
    >
      <div className="flex lg:hidden shadow-lg w-full justify-between items-center top-0 z-10 p-5 bg-white">
        <div className=" flex flex-row items-center gap-2.5">
          <img className="w-[35px] h-[35px]" src={logoSvg} alt="logo svg" />
          <p className="text-lg logoFont font-extrabold text-left text-primaryColor">
            Cyberverdict
          </p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <BsMoon className="text-xl font-extrabold" />
          <AiOutlineClose
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-bold"
          />
        </div>
      </div>
      <div className={` ${userInfo ? "hidden" : "flex"} flex-col gap-4 p-5 mt-8`}>
        <div className="flex flex-row gap-3">
            <img src={supportImg} alt="support center" />
            <p className="text-[#49454F]">Support Center</p>
        </div>
        <div className="flex flex-row gap-3">
            <img src={aboutImg} alt="About us" />
            <p className="text-[#49454F] ">About Us</p>
        </div>
      </div>
      <div className={` ${userInfo ? "flex" : "hidden"} flex-col gap-4 p-5 mt-8`}>
        <Link to="/" className="flex flex-row gap-4">
          <img src={homeImg} alt="support center" />
          <p className="text-[#49454F] tracking-wider">Home</p>
        </Link>
        <Link to="/videos" className="flex flex-row gap-4">
          <img src={videoImg} alt="About us" />
          <p className="text-[#49454F] tracking-wider">Video</p>
        </Link>
        <Link to="/websites" className="flex flex-row gap-4">
          <img src={websiteImg} alt="About us" />
          <p className="text-[#49454F] tracking-wider">Website</p>
        </Link>
        <Link to="/settings" className="flex flex-row gap-4">
          <img src={preferenceImg} alt="About us" />
          <p className="text-[#49454F] tracking-wider">Preference</p>
        </Link>
        <hr />
        <Link to="/mobileProfile" className="flex flex-row gap-4">
          <img src={profileImg} alt="About us" />
          <p className="text-[#49454F] tracking-wider">Profile</p>
        </Link>
        <div className="flex flex-row gap-4">
          <img src={notificationImg} alt="About us" />
          <p className="text-[#49454F] tracking-wider">Notification</p>
        </div>
        <div className="flex flex-row gap-4">
          <img src={personalizeImg} alt="About us" />
          <p className="text-[#49454F] tracking-wider">Personalize Dashboard</p>
        </div>
        <div className="flex flex-row gap-4">
          <img src={supportImg} alt="support center" />
          <p className="text-[#49454F]">Support Center</p>
        </div>
        <Link to="/aboutus" className="flex flex-row gap-4">
          <img src={aboutImg} alt="About us" />
          <p className="text-[#49454F] ">About Us</p>
        </Link>
      </div>
    </Box>
  );
  return (
    <SwipeableDrawer
      anchor="top"
      open={mobileOpen}
      onClose={() => setMobileOpen(false)}
      onOpen={() => setMobileOpen(true)}
    >
      {box()}
    </SwipeableDrawer>
  );
};

export default MobileMenu;
