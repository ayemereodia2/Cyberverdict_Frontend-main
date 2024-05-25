import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../Loader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        borderRadius: "50%",
        outline: "none",
        background: "#1935CA",
        position: "absolute",
        right: "10px",
        width: "20px",
        height: "20px",
        zIndex: "30",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        borderRadius: "50%",
        outline: "none",
        background: "#1935CA",
        position: "absolute",
        left: "10px",
        width: "20px",
        height: "20px",
        zIndex: "30",
      }}
      onClick={onClick}
    />
  );
}

const VideoContainer = () => {
  const [videos, setVideos] = useState<any>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false,
    swipeToSlide: true,
    // adaptiveHeight:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const getRssFeeds = async () => {
      try {
        // Check if data is available in localStorage
        const cachedData = sessionStorage.getItem("rssVideosData");
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
            "rssVideosData",
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
    <Slider
      className="flex gap-y-7 gap-x-3 flex-wrap lg:flex-row lg:justify-between"
      {...settings}
    >
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
    </Slider>
  );
};

export default VideoContainer;
