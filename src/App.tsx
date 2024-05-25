import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomeRoute from "./pages/homepages/HomeRoute";
import SingleVideoPage from "./components/videoComponents/SingleVideoPage";
import SinglePostPage from "./components/postComponents/SinglePostPage";
import PreferencePage from "./pages/PreferencePage";
import AuthPage from "./pages/AuthPage";
import PersonalizeScreen from "./pages/PersonalizeScreen";
import TailorExperience from "./pages/TailorExperience";
import AccountCreated from "./pages/AccountCreated";
import AuthFacebook from "./pages/AuthFacebook";
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthGoogle from "./pages/AuthGoogle";
import MyfeedsRoute from "./pages/homepages/homeroutes/MyfeedsRoute";
import DiscoverRoute from "./pages/homepages/homeroutes/DiscoverRoute";
import TechRoute from "./pages/homepages/homeroutes/TechRoute";
import EntertainmentRoute from "./pages/homepages/homeroutes/EntertainmentRoute";
import VideoRoute from "./pages/homepages/VideoRoute";
import WebsiteRoute from "./pages/homepages/WebsiteRoute";
import SettingsRoute from "./pages/homepages/SettingsRoute";
import DashboardRoute from "./pages/homepages/DashboardRoute";
import MyfeedsRouteV from "./pages/homepages/videoroute/MyfeedsRouteV";
import DiscoverRouteV from "./pages/homepages/videoroute/DiscoverRouteV";
import TechRouteV from "./pages/homepages/videoroute/TechRouteV";
import EntertainmentRouteV from "./pages/homepages/videoroute/EntertainmentRouteV";
// import { useEffect } from "react";
import GamificationPage from "./pages/homepages/GamificationPage";
import ProfileSettings from "./pages/homepages/settingsroute/ProfileSettings";
import NotificationSettings from "./pages/homepages/settingsroute/NotificationSettings";
import FeedsSettings from "./pages/homepages/settingsroute/FeedsSettings";
import AboutSettings from "./pages/homepages/settingsroute/AboutSettings";
import TermsSettings from "./pages/homepages/settingsroute/TermsSettings";
import PrivacySettings from "./pages/homepages/settingsroute/PrivacySettings";
import ReportGamification from "./pages/homepages/gamificationroutes/ReportGamification";
import InstructionGamification from "./pages/homepages/gamificationroutes/InstructionGamification";
import AchievementGamification from "./pages/homepages/gamificationroutes/AchievementGamification";
import AvatarComp from "./pages/homepages/gamificationroutes/AvatarComp";
import RankComp from "./pages/homepages/gamificationroutes/RankComp";
import BadgeComp from "./pages/homepages/gamificationroutes/BadgeComp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import WebsitePostsPage from "./components/websiteComponents/WebsitePostsPage";
import MobileProfile from "./components/MobileProfile";
import AllPostsPage from "./pages/homepages/AllPostsPage";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   localStorage.clear()
  // })
  
  const location = useLocation();
  return (
    <main>
      <ToastContainer
          position="top-center"
          autoClose={10000}
          theme="colored"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={1}
        ></ToastContainer>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}>
          <Route path="" element={<HomeRoute />}>
            <Route path="" element={<MyfeedsRoute />} />
            <Route path="discover" element={<DiscoverRoute />} />
            <Route path="tech" element={<TechRoute />} />
            <Route path="entertainment" element={<EntertainmentRoute />} />
          </Route>
          <Route path="videos" element={<VideoRoute />} >
            <Route path="" element={<MyfeedsRouteV />} />
            <Route path="discover" element={<DiscoverRouteV />} />
            <Route path="tech" element={<TechRouteV />} />
            <Route path="entertainment" element={<EntertainmentRouteV />} />
          </Route>
          <Route path="websites" element={<WebsiteRoute />}></Route>
          <Route path="posts" element={<AllPostsPage />}></Route>
          <Route path="settings" element={<SettingsRoute />}></Route>
          <Route path="dashboard" element={<DashboardRoute />}></Route>
          <Route path="video/:title" element={<SingleVideoPage />} />
          <Route path="post/:title" element={<SinglePostPage />} />
          <Route path="website/:title" element={<WebsitePostsPage />} />
          <Route path="profileSettings" element={<ProfileSettings />} />
          <Route path="notificationSettings" element={<NotificationSettings />} />
          <Route path="manageFeeds" element={<FeedsSettings />} />
          <Route path="aboutUs" element={<AboutSettings />} />
          <Route path="termsCondition" element={<TermsSettings />} />
          <Route path="privacyPolicy" element={<PrivacySettings />} />
          <Route path="gamification" element={<GamificationPage />}>
            <Route path="" element={<ReportGamification />} />
            <Route path="instruction" element={<InstructionGamification />} />
            <Route path="achievement" element={<AchievementGamification />}>
              <Route path="" element={<AvatarComp />} />
              <Route path="badge" element={<BadgeComp />} />
              <Route path="rank" element={<RankComp />} />
            </Route>
          </Route>
          <Route path="/mobileProfile" element={<MobileProfile />} />
        </Route>
        <Route path="/authpage" element={<AuthPage />}>
          <Route index path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="preference" element={<PreferencePage />} />
          <Route path="personalize" element={<PersonalizeScreen />} />
          <Route path="tailorexperience" element={<TailorExperience />} />
          <Route path="accountcreated" element={<AccountCreated />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="facebook" element={<AuthFacebook />} />
          <Route path="google" element={<AuthGoogle />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
