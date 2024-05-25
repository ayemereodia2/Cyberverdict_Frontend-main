import { Box, SwipeableDrawer } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import avatar1 from "../assets/completeProfileAssets/3 - Ordinary Female - Neutral - White.png";
import avatar2 from "../assets/completeProfileAssets/1 - Ordinary Female - Neutral - White.png";
import avatar3 from "../assets/completeProfileAssets/1 - Ordinary Female - Neutral - White (1).png";
import { Store } from "../Store";

interface CompleteProfileProps {
    isOpen: any;
    setIsOpen: any
}

const CompleteProfile: React.FC<CompleteProfileProps> = ({isOpen,setIsOpen}) => {
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

      setIsOpen(open);
    };
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false)
  const [isFocusedUsername, setIsFocusedUsername] = useState(false)
  const [isFocusedDate, setIsFocusedDate] = useState(false)

  const [username, setUsername] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    userInfo ? (setIsFocused(true),setIsFocusedEmail(true)) : ""
  },[])

  const box = () => (
    <Box
      sx={{ width: 380 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      //   onKeyDown={toggleDrawer(false)}
      className="py-8 px-11 z-20 bg-homeBg"
    >
      <div
        onClick={() => setIsOpen(false)}
        className="text-xl font-bold cursor-pointer float-right"
      >
        <AiOutlineClose className="hover:text-primaryColor duration-300" />
      </div>
      <div className="mt-8">
        <p className="text-sm text-[#A09D9D] tracking-wide text-center">
          Tell us some extra details about yourself.
        </p>
      </div>
      <div className="bg-white p-3 mt-5 rounded-lg">
        <p className="text-sm robotoFont mb-3 font-medium tracking-wider">
          Choose Avatar
        </p>
        <hr />
        <div className="mt-3 flex flex-row justify-between">
          <div>
            <img className="w-[4.5rem] h-[4.5rem]" src={avatar1} alt="avatar" />
          </div>
          <div>
            <img className="w-[4.5rem] h-[4.5rem]" src={avatar2} alt="avatar" />
          </div>
          <div>
            <img className="w-[4.5rem] h-[4.5rem]" src={avatar3} alt="avatar" />
          </div>
        </div>
        <hr className="mt-3" />
        <p className="mt-5 cursor-pointer robotoFont text-right text-primaryColor text-sm font-medium tracking-wider">
          Unlock New Avatar
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-y-5">
        <div className="mt-0.5" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <input
              required
              type="text"
              disabled={userInfo ? true : false}
              value={userInfo ? userInfo.name : ""}
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
              Name
            </label>
          </div>
        </div>
        <div className="mt-0.5" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <input
              required
              type="text"
              disabled={userInfo ? true : false}
              value={userInfo? userInfo.email : ""}
              className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
                isFocusedEmail ? "border-primaryColor" : "border-[#79747E]"
              } bg-transparent outline-none focus:border-primaryColor transition duration-300`}
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}
              placeholder=""
            />
            <label
              className={`absolute text-xs duration-300 transform ${
                isFocusedEmail
                  ? "text-blue-600 scale-75 top-2 -translate-y-4"
                  : "text-gray-500 scale-100 top-1/2 -translate-y-1/2"
              } left-2 bg-white px-1`}
            >
              Email
            </label>
          </div>
        </div>
        <div className="mt-0.5" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <input
              required
              type="text"
            //   disabled={userInfo ? true : false}
              value={username}
              className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
                isFocusedUsername ? "border-primaryColor" : "border-[#79747E]"
              } bg-transparent outline-none focus:border-primaryColor transition duration-300`}
              onFocus={() => setIsFocusedUsername(true)}
              onBlur={() => setIsFocusedUsername(false)}
              placeholder=""
              onChange={(e) => setUsername(e.target.value)}
            />
            <label
              className={`absolute text-xs duration-300 transform ${
                isFocusedUsername
                  ? "text-blue-600 scale-75 top-2 -translate-y-4"
                  : "text-gray-500 scale-100 top-1/2 -translate-y-1/2"
              } left-2 bg-white px-1`}
            >
              Username
            </label>
          </div>
        </div>
        <div className="mt-0.5" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <input
              required
              type="date"
            //   disabled={userInfo ? true : false}
              value={date}
              className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
                isFocusedDate ? "border-primaryColor" : "border-[#79747E]"
              } bg-transparent outline-none focus:border-primaryColor transition duration-300`}
              onFocus={() => setIsFocusedDate(true)}
              onBlur={() => setIsFocusedDate(false)}
              placeholder=""
              onChange={(e) => setDate(e.target.value)}
            />
            <label
              className={`absolute text-xs duration-300 transform ${
                isFocusedDate
                  ? "text-blue-600 scale-75 top-2 -translate-y-4"
                  : "text-gray-500 scale-100 top-1/2 -translate-y-1/2"
              } left-2 bg-white px-1`}
            >
              Birthday
            </label>
          </div>
        </div>
        <div
        className="cursor-pointer mt-1 text-center w-full py-3 rounded-3xl bg-primaryColor text-white font-semibold text-xs">
          Save Changes
        </div>
      </div>
    </Box>
  );
  return (
    <div>
      <SwipeableDrawer
        style={{ zIndex: 1500 }}
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        {box()}
      </SwipeableDrawer>
    </div>
  );
};

export default CompleteProfile;
