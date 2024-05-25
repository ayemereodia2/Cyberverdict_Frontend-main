import { Box, SwipeableDrawer } from "@mui/material";
import React from "react";
import img from "../assets/notLoggedin.svg";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

interface NotLoginProps {
  notlogin: any;
  setNotlogin: any;
}

const NotLogin: React.FC<NotLoginProps> = ({ notlogin, setNotlogin }) => {
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

      setNotlogin(open);
    };

  const box = () => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="pt-9 px-5"
    >
        <div
          onClick={() => setNotlogin(false)}
          className="absolute text-2xl font-bold cursor-pointer right-5"
        >
          <AiOutlineClose className="hover:text-primaryColor duration-300" />
        </div>
      <div className="flex flex-col gap-5 items-center text-center">
        <img src={img} alt="notLoggedin image" />
        <p className="text-lg font-semibold leading-5">Login</p>
        <p className="leading-5 text-sm tracking-wide">To experience the full features of cyberverdict kindly Login!</p>
        <Link className="w-full" to="/authpage/login">
        <div className="text-white bg-primaryColor text-sm py-2.5 px-6 rounded-3xl w-full">Login</div>
        </Link>
      </div>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="right"
      open={notlogin}
      onClose={() => setNotlogin(false)}
      onOpen={() => setNotlogin(true)}
    >
      {box()}
    </SwipeableDrawer>
  );
};

export default NotLogin;
