import SignUpSlider from "../components/SignUpSlider";
import logoImg from "../assets/cy1.svg";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import MobileHeader from "../components/MobileHeader";
import MobileMenu from "../components/MobileMenu";
// import { Store } from "../Store";

const AuthPage = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // const {state} = useContext(Store)
  // const {userInfo} = state;
  // const navigate = useNavigate()

  // useEffect(() => {
  //   if(userInfo){
  //     navigate("/")
  //   }
  // }, [userInfo])

  return (
    <>
    <MobileHeader setMobileOpen={setMobileOpen} />
    <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    <div className="flex flex-row text-center">
      <div className="md:flex flex-col hidden gap-9 w-[817px]">
        <SignUpSlider />
        <div className="signUpBg bg-contain flex flex-col gap-3 pl-12">
          <div className="flex flex-row gap-2 items-center">
            <img className="w-7 h-7" src={logoImg} alt="logo image" />
            <p className="font-bold text-primaryColor">Cyberverdict</p>
          </div>
          <p className="text-sm leading-5 tracking-wide w-[420px] text-left">
            Lorem ipsum dolor sit amet consectetur. Id sit urna in faucibus.
            Volutpat pellentesque vel id consequat laoreet id elit tortor. Diam
            tempor
          </p>
        </div>
      </div>
      <Outlet />
    </div>
    </>
  );
};

export default AuthPage;
