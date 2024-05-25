// import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const AchievementGamification = () => {
  const location = useLocation();
  const currentRouteName = location.pathname;
  return (
    <div className='mt-6 w-full lg:w-3/5 bg-white rounded-lg p-5'>
      <div className='flex flex-row items-center justify-center gap-x-2'>
        <Link className={` ${currentRouteName === "/gamification/achievement" ? "bg-primaryColor text-white" : "bg-white text-primaryColor"} px-4 py-2 text-sm rounded-full border border-[#EDEDED]`} to="/gamification/achievement">Avatar</Link>
        <Link className={` ${currentRouteName === "/gamification/achievement/badge" ? "bg-primaryColor text-white" : "bg-white text-primaryColor"} px-4 py-2 text-sm rounded-full border border-[#EDEDED]`} to="/gamification/achievement/badge">Badges</Link>
        <Link className={` ${currentRouteName === "/gamification/achievement/rank" ? "bg-primaryColor text-white" : "bg-white text-primaryColor"} px-4 py-2 text-sm rounded-full border border-[#EDEDED]`} to="/gamification/achievement/rank">Rank</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default AchievementGamification