import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { FaSortDown } from "react-icons/fa";
import { Store } from "../Store";
// import userAvater from "../assets/Mask group.svg";
// import cardImg from "../assets/profilePopoverAssets/card.svg";
// import logoutImg from "../assets/profilePopoverAssets/logout.svg";
// import messageImg from "../assets/profilePopoverAssets/message-question.svg";
// import saveImg from "../assets/profilePopoverAssets/save-2.svg";
// import settingImg from "../assets/profilePopoverAssets/setting-2.svg";
// import awardImg from "../assets/profilePopoverAssets/award.svg";
// import userCircleImg from "../assets/profilePopoverAssets/user-cirlce-add.svg";
// import CompleteProfile from "./CompleteProfile";
// import { Link } from "react-router-dom";
import { MdNotificationsNone } from "react-icons/md";

const NotificationPopover = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { state } = React.useContext(Store);
  const { userInfo } = state;
  // const [isOpen, setIsOpen] = React.useState(false);
  //   console.log(userInfo)

  return (
    <div>
      {userInfo && (
        <div>
          <Typography
            aria-describedby={id}
            className="text-sm cursor-pointer font-semibold flex flex-row items-center gap-1"
            onClick={handleClick}
          >
            <MdNotificationsNone className="w-6 h-6 text-primaryColor" />
          </Typography>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            style={{ zIndex: 1400 }}
            className="text-sm"
          >
            <div className="bg-[#EDEDED] px-5 py-4">
              <p className="flex flex-row items-center gap-2">
                Notifications
                <span className="bg-primaryColor p-2 rounded-full text-xs text-white self-start">4</span>
              </p>
            </div>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default NotificationPopover;
