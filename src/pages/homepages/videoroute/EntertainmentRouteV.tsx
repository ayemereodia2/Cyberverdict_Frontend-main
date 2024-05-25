// import VideoCard from '../../../components/videoComponents/VideoCard'
import { useState, useEffect } from "react";
import Loader from "../../../components/Loader";
import VideoCard from "../../../components/videoComponents/VideoCard";
import axios from "axios";
import { toast } from "react-toastify";

const TechRouteV = () => {
  const [videos, setVideos] = useState<any>(null);

  useEffect(() => {
    const getRelatedVideos = async () => {
      const cachedData = sessionStorage.getItem("rssVideosDataEntertainment");
      if (cachedData) {
        setVideos(JSON.parse(cachedData));
      } else {
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const response = await axios.get(
            `https://cyberverdictbackend.onrender.com/api/feeds/relatedVideos/entertainment`,
            config
          );
          sessionStorage.setItem('rssVideosDataEntertainment', JSON.stringify(response.data));
          console.log(response.data);
          setVideos(response.data);
        } catch (error: any) {
          toast.error(error.response.data);
        }
      }
    };

    getRelatedVideos();
  }, []); // Include post in the dependency array

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

export default TechRouteV;
