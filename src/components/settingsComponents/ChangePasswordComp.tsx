import { Box, SwipeableDrawer } from "@mui/material";
import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
// import { Store } from "../../Store";

interface ChangePasswordCompProps {
  isOpen: any;
  setIsOpen: any;
}

const ChangePasswordComp: React.FC<ChangePasswordCompProps> = ({
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
  // const { state } = useContext(Store);
  // const { userInfo } = state;

  const [isFocusedOldPassword, setIsFocusedOldPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");

  const [isFocusedNewPassword, setIsFocusedNewPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const [isFocusedConfNewPassword, setIsFocusedConfNewPassword] =
    useState(false);
  const [showConfNewPassword, setShowConfNewPassword] = useState(false);
  const [confNewPassword, setConfNewPassword] = useState("");

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
      <p className="font-semibold mt-12">Change Password</p>
      <div className="mt-6 flex flex-col gap-y-4">
        <div className="mt-0.5" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <input
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              type={showOldPassword ? "text" : "password"}
              className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
                isFocusedOldPassword
                  ? "border-primaryColor"
                  : "border-[#79747E]"
              } bg-transparent outline-none focus:border-primaryColor transition duration-300`}
              onFocus={() => setIsFocusedOldPassword(true)}
              onBlur={() => setIsFocusedOldPassword(false)}
              placeholder=""
            />
            <span className="absolute right-3 top-2.5">
              <AiOutlineEyeInvisible
                onClick={() => {
                  setShowOldPassword(!showOldPassword);
                  setIsFocusedOldPassword(true);
                }}
                className={`w-5 h-5 ${!showOldPassword ? "block" : "hidden"}`}
              />
              <AiOutlineEye
                onClick={() => {
                  setShowOldPassword(!showOldPassword);
                  setIsFocusedOldPassword(true);
                }}
                className={`w-5 h-5 ${showOldPassword ? "block" : "hidden"}`}
              />
            </span>
            <label
              className={`absolute text-sm duration-300 transform ${
                isFocusedOldPassword
                  ? "text-blue-600 scale-75 top-2 -translate-y-4"
                  : "text-gray-500 scale-100 top-1/2 -translate-y-1/2"
              } left-2 bg-white px-1`}
            >
              Old Password
            </label>
          </div>
        </div>
        <div className="mt-0.5" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type={showNewPassword ? "text" : "password"}
              className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
                isFocusedNewPassword
                  ? "border-primaryColor"
                  : "border-[#79747E]"
              } bg-transparent outline-none focus:border-primaryColor transition duration-300`}
              onFocus={() => setIsFocusedNewPassword(true)}
              onBlur={() => setIsFocusedNewPassword(false)}
              placeholder=""
            />
            <span className="absolute right-3 top-2.5">
              <AiOutlineEyeInvisible
                onClick={() => {
                  setShowNewPassword(!showNewPassword);
                  setIsFocusedNewPassword(true);
                }}
                className={`w-5 h-5 ${!showNewPassword ? "block" : "hidden"}`}
              />
              <AiOutlineEye
                onClick={() => {
                  setShowNewPassword(!showNewPassword);
                  setIsFocusedNewPassword(true);
                }}
                className={`w-5 h-5 ${showNewPassword ? "block" : "hidden"}`}
              />
            </span>
            <label
              className={`absolute text-sm duration-300 transform ${
                isFocusedNewPassword
                  ? "text-blue-600 scale-75 top-2 -translate-y-4"
                  : "text-gray-500 scale-100 top-1/2 -translate-y-1/2"
              } left-2 bg-white px-1`}
            >
              New Password
            </label>
          </div>
        </div>
        <div className="mt-0.5" onClick={(e) => e.stopPropagation()}>
          <div className="relative">
            <input
              value={confNewPassword}
              onChange={(e) => setConfNewPassword(e.target.value)}
              type={showConfNewPassword ? "text" : "password"}
              className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
                isFocusedConfNewPassword
                  ? "border-primaryColor"
                  : "border-[#79747E]"
              } bg-transparent outline-none focus:border-primaryColor transition duration-300`}
              onFocus={() => setIsFocusedConfNewPassword(true)}
              onBlur={() => setIsFocusedConfNewPassword(false)}
              placeholder=""
            />
            <span className="absolute right-3 top-2.5">
              <AiOutlineEyeInvisible
                onClick={() => {
                  setShowConfNewPassword(!showConfNewPassword);
                  setIsFocusedConfNewPassword(true);
                }}
                className={`w-5 h-5 ${
                  !showConfNewPassword ? "block" : "hidden"
                }`}
              />
              <AiOutlineEye
                onClick={() => {
                  setShowConfNewPassword(!showConfNewPassword);
                  setIsFocusedConfNewPassword(true);
                }}
                className={`w-5 h-5 ${
                  showConfNewPassword ? "block" : "hidden"
                }`}
              />
            </span>
            <label
              className={`absolute text-sm duration-300 transform ${
                isFocusedConfNewPassword
                  ? "text-blue-600 scale-75 top-2 -translate-y-4"
                  : "text-gray-500 scale-100 top-1/2 -translate-y-1/2"
              } left-2 bg-white px-1`}
            >
              Confirm New password
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

export default ChangePasswordComp;
