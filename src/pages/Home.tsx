import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import NotLogin from "../components/NotLogin";
import { Outlet } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import MobileHeader from "../components/MobileHeader";
import CreateDashboard from "../components/CreateDashboard";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

const Home = () => {
  const [notlogin, setNotlogin] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false)
  // const navigate = useNavigate()

  // useEffect(() => {
  //   navigate("/overview")
  // }, [])


  return (
    <div className="bg-homeBg">
      <NotLogin notlogin={notlogin} setNotlogin={setNotlogin} />
      <CreateDashboard dashboardOpen={dashboardOpen} setDashboardOpen={setDashboardOpen} />
      <MobileHeader setMobileOpen={setMobileOpen} />
      <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Header />
      <Sidebar setNotlogin={setNotlogin} setDashboardOpen={setDashboardOpen} />
      <div className="lg:pt-[69px] px-[1rem] lg:pl-[91px]">
        <Outlet context={[mobileOpen, setMobileOpen]} />
      </div>
    </div>
  );
};

export default Home;
