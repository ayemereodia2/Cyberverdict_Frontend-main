import React, { useContext } from "react";
import logoSvg from "../assets/cy1.svg";
import { Store } from "../Store";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  setNotlogin: any;
  setDashboardOpen: any;
}

const Sidebar: React.FC<SidebarProps> = ({ setNotlogin, setDashboardOpen }) => {
  const location = useLocation();
  const currentRouteName = location.pathname;
  const { state } = useContext(Store);
  const { userInfo } = state;
  return (
    <div
      className=" hidden bg-white lg:block shadow-md lg:w-[91px] h-screen 
     fixed top-0 left-0 z-20"
    >
      <div className="pt-5 flex flex-col items-center gap-10">
        <div>
          <img className="w-9 h-9" src={logoSvg} alt="logo svg" />
        </div>
        {userInfo ? (
          <ul className="flex flex-col gap-10">
            <Link to="/">
              {/* <BiHomeAlt
                className={`${
                  currentRouteName === "/" ||
                  currentRouteName === "/discover" ||
                  currentRouteName === "/tech" ||
                  currentRouteName === "/entertainment"
                    ? "text-primaryColor"
                    : "text-[#ACACAC]"
                } hover:text-primaryColor cursor-pointer duration-300 w-6 h-6`}
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
                  stroke={`${
                    currentRouteName === "/" ||
                    currentRouteName === "/discover" ||
                    currentRouteName === "/tech" ||
                    currentRouteName === "/entertainment"
                      ? "#1935CA"
                      : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M12 17.99V14.99"
                  stroke={`${
                    currentRouteName === "/" ||
                    currentRouteName === "/discover" ||
                    currentRouteName === "/tech" ||
                    currentRouteName === "/entertainment"
                      ? "#1935CA"
                      : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
              </svg>
            </Link>
            <Link className="group" to="/videos">
              {/* <BiVideo
                className={`${
                  currentRouteName === "/videos" || currentRouteName === "/videos/discover" || currentRouteName === "/videos/tech" || currentRouteName === "/videos/entertainment" ? "text-primaryColor" : "text-[#ACACAC]"
                } hover:text-primaryColor cursor-pointer duration-300 w-6 h-6`}
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke={`${
                    currentRouteName === "/videos" ||
                    currentRouteName === "/videos/discover" ||
                    currentRouteName === "/videos/tech" ||
                    currentRouteName === "/videos/entertainment"
                      ? "#1935CA"
                      : "#ACACAC"
                  }`}
                  className="group-hover:stroke-[#1935CA] duration-300"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.09961 12V10.52C9.09961 8.60999 10.4496 7.83999 12.0996 8.78999L13.3796 9.52999L14.6596 10.27C16.3096 11.22 16.3096 12.78 14.6596 13.73L13.3796 14.47L12.0996 15.21C10.4496 16.16 9.09961 15.38 9.09961 13.48V12Z"
                  stroke={`${
                    currentRouteName === "/videos" ||
                    currentRouteName === "/videos/discover" ||
                    currentRouteName === "/videos/tech" ||
                    currentRouteName === "/videos/entertainment"
                      ? "#1935CA"
                      : "#ACACAC"
                  }`}
                  className="group-hover:stroke-[#1935CA] duration-300"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
            <Link to="/websites">
              {/* <CgWebsite
                className={`${
                  currentRouteName === "/websites"
                    ? "text-primaryColor"
                    : "text-[#ACACAC]"
                } hover:text-primaryColor cursor-pointer duration-300 w-6 h-6`}
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M6 9.96004C9.63 7.15004 14.37 7.15004 18 9.96004"
                  stroke={`${
                    currentRouteName === "/websites" ? "#1935CA" : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M7.59961 13.0501C10.2696 10.9901 13.7396 10.9901 16.4096 13.0501"
                  stroke={`${
                    currentRouteName === "/websites" ? "#1935CA" : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M9.7998 16.1399C11.1298 15.1099 12.8698 15.1099 14.1998 16.1399"
                  stroke={`${
                    currentRouteName === "/websites" ? "#1935CA" : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke={`${
                    currentRouteName === "/websites" ? "#1935CA" : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
              </svg>
            </Link>
            <Link to="/settings">
              {/* <AiOutlineSetting
                className={`${
                  currentRouteName === "/settings"
                    ? "text-primaryColor"
                    : "text-[#ACACAC]"
                } hover:text-primaryColor cursor-pointer duration-300 w-6 h-6`}
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke={`${
                    currentRouteName === "/settings" ? "#1935CA" : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                  stroke={`${
                    currentRouteName === "/settings" ? "#1935CA" : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
              </svg>
            </Link>
            <div
              onClick={() => setDashboardOpen(true)}
              className="cursor-pointer"
            >
              {/* <BiSolidDashboard
                onClick={() => setDashboardOpen(true)}
                className={`${
                  currentRouteName === "/dashboard"
                    ? "text-primaryColor"
                    : "text-[#ACACAC]"
                } hover:text-primaryColor cursor-pointer duration-300 w-6 h-6`}
              /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
                  stroke="#ACACAC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M10.5 18H13.5C15.15 18 16.5 16.65 16.5 15V12C16.5 10.35 15.15 9 13.5 9H10.5C8.85 9 7.5 10.35 7.5 12V15C7.5 16.65 8.85 18 10.5 18Z"
                  stroke="#ACACAC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M12 9V18"
                  stroke="#ACACAC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M7.5 13.5H16.5"
                  stroke="#ACACAC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
              </svg>
            </div>
          </ul>
        ) : (
          <ul className="flex flex-col gap-10">
            <li onClick={() => setNotlogin(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
                  stroke={`${
                    currentRouteName === "/" ||
                    currentRouteName === "/discover" ||
                    currentRouteName === "/tech" ||
                    currentRouteName === "/entertainment"
                      ? "#1935CA"
                      : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M12 17.99V14.99"
                  stroke={`${
                    currentRouteName === "/" ||
                    currentRouteName === "/discover" ||
                    currentRouteName === "/tech" ||
                    currentRouteName === "/entertainment"
                      ? "#1935CA"
                      : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
              </svg>
            </li>
            <li onClick={() => setNotlogin(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke={`${
                    currentRouteName === "/videos" ||
                    currentRouteName === "/videos/discover" ||
                    currentRouteName === "/videos/tech" ||
                    currentRouteName === "/videos/entertainment"
                      ? "#1935CA"
                      : "#ACACAC"
                  }`}
                  className="group-hover:stroke-[#1935CA] duration-300"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.09961 12V10.52C9.09961 8.60999 10.4496 7.83999 12.0996 8.78999L13.3796 9.52999L14.6596 10.27C16.3096 11.22 16.3096 12.78 14.6596 13.73L13.3796 14.47L12.0996 15.21C10.4496 16.16 9.09961 15.38 9.09961 13.48V12Z"
                  stroke={`${
                    currentRouteName === "/videos" ||
                    currentRouteName === "/videos/discover" ||
                    currentRouteName === "/videos/tech" ||
                    currentRouteName === "/videos/entertainment"
                      ? "#1935CA"
                      : "#ACACAC"
                  }`}
                  className="group-hover:stroke-[#1935CA] duration-300"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
            <li onClick={() => setNotlogin(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M6 9.96004C9.63 7.15004 14.37 7.15004 18 9.96004"
                  stroke={`${
                    currentRouteName === "/websites" ? "#1935CA" : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M7.59961 13.0501C10.2696 10.9901 13.7396 10.9901 16.4096 13.0501"
                  stroke={`${
                    currentRouteName === "/websites" ? "#1935CA" : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M9.7998 16.1399C11.1298 15.1099 12.8698 15.1099 14.1998 16.1399"
                  stroke={`${
                    currentRouteName === "/websites" ? "#1935CA" : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke={`${
                    currentRouteName === "/websites" ? "#1935CA" : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
              </svg>
            </li>
            <li onClick={() => setNotlogin(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke={`${
                    currentRouteName === "/settings" ? "#1935CA" : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                  stroke={`${
                    currentRouteName === "/settings" ? "#1935CA" : "#ACACAC"
                  }`}
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
              </svg>
            </li>
            <li onClick={() => setNotlogin(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group"
              >
                <path
                  d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
                  stroke="#ACACAC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M10.5 18H13.5C15.15 18 16.5 16.65 16.5 15V12C16.5 10.35 15.15 9 13.5 9H10.5C8.85 9 7.5 10.35 7.5 12V15C7.5 16.65 8.85 18 10.5 18Z"
                  stroke="#ACACAC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M12 9V18"
                  stroke="#ACACAC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M7.5 13.5H16.5"
                  stroke="#ACACAC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
              </svg>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
