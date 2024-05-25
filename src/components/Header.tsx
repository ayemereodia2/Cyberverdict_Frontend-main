import { useContext, useState } from "react";
import { BsMoon } from "react-icons/bs";
import profile from "../assets/profile.png";
import { Store } from "../Store";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import userAvater from "../assets/Mask group.svg";
import BasicPopover from "./ProfilePopover";
import { IoIosArrowRoundBack } from "react-icons/io";
import SearchModal from "./SearchModal";
// import NotificationPopover from "./NotificationPopover";
import { toast } from "react-toastify";
import { MdNotificationsNone } from "react-icons/md";

// interface MobileMenuProps {
//   setMobileOpen: any;
// }

const Header: React.FC = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentRouteName = location.pathname;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  const { state } = useContext(Store);
  const { userInfo } = state;
  return (
    <>
      <div className="w-full lg:flex items-center shadow-md bg-white hidden h-[69px] fixed top-0 left-0 z-10 ">
        <div className="w-full lg:flex hidden flex-row pl-[120px] justify-between mr-[35px] items-center">
          <div className="font-semibold">
            {currentRouteName === "/" ||
            currentRouteName === "/discover" ||
            currentRouteName === "/tech" ||
            currentRouteName === "/entertainment" ? (
              "Home"
            ) : currentRouteName === "/videos" ||
              currentRouteName === "/videos/discover" ||
              currentRouteName === "/videos/tech" ||
              currentRouteName === "/videos/entertainment" ? (
              "Videos"
            ) : currentRouteName === "/websites" ? (
              "Websites"
            ) : currentRouteName === "/settings" ? (
              "Preference"
            ) : currentRouteName === "/gamification" ||
              currentRouteName === "/gamification/instruction" ||
              currentRouteName === "/gamification/achievement" ||
              currentRouteName === "/gamification/achievement/badge" ||
              currentRouteName === "/gamification/achievement/rank" ? (
              <p
                onClick={() => navigate(-1)}
                className="flex cursor-pointer flex-row items-center gap-x-2"
              >
                <span>
                  <IoIosArrowRoundBack className="text-2xl" />
                </span>
                Gamification Report
              </p>
            ) : currentRouteName === "/profileSettings" ? (
              <p
                onClick={() => navigate(-1)}
                className="flex cursor-pointer flex-row items-center gap-x-2"
              >
                <span>
                  <IoIosArrowRoundBack className="text-2xl" />
                </span>
                Profile
              </p>
            ) : currentRouteName === "/notificationSettings" ? (
              <p
                onClick={() => navigate(-1)}
                className="flex cursor-pointer flex-row items-center gap-x-2"
              >
                <span>
                  <IoIosArrowRoundBack className="text-2xl" />
                </span>
                Notification Settings
              </p>
            ) : currentRouteName === "/manageFeeds" ? (
              <p
                onClick={() => navigate(-1)}
                className="flex cursor-pointer flex-row items-center gap-x-2"
              >
                <span>
                  <IoIosArrowRoundBack className="text-2xl" />
                </span>
                Manage Feeds
              </p>
            ) : currentRouteName === "/aboutUs" ? (
              <p
                onClick={() => navigate(-1)}
                className="flex cursor-pointer flex-row items-center gap-x-2"
              >
                <span>
                  <IoIosArrowRoundBack className="text-2xl" />
                </span>
                About Us
              </p>
            ) : currentRouteName === "/termsCondition" ? (
              <p
                onClick={() => navigate(-1)}
                className="flex cursor-pointer flex-row items-center gap-x-2"
              >
                <span>
                  <IoIosArrowRoundBack className="text-2xl" />
                </span>
                Terms & Conditions
              </p>
            ) : currentRouteName === "/privacyPolicy" ? (
              <p
                onClick={() => navigate(-1)}
                className="flex cursor-pointer flex-row items-center gap-x-2"
              >
                <span>
                  <IoIosArrowRoundBack className="text-2xl" />
                </span>
                Privacy Policy
              </p>
            ) : currentRouteName === "/post/:title" ? (
              <p
                onClick={() => navigate(-1)}
                className="flex cursor-pointer flex-row items-center gap-x-2"
              >
                <span>
                  <IoIosArrowRoundBack className="text-2xl" />
                </span>
                Back
              </p>
            ) : (
              <p
                onClick={() => navigate(-1)}
                className="flex cursor-pointer flex-row items-center gap-x-2"
              >
                <span>
                  <IoIosArrowRoundBack className="text-2xl" />
                </span>
                Back
              </p>
            )}
          </div>
          {/* {currentRouteName === "/gamification" ? (
            <div className="flex flex-row items-center bg-red-500 gap-x-2 font-semibold">
              <span>
                {" "}
                <IoIosArrowRoundBack />{" "}
              </span>
              <p>Gamification Report</p>
            </div>
          ) : (
            ""
          )} */}
          <div className="flex flex-row items-center">
            {/* <input
              className="outline-none border-none p-3"
              type="text"
              placeholder="🔍  Search"
            /> */}
            <div
              // onClick={() => setOpen(true)}
              onClick={() => toast.warning("Feature coming soon...")}
              className="flex flex-row gap-3 cursor-pointer items-center"
            >
              <span>
                <IoMdSearch className="text-xl" />
              </span>
              <p className="">Search</p>
            </div>
            <div className="ml-[72px] flex flex-row items-center gap-10">
              <div 
              onClick={() => toast.warning("Feature coming soon...")}
              className="bg-[#F8F9FF] p-1.5 cursor-pointer rounded-full">
                <span>
                  <BsMoon className="w-5 h-5 text-primaryColor" />
                </span>
              </div>
              <div 
              onClick={() => toast.warning("Feature coming soon...")}
              className="bg-[#F8F9FF] p-1.5 rounded-full">
                <span>
                  {/* <NotificationPopover /> */}
                  <MdNotificationsNone className="w-6 h-6 text-primaryColor" />
                </span>
              </div>
              <div className="">
                {userInfo ? (
                  <div className="flex flex-row gap-2.5 items-center">
                    <div className="avaterGradient w-6 h-6 p-1 rounded-full">
                      <img src={userAvater} className="" alt="user avater" />
                    </div>
                    <BasicPopover />
                  </div>
                ) : (
                  <div className="flex flex-row gap-3 items-center">
                    <span className="bg-[#EDEDED] p-1.5 rounded-full">
                      <img src={profile} className="w-5 h-5" alt="profile" />
                    </span>
                    <span className="text-sm font-semibold">Guest</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
