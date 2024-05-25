import { useEffect, useState } from "react";
import PostCard from "./PostCard";
// import logoOne from "./postAssets/linkedinLogo.png";
// import logoTwo from "./postAssets/secondLogo.png";
// import logoThree from "./postAssets/thirdLogo.png";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../Loader";
import { Link } from "react-router-dom";

const PostContainer = () => {
  const [posts, setPosts] = useState<any>(null);

  useEffect(() => {
    const getRssFeeds = async () => {
      try {
        // Check if data is available in localStorage
        const cachedData = sessionStorage.getItem("rssPostsData");
        if (cachedData) {
          setPosts(JSON.parse(cachedData));
        } else {
          const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
          const response = await axios.get(
            "https://cyberverdictbackend.onrender.com/api/feeds",
            config
          );

          // Set the fetched data in localStorage
          sessionStorage.setItem("rssPostsData", JSON.stringify(response.data));

          setPosts(response.data);
        }
      } catch (error: any) {
        toast.error(error.response?.data || "Error fetching data");
      }
    };

    getRssFeeds();
  }, []);

  return (
    <div className="w-full">
      <div className="flex w-full flex-row justify-between">
        <p className="text-lg font-semibold">Posts</p>
        <Link to="/posts" className="text-lg text-primaryColor font-semibold">See all</Link>
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
  );
};

export default PostContainer;
