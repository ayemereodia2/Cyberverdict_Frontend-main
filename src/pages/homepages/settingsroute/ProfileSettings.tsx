import { useContext, useState } from "react";
import image1 from "../../../assets/settingsAssets/Group 33567.svg";
import { Store } from "../../../Store";
import CompleteProfile from "../../../components/CompleteProfile";
import ChangePasswordComp from "../../../components/settingsComponents/ChangePasswordComp";
import EditProfileComp from "../../../components/settingsComponents/EditProfileComp";

const ProfileSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPass, setIsOpenPass] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const { state } = useContext(Store);
  const { userInfo } = state;
  return (
    <div className="px-2 pb-5 mt-7 rounded-lg lg:px-56 bg-homeBg">
      <div className="bg-white rounded-lg pb-5 shadow-md">
        <div className="p-5">
          <p className="font-bold">Add to your profile and earn 100 coins</p>
        </div>
        <hr />
        <div className="flex flex-row px-2 lg:px-12 pt-4 lg:pt-12 justify-between">
          <img
            className="w-16 h-16 lg:w-40 lg:h-24"
            src={image1}
            alt="pro member"
          />
          <div>
            <p className="font-semibold text-sm">Add to your profile</p>
            <p className="text-xs leading-6 mt-3 w-64 lg:w-96 text-[#49454F]">
              Enjoy benefits like access to detailed gamification profile, free
              100 coins,discount on subscription when you add to your profile.
            </p>
          </div>
        </div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex w-full justify-end"
        >
          <p className="font-semibold text-[#1935CA] text-sm pr-12 cursor-pointer">
            Complete Profile
          </p>
        </div>
        <CompleteProfile isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="mt-10 p-5 rounded-lg flex flex-col lg:flex-row items-start lg:items-center gap-y-5 justify-between bg-white shadow-md">
        <div className="flex flex-row items-center gap-x-5">
          <div className="flex flex-col gap-y-2">
            <p className="text-[#A09D9D] text-xs">Name</p>
            <p className="text-sm">{userInfo ? userInfo.name : ""}</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-[#A09D9D] text-xs">Email</p>
            <p className="text-sm">{userInfo ? userInfo.email : ""}</p>
          </div>
        </div>
        <div className="text-sm flex flex-row items-center gap-x-5">
          <div
            onClick={() => {
              setIsOpenPass(!isOpenPass);
            }}
            className="text-primaryColor cursor-pointer"
          >
            Change Password
          </div>
          <div 
          onClick={() => {
            setIsOpenEdit(!isOpenEdit);
          }}
          className="px-4 py-2 cursor-pointer text-white rounded-full bg-primaryColor">
            Edit Profile
          </div>
        </div>
      </div>
      <ChangePasswordComp isOpen={isOpenPass} setIsOpen={setIsOpenPass} />
      <EditProfileComp isOpen={isOpenEdit} setIsOpen={setIsOpenEdit} />
    </div>
  );
};

export default ProfileSettings;
