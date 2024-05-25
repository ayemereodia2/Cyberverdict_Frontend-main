import { Box, SwipeableDrawer } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import {
  AiOutlineClose
} from "react-icons/ai";
import { Store } from "../../Store";

interface EditProfileCompProps {
  isOpen: any;
  setIsOpen: any;
}

const EditProfileComp: React.FC<EditProfileCompProps> = ({
  isOpen,
  setIsOpen,
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

      setIsOpen(open);
    };
  const { state } = useContext(Store);
  const { userInfo } = state;

  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false)

  const [name, setName] = useState(userInfo ? userInfo.name : "")
  const [email, setEmail] = useState(userInfo ? userInfo.email : "")

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
      <p className="font-semibold mt-12">Edit Profile</p>
      <div className="mt-6 flex flex-col gap-y-4">
      <div className="mt-0.5" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
        <div className="cursor-pointer mt-2 text-center w-full py-3 rounded-3xl bg-primaryColor text-white font-semibold text-xs">
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

export default EditProfileComp;
