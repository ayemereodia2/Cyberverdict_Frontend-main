import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import PostCard from "../../components/postComponents/PostCard";
import Loader from "../../components/Loader";
import axios from "axios";
import { toast } from "react-toastify";

const WebsitePostsPage = () => {

  const [posts, setPosts] = useState<any>(null);

  useEffect(() => {
    const getRssFeeds = async () => {
      try {
        // Check if data is available in localStorage
        const cachedData = sessionStorage.getItem(`allPosts`);
        if (cachedData) {
          setPosts(JSON.parse(cachedData));
        } else {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const response = await axios.get(
            `https://cyberverdictbackend.onrender.com/api/feeds/getAllPosts`,
            config
          );

          // Set the fetched data in localStorage
          sessionStorage.setItem(`allPosts`, JSON.stringify(response.data));

          setPosts(response.data);
        }
      } catch (error: any) {
        toast.error(error.response?.data || "Error fetching data");
      }
    };

    getRssFeeds();
  }, []);

  return (
    <div className="bg-homeBg lg:px-28 lg:py-7 mt-5 pt-[2rem]">
      <div className="text-lg font-semibold">
        Keep track of your favourite posts
      </div>
      <div className="mt-5 flex flex-row flex-wrap justify-between gap-5 w-full lg:w-3/5 border-b border-[#E7E0EC] ">
        <div
          className={`h-full cursor-pointer border-b-2 w-auto border-[#6750A4]
            flex px-2 lg:px-4 py-3 flex-row items-center gap-2`}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 9.96004C9.63 7.15004 14.37 7.15004 18 9.96004"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.59961 13.0499C10.2696 10.9899 13.7396 10.9899 16.4096 13.0499"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.7998 16.1402C11.1298 15.1102 12.8698 15.1102 14.1998 16.1402"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className="text-sm font-medium">Posts</span>
        </div>
      </div><div className="mt-5 w-full flex-wrap justify-between flex flex-row gap-y-7">
        {!posts ? (
          <Loader />
        ) : (
          posts.map((post: any) => (
            <PostCard
              key={post.title}
              title={post.title}
              image={post.image}
              pubDate={post.pubDate}
              contentSnippet={post.contentSnippet}
            />
          ))
        )}
      </div><div></div>
    </div>
  );
};

export default WebsitePostsPage;
