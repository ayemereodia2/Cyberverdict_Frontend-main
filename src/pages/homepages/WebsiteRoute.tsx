import websiteimg from "../../assets/websitetag.svg";
import websiteimgbg from "../../assets/websiteimg1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TechSection from "../../components/websiteComponents/TechSection";
import IndustriesSection from "../../components/websiteComponents/EntertainmentSection";
import SportSection from "../../components/websiteComponents/SportSection";

const WebsiteRoute = () => {
  return (
    <div className="bg-homeBg pb-5 mt-7 lg:px-28 text-[#101010]">
      <div className="text-lg font-semibold">
        Keep track of your favourite websites
      </div>
      <div className="mt-5 flex flex-row gap-5 w-full border-b border-[#E7E0EC] ">
        <div
          className={`h-full cursor-pointer border-b-2 w-auto px-4 py-3 flex flex-row items-center gap-2 border-[#6750A4]`}
        >
          <span>
            <img className="w-5 h-5" src={websiteimg} alt="my feeds img" />
          </span>
          <span className="text-sm font-medium">Websites</span>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${websiteimgbg})` }}
        className="w-full bg-cover bg-no-repeat h-[270px] px-[25px] mt-5 rounded-lg overflow-hidden"
      >
        <div className="bg-[rgba(0,0,0,0.15)] mt-44 lg:mt-48 overflow-hidden h-[86px] lg:h-16 backdrop-blur-[33px] rounded-[10px] p-2.5">
          <p className="text-xs text-white font-semibold">BUSINESS</p>
          <p className="text-white font-normal mt-1">
            Explore the world of business by keeping track of your favorite
            websites
          </p>
        </div>
      </div>
      <div className="w-full">
        <TechSection />
        <IndustriesSection />
        <SportSection />
      </div>
    </div>
  );
};

export default WebsiteRoute;
