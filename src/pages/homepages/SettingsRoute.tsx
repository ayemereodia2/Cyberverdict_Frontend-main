import image1 from "../../assets/settingsAssets/Group 33567.svg";
import profileImage from "../../assets/settingsAssets/profile.svg"
import infoImage from "../../assets/settingsAssets/info-circle.svg"
import notifImage from "../../assets/settingsAssets/notification-bing.svg"
import manageFeedsImage from "../../assets/settingsAssets/import.svg"
import aboutImage from "../../assets/settingsAssets/document-sketch.svg"
import termsImage from "../../assets/settingsAssets/document-text.svg"
import privacyImage from "../../assets/settingsAssets/document.svg"
import { useNavigate } from "react-router-dom";

const SettingsRoute = () => {
  const navigate = useNavigate()
  const navigateTo = (route: any) => {
    navigate(route)
  }
  return (
    <div className="px-2 mt-7 lg:px-56 bg-homeBg pb-5">
      <div className="bg-white pb-5 shadow-md rounded-lg">
        <div className="p-5">
          <p className="font-bold">Become a Pro Member</p>
        </div>
        <hr />
        <div className="flex flex-row px-2 lg:px-12 pt-4 lg:pt-12 justify-between">
          <img className="w-16 h-16 lg:w-40 lg:h-24" src={image1} alt="pro member" />
          <div>
            <p className="font-semibold">Premium Subscription</p>
            <p className="text-sm leading-6 mt-3 w-64 lg:w-96 text-[#49454F]">
              Enjoy benefits like access to exclusive content, ad-free browsing,
              early access to articles, and enhanced user experience.
            </p>
          </div>
        </div>
        <div className="flex w-full justify-end">
        <p className="font-semibold text-[#1935CA] pr-12 cursor-pointer">
          Subscribe
        </p>
        </div>
      </div>
      <div className="flex gap-y-4 lg:gap-y-7 w-full lg:flex-wrap flex-col lg:flex-row justify-between mt-5 lg:mt-10">
        <div onClick={() => navigateTo("/profileSettings")} className="bg-white rounded-lg cursor-pointer shadow-md basis-[48.5%] flex flex-row p-4 items-center gap-x-3">
          <img className="w-5 h-5" src={profileImage} alt="profile" />
          <div>
            <p className="text-sm font-semibold">Profile Settings</p>
            <p className="text-xs text-[#49454F] leading-5">Personal info & social features</p>
          </div>
          <img className="w-5 h-5 ml-auto" src={infoImage} alt="info image" />
        </div>
        <div onClick={() => navigateTo("/notificationSettings")} className="bg-white rounded-lg cursor-pointer shadow-md basis-[48.5%] flex flex-row p-4 items-center gap-x-3">
          <img className="w-5 h-5" src={notifImage} alt="notifications" />
          <div>
            <p className="text-sm font-semibold">Notification</p>
            <p className="text-xs text-[#49454F] leading-5">Control which notification to receive</p>
          </div>
        </div>
        <div onClick={() => navigateTo("/manageFeeds")} className="bg-white cursor-pointer rounded-lg shadow-md basis-[48.5%] flex flex-row p-4 items-center gap-x-3">
          <img className="w-5 h-5" src={manageFeedsImage} alt="manage feeds" />
          <div>
            <p className="text-sm font-semibold">Manage Feeds</p>
            <p className="text-xs text-[#49454F] leading-5">Change your feeds</p>
          </div>
        </div>
        <div onClick={() => navigateTo("/aboutUs")} className="bg-white cursor-pointer rounded-lg shadow-md basis-[48.5%] flex flex-row p-4 items-center gap-x-3">
          <img className="w-5 h-5" src={aboutImage} alt="about us" />
          <div>
            <p className="text-sm font-semibold">About us</p>
            <p className="text-xs text-[#49454F] leading-5">Know more about Cyberverdict</p>
          </div>
        </div>
        <div onClick={() => navigateTo("/termsCondition")} className="bg-white cursor-pointer rounded-lg shadow-md basis-[48.5%] flex flex-row p-4 items-center gap-x-3">
          <img className="w-5 h-5" src={termsImage} alt="terms and conditions" />
          <div>
            <p className="text-sm font-semibold">Terms & Conditions</p>
            <p className="text-xs text-[#49454F] leading-5">Rules of the road: Understanding Cyberverdict</p>
          </div>
        </div>
        <div onClick={() => navigateTo("/privacyPolicy")} className="bg-white cursor-pointer rounded-lg shadow-md basis-[48.5%] flex flex-row p-4 items-center gap-x-3">
          <img className="w-5 h-5" src={privacyImage} alt="privacy policy" />
          <div>
            <p className="text-sm font-semibold">Privacy Policy</p>
            <p className="text-xs text-[#49454F] leading-5">Our privacy guidelines</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsRoute;
