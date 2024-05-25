import { Box, SwipeableDrawer } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import { Link } from "react-router-dom";
import amicoImg from "../assets/amico.svg";

interface CreateDashboardProps {
  dashboardOpen: any;
  setDashboardOpen: any;
}

const CreateDashboard: React.FC<CreateDashboardProps> = ({
  dashboardOpen,
  setDashboardOpen,
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

      setDashboardOpen(open);
    };
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedPages, setIsFocusedPages] = useState(false);
  const [isFocusedScroll, setIsFocusedScroll] = useState(false);
  const [isFocusedDes, setIsFocusedDes] = useState(false);

  const box = () => (
    <Box
      sx={{ width: 450 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      //   onKeyDown={toggleDrawer(false)}
      className="pt-7"
    >
      <div className="flex flex-col gap-5 items-center text-center px-20">
        <div className="flex flex-row items-center">
          <p className="text-lg font-semibold leading-5">
            Create new Dashboard
          </p>
          <div
            onClick={() => setDashboardOpen(false)}
            className="text-xl font-bold cursor-pointer right-5 absolute"
          >
            <AiOutlineClose className="hover:text-primaryColor duration-300" />
          </div>
        </div>
        <img className="mt-5" src={amicoImg} alt="amico image" />
      </div>
      <div className="mt-5 px-7 flex flex-col gap-y-4">
        <p className="text-[#A09D9D] text-xs">
          Bookmark the key articles related to your projects, clients, or areas
          of interest for easy access
        </p>
        <div className="mt-0.5" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <input
              required
              type="text"
              className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
                isFocused ? "border-primaryColor" : "border-[#79747E]"
              } bg-transparent outline-none focus:border-primaryColor transition duration-300`}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder=""
            />
            <label
              className={`absolute text-xs duration-300 transform ${
                isFocused
                  ? "text-blue-600 scale-75 top-2 -translate-y-4"
                  : "text-gray-500 scale-100 top-1/2 -translate-y-1/2"
              } left-2 bg-white px-1`}
            >
              Title
            </label>
          </div>
        </div>
        <div onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <input
              required
              type="text"
              className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
                isFocusedPages ? "border-primaryColor" : "border-[#79747E]"
              } bg-transparent outline-none focus:border-primaryColor transition duration-300`}
              onFocus={() => setIsFocusedPages(true)}
              onBlur={() => setIsFocusedPages(false)}
              placeholder=""
            />
            <label
              className={`absolute text-xs duration-300 transform ${
                isFocusedPages
                  ? "text-blue-600 scale-75 top-2 -translate-y-4"
                  : "text-gray-500 scale-100 top-1/2 -translate-y-1/2"
              } left-2 bg-white px-1`}
            >
              Number of Pages
            </label>
          </div>
          <p className="text-xs mt-1 leading-4 text-[#1C1B1F] font-light robotoFont tracking-wide">
            How many pages would you like your dashboard to have?
          </p>
        </div>
        <div onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <input
              required
              type="text"
              className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
                isFocusedScroll ? "border-primaryColor" : "border-[#79747E]"
              } bg-transparent outline-none focus:border-primaryColor transition duration-300`}
              onFocus={() => setIsFocusedScroll(true)}
              onBlur={() => setIsFocusedScroll(false)}
              placeholder=""
            />
            <label
              className={`absolute text-xs duration-300 transform ${
                isFocusedScroll
                  ? "text-blue-600 scale-75 top-2 -translate-y-4"
                  : "text-gray-500 scale-100 top-1/2 -translate-y-1/2"
              } left-2 bg-white px-1`}
            >
              Select Scroll Intervals
            </label>
          </div>
          <p className="text-xs mt-1 leading-4 text-[#1C1B1F] robotoFont tracking-wide">
            Choose scroll intervals that suit your preferences and needs for
            effective navigation
          </p>
        </div>
        <div onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <textarea
              required
              className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
                isFocusedDes ? "border-primaryColor" : "border-[#79747E]"
              } bg-transparent outline-none focus:border-primaryColor transition duration-300`}
              onFocus={() => {
                setIsFocusedDes(true);
              }}
              onBlur={() => setIsFocusedDes(false)}
              placeholder=""
            />
            <label
              className={`absolute text-xs duration-300 transform ${
                isFocusedDes
                  ? "text-blue-600 scale-75 top-2 -translate-y-4"
                  : "text-gray-500 scale-100 top-2"
              } left-2 bg-white px-1`}
            >
              Description
            </label>
          </div>
        </div>
        <div className="cursor-pointer mt-1 text-center px-10 py-3 rounded-3xl bg-primaryColor text-white font-semibold text-xs">
          Create board
        </div>
      </div>
    </Box>
  );
  return (
    <SwipeableDrawer
      anchor="right"
      open={dashboardOpen}
      onClose={() => setDashboardOpen(false)}
      onOpen={() => setDashboardOpen(true)}
    >
      {box()}
    </SwipeableDrawer>
  );
};

export default CreateDashboard;
