import React from 'react'
import { IoIosMenu } from 'react-icons/io'
import logoSvg from "../assets/cy1.svg";

interface MobileMenuProps {
    setMobileOpen: any;
  }

const MobileHeader:React.FC<MobileMenuProps> = ({setMobileOpen}) => {
  return (
    <div className="flex lg:hidden shadow-lg w-full sticky justify-between items-center top-0 z-10 p-5 bg-white">
        <div className=" flex flex-row items-center gap-2.5">
          <img className="w-[35px] h-[35px]" src={logoSvg} alt="logo svg" />
          <p className="text-lg logoFont font-extrabold text-left text-primaryColor">
            Cyberverdict
          </p>
        </div>
        <IoIosMenu
          onClick={() => setMobileOpen(true)}
          className="text-[32px]"
        />
      </div>
  )
}

export default MobileHeader