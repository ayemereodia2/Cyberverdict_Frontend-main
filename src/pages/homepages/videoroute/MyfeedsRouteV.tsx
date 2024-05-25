import { useEffect, useState } from "react";
import Loader from "../../../components/Loader";
import VideoCard from "../../../components/videoComponents/VideoCard";
import axios from "axios";
import { toast } from "react-toastify";

const MyfeedsRouteV = () => {
  const [videos, setVideos] = useState<any>(null);

  useEffect(() => {
    const getRssFeeds = async () => {
      try {
        // Check if data is available in localStorage
        const cachedData = sessionStorage.getItem("rssVideosDataFeeds");
        if (cachedData) {
          setVideos(JSON.parse(cachedData));
          console.log(videos);
        } else {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const response = await axios.get(
            "https://cyberverdictbackend.onrender.com/api/feeds/videosData",
            config
          );

          // Set the fetched data in localStorage
          sessionStorage.setItem(
            "rssVideosDataFeeds",
            JSON.stringify(response.data)
          );

          setVideos(response.data);
          console.log(videos);
        }
      } catch (error: any) {
        toast.error(error.response?.data || "Error fetching data");
      }
    };

    getRssFeeds();
  }, []);

  return (
    <div
      className="flex mt-5 gap-y-7  w-full
     flex-wrap flex-row justify-between
      max-h-[550px] lg:pr-3 pb-5 overflow-y-auto"
    >
      <div className="flex gap-y-7 w-full flex-wrap lg:flex-row lg:justify-between">
        {!videos ? (
          <Loader />
        ) : (
          videos.map((video: any) => (
            <VideoCard
              key={video.title}
              content={video.content}
              title={video.title}
              image={video.image}
              video={video.video}
              pubDate={video.pubDate}
              contentSnippet={video.contentSnippet}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MyfeedsRouteV;
