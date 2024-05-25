import Slider from "react-slick";
import Loader from "../../../components/Loader";
import VideoCard from "../../../components/videoComponents/VideoCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import PostCard from "../../../components/postComponents/PostCard";
import WebsiteCard from "../../../components/websiteComponents/WebsiteCard";
// import nothingFoundGif from "../../../assets/nothing found.gif";

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

const MyfeedsRoute = () => {
  const [videos, setVideos] = useState<any>(null);
  const [posts, setPosts] = useState<any>(null);
  const [sites, setSites] = useState<any>(null);

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
        const cachedData = sessionStorage.getItem("rssVideosDataFeeds");
        if (cachedData) {
          setVideos(JSON.parse(cachedData));
          console.log(cachedData)
        } else {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };

          const response = await axios.get(
            "https://cyberverdictbackend.onrender.com/api/feeds/videosData?page=1&limit=15",
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

  useEffect(() => {
    const getRssFeeds = async () => {
      try {
        // Check if data is available in localStorage
        const cachedData = sessionStorage.getItem("rssPostsDataFeeds");
        if (cachedData) {
          setPosts(JSON.parse(cachedData));
        } else {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const response = await axios.get(
            "https://cyberverdictbackend.onrender.com/api/feeds?page=1&limit=15",
            config
          );

          // Set the fetched data in localStorage
          sessionStorage.setItem(
            "rssPostsDataFeeds",
            JSON.stringify(response.data)
          );

          setPosts(response.data);
        }
      } catch (error: any) {
        toast.error(error.response?.data || "Error fetching data");
      }
    };

    getRssFeeds();
  }, []);

  useEffect(() => {
    const getSiteDetails = async () => {
      try {
        const cachedData = sessionStorage.getItem("rssWebsitesDataFeeds");
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
            "rssWebsitesDataFeeds",
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
    <div className="max-h-[550px] scroll-smooth pr-2 lg:pr-3 pb-5 overflow-y-auto">
      <div className="mt-5 w-full">
        {!videos ? (
          <Loader />
        ) : (
          <Slider
            className=" gap-y-7 gap-x-3 flex-wrap lg:flex-row lg:justify-between"
            // className="flex flex-wrap lg:flex-row lg:justify-between gap-x-3"
            {...settings}
          >
            {videos.map((video: any) => (
              <VideoCard
                key={video.title}
                content={video.content}
                title={video.title}
                image={video.image}
                video={video.video}
                pubDate={video.pubDate}
                contentSnippet={video.contentSnippet}
              />
            ))}
          </Slider>
        )}
      </div>
      <div className="mt-7 w-full">
        <div className="w-full">
          <div className="flex w-full flex-row justify-between">
            <p className="text-lg font-semibold">Posts</p>
            <Link
              to="/posts"
              className="text-lg text-primaryColor font-semibold"
            >
              See all
            </Link>
          </div>
          <div className="mt-5 w-full flex-wrap justify-between flex flex-row gap-y-7">
            {!posts ? (
              <Loader />
            ) : (
              posts
                .slice(0, 3)
                .map((post: any) => (
                  <PostCard
                    key={post.title}
                    title={post.title}
                    image={post.image}
                    pubDate={post.pubDate}
                    contentSnippet={post.contentSnippet}
                  />
                ))
            )}
          </div>
        </div>
      </div>
      <div className="mt-7 w-full">
        <div className="w-full">
          <div className="flex w-full flex-row justify-between">
            <p className="text-lg font-semibold">Websites</p>
            <Link
              to="/websites"
              className="text-lg text-primaryColor font-semibold"
            >
              See all
            </Link>
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
      </div>
    </div>
  );
};

export default MyfeedsRoute;
