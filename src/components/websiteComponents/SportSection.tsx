import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from '../Loader'
import WebsiteCard from './WebsiteCard'

const SportSection = () => {
  const [sites, setSites] = useState<any>(null);

  useEffect(() => {
    const getSiteDetails = async () => {
      try {
        const cachedData = sessionStorage.getItem(`sitesSport`);
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
            "https://cyberverdictbackend.onrender.com/api/feeds/getSites/sport",
            config
          );

          // Set the fetched data in localStorage
          sessionStorage.setItem(
            "sitesSport",
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
    <div className='w-full mt-7'>
        <p className='text-lg font-semibold'>Sport</p>
        <div className='mt-5 w-full flex-wrap justify-between flex flex-row gap-y-7'>
        <div className="w-full justify-between flex-wrap flex flex-row gap-y-7">
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
    </div>
  )
}

export default SportSection