// import websiteImg1 from "./websiteAssets/management.png";
// import websiteImg2 from "./websiteAssets/gallup.png";
import WebsiteCard from "./WebsiteCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../Loader";
import { Link } from "react-router-dom";

const WebsiteContainer = () => {
  const [sites, setSites] = useState<any>(null);

  useEffect(() => {
    const getSiteDetails = async () => {
      try {
        const cachedData = sessionStorage.getItem("rssWebsitesData");
        if (cachedData) {
          setSites(JSON.parse(cachedData));
          console.log(sites);
        } else {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };

          const response = await axios.get(
            "https://cyberverdictbackend.onrender.com/api/feeds/siteDetails",
            config
          );

          // Set the fetched data in localStorage
          sessionStorage.setItem(
            "rssWebsitesData",
            JSON.stringify(response.data)
          );
          console.log(response.data);
          setSites(response.data);
        }
      } catch (error: any) {
        toast.error(error.response?.data || "Error fetching data");
      }
    };
    getSiteDetails();
  }, []);
  return (
    <div className="w-full">
      <div className="flex w-full flex-row justify-between">
        <p className="text-lg font-semibold">Websites</p>
        <Link to="/websites" className="text-lg text-primaryColor font-semibold">See all</Link>
      </div>
      <div className="mt-5 w-full justify-between flex-wrap flex flex-row gap-y-7">
        {/* <WebsiteCard
          websiteImg={websiteImg1}
          websiteTopic="Management blog"
          websiteLink="Managementblog.org"
        />
        <WebsiteCard
          websiteImg={websiteImg2}
          websiteTopic="The Gallup Workplace..."
          websiteLink="The Gallup Workplace Blog"
        /> */}
        {!sites ? (
          <Loader />
        ) : (
          sites
            .slice(0, 2)
            .map((site: any) => (
              <WebsiteCard
                key={site.title}
                title={site.title}
                siteLink={site.siteLink}
                category={site.category}
                description={site.description}
                image={site.image}

              />
            ))
        )}
      </div>
    </div>
  );
};

export default WebsiteContainer;
