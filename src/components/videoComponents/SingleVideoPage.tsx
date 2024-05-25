import VideoCard from "./VideoCard";
import { toast } from "react-toastify";
import axios from "axios";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { Store } from "../../Store";
import { MyLoader2 } from "../ButtonLoader";
import CommentComp from "../CommentComp";
import ShareModal from "../ShareModal";
import ReactPlayer from 'react-player';

const SingleVideoPage = () => {
  const params = useParams();
  const { title } = params;

  const [video, setVideo] = useState<any>(null);

  const [relatedVideos, setRelatedVideos] = useState<any>(null);

  const [commentText, setCommentText] = useState("");

  const [isFocusedComment, setIsFocusedComment] = useState(false);

  const [comments, setComments] = useState<any>(null);

  const { state } = useContext(Store);
  const { userInfo } = state;

  const [commentsLoading, setCommentsLoading] = useState(false);

  const [slicedComments, setSlicedComments] = useState(-6);

  const [shareOpen, setShareOpen] = useState(false);
  const handleShareOpen = () => setShareOpen(true);
  const handleShareClose = () => setShareOpen(false);

  const [saved, setSaved] = useState(false);

  const shareUrl = window.location.href;

  useLayoutEffect(() => {
    const getRssFeeds = async () => {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const response = await axios.get(
          `https://cyberverdictbackend.onrender.com/api/feeds/video/${title}`,
          config
        );
        console.log(response.data);
        setVideo(response.data);
        console.log(video);
      } catch (error: any) {
        toast.error(error.response.data);
      }
    };
    getRssFeeds();
  }, []);

  useEffect(() => {
    const getRelatedVideos = async () => {
      try {
        if (!video) {
          return;
        }

        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const response = await axios.get(
          `https://cyberverdictbackend.onrender.com/api/feeds/relatedVideos/${video.category}`,
          config
        );
        console.log(response.data);
        setRelatedVideos(response.data);
      } catch (error: any) {
        toast.error(error.response.data);
      }
    };

    getRelatedVideos();
  }, [video]); // Include post in the dependency array

  useEffect(() => {
    const getComments = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await axios.get(
          `https://cyberverdictbackend.onrender.com/api/comments/getComments/${title}`,
          config
        );
        setComments(response.data);
      } catch (error: any) {
        toast.error(error.response.data);
      }
    };
    getComments();
  }, []);

  const addComment = async () => {
    setCommentsLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        "https://cyberverdictbackend.onrender.com/api/comments/addComment",
        {
          name: userInfo?.name,
          comment: commentText,
          title: title,
        },
        config
      );
      const response = await axios.get(
        `https://cyberverdictbackend.onrender.com/api/comments/getComments/${title}`,
        config
      );
      setCommentsLoading(false);
      setComments(response.data);
      setCommentText("");
    } catch (error: any) {
      toast.error(error.response.data);
      setCommentsLoading(false);
    }
    // setCommentsLoading(false)
  };

  useEffect(() => {
    if (video) {
      const checkVideoSaved = async () => {
        try {
          const response = await axios.get(
            "https://cyberverdictbackend.onrender.com/api/feeds/checkSavedVideo",
            {
              params: {
                title: video.title,
                userId: userInfo?._id,
              },
            }
          );
          console.log(response.data.message);
          if (response.data.message === "saved video") {
            setSaved(true);
          }
          console.log(saved);
        } catch (error) {
          console.log(error);
        }
      };
      checkVideoSaved();
    }
  }, [video, userInfo?._id]);

  const saveVideo = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(
        "https://cyberverdictbackend.onrender.com/api/feeds/saveVideo",
        {
          title: video.title,
          userId: userInfo?._id,
        },
        config
      );
      toast.success(response.data.message);
      if (response.data.message === "Video saved successfully") {
        setSaved(true);
      } else if (response.data.message === "Video unsaved successfully") {
        setSaved(false);
      }
      console.log(saved);
    } catch (error: any) {
      toast.error(error.response.data);
      console.log(error);
    }
  };

  const calculateTimeAgo = (pubDate: any) => {
    const currentDate: any = new Date();
    const publicationDate: any = new Date(pubDate);

    const timeDifference = currentDate - publicationDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const dayText = days > 1 ? "days" : "day";

    if (seconds < 60) {
      return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
    } else if (minutes < 60) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (hours < 24) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else {
      // You can add additional logic for days, weeks, etc. if needed
      return `${days} ${dayText} ago`;
    }
  };

  const addPreviousComment = () => {
    setSlicedComments(slicedComments - 1);
  };

  const seeAllComments = () => {
    setSlicedComments(-comments.length);
  };

  return !video ? (
    <Loader />
  ) : (
    <div className="bg-homeBg lg:pl-56 py-7 mt-5">
      <div className="bg-white w-full lg:w-3/4 p-4 lg:p-7">
        <div className="w-full flex justify-center">
          <div className="w-[640px]">
            <p className="text-primaryColor text-center font-semibold text-lg leading-9">
              VIDEO
            </p>
            <p className="lg:text-3xl text-2xl text-center lg:w-[640px] font-bold leading-8 lg:leading-10">
              {video.title}
            </p>
          </div>
        </div>
        {/* <iframe
          src={video.video}
          className="w-full h-52 lg:h-[360px] mt-5"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
        <ReactPlayer
        url={video.video}
        className="mt-5"
        controls // Show player controls
        width="100%" // Set player width
        height="360px" // Set player height (auto adjusts based on aspect ratio)
      />
        <div className="flex flex-row gap-6 mt-5 items-center">
          <p className="tracking-wide text-sm">
            <span className="text-[#A09D9D]">
              {calculateTimeAgo(video.pubDate)} -{" "}
            </span>
            <span className="text-primaryColor">{video.creator}</span>
          </p>
          <div className="flex gap-2.5">
            <span onClick={saveVideo} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="group"
              >
                <path
                  d="M2.47469 17.0623C2.20469 17.0623 1.94218 16.9949 1.71718 16.8599C1.21468 16.5674 0.929688 15.9823 0.929688 15.2548V6.73486C0.929688 5.13736 2.22718 3.83984 3.82468 3.83984H9.6597C11.2572 3.83984 12.5547 5.13736 12.5547 6.73486V15.2548C12.5547 15.9823 12.2697 16.5599 11.7672 16.8599C11.2647 17.1524 10.6197 17.1223 9.98219 16.7698L7.0347 15.1274C6.8922 15.0449 6.59218 15.0449 6.44968 15.1274L3.50218 16.7698C3.15718 16.9648 2.80469 17.0623 2.47469 17.0623ZM3.83218 4.97235C2.85718 4.97235 2.06219 5.76734 2.06219 6.74234V15.2624C2.06219 15.5699 2.15219 15.8098 2.29469 15.8923C2.43719 15.9748 2.6922 15.9373 2.9622 15.7873L5.9097 14.1448C6.3897 13.8823 7.10969 13.8823 7.58969 14.1448L10.5372 15.7873C10.8072 15.9373 11.0547 15.9748 11.2047 15.8923C11.3472 15.8098 11.4372 15.5699 11.4372 15.2624V6.74234C11.4372 5.76734 10.6422 4.97235 9.66721 4.97235H3.83218Z"
                  fill="#111111"
                  className={`${
                    saved && "stroke-[#1935CA]"
                  } group-hover:stroke-[#1935CA] duration-300`}
                />
                <path
                  d="M11.0175 17.063C10.6875 17.063 10.3425 16.9655 9.99001 16.778L7.04251 15.1355C6.90001 15.0605 6.59248 15.0605 6.44998 15.1355L3.50999 16.778C2.87249 17.1305 2.21999 17.1605 1.72499 16.868C1.22249 16.5755 0.9375 15.9904 0.9375 15.2704V6.75046C0.9375 5.15296 2.23499 3.85547 3.83249 3.85547H9.66751C11.265 3.85547 12.5625 5.15296 12.5625 6.75046V15.2704C12.5625 15.9904 12.2775 16.5755 11.775 16.868C11.55 16.9955 11.295 17.063 11.0175 17.063ZM6.75 13.9505C7.05 13.9505 7.3425 14.018 7.59 14.153L10.5375 15.7955C10.8075 15.9455 11.0625 15.983 11.205 15.893C11.3475 15.8105 11.4375 15.5705 11.4375 15.263V6.74295C11.4375 5.76795 10.6425 4.97296 9.66751 4.97296H3.83249C2.85749 4.97296 2.0625 5.76795 2.0625 6.74295V15.263C2.0625 15.5705 2.1525 15.8105 2.295 15.893C2.4375 15.9755 2.69251 15.9379 2.96251 15.7879L5.91 14.1454C6.15 14.0179 6.45 13.9505 6.75 13.9505Z"
                  fill="#111111"
                  className={`${
                    saved && "stroke-[#1935CA]"
                  } group-hover:stroke-[#1935CA] duration-300`}
                />
                <path
                  d="M15.5175 14.1528C15.1875 14.1528 14.8425 14.0553 14.49 13.8678L11.7225 12.3228C11.5425 12.2253 11.4375 12.0378 11.4375 11.8353V6.75031C11.4375 5.77531 10.6425 4.98032 9.66751 4.98032H6C5.6925 4.98032 5.4375 4.72532 5.4375 4.41782V3.8403C5.4375 2.2428 6.73499 0.945312 8.33249 0.945312H14.1675C15.765 0.945312 17.0625 2.2428 17.0625 3.8403V12.3603C17.0625 13.0803 16.7775 13.6653 16.275 13.9578C16.05 14.0853 15.795 14.1528 15.5175 14.1528ZM12.5625 11.4978L15.0375 12.8853C15.3075 13.0353 15.555 13.0728 15.705 12.9828C15.855 12.8928 15.9375 12.6603 15.9375 12.3528V3.83279C15.9375 2.85779 15.1425 2.06281 14.1675 2.06281H8.33249C7.35749 2.06281 6.5625 2.85779 6.5625 3.83279V3.84781H9.66751C11.265 3.84781 12.5625 5.1453 12.5625 6.7428V11.4978Z"
                  fill="#111111"
                  className={`${
                    saved && "stroke-[#1935CA]"
                  } group-hover:stroke-[#1935CA] duration-300`}
                />
              </svg>
            </span>
            <span className="cursor-pointer" onClick={handleShareOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="group"
              >
                <path
                  d="M15.4642 9.80276C15.1792 9.80276 14.9392 9.58526 14.9017 9.30026C14.7217 7.60526 13.8067 6.06776 12.3967 5.09276C12.1417 4.91276 12.0817 4.56776 12.2542 4.31276C12.4342 4.05776 12.7867 3.99776 13.0342 4.17026C14.7142 5.33276 15.7942 7.16276 16.0117 9.18026C16.0417 9.48776 15.8242 9.76526 15.5092 9.80276C15.5017 9.80276 15.4792 9.80276 15.4642 9.80276Z"
                  fill="#111111"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M2.61792 9.84044C2.59542 9.84044 2.58042 9.84044 2.55792 9.84044C2.25042 9.80294 2.02542 9.52544 2.05542 9.21794C2.25792 7.20044 3.33042 5.37794 4.98792 4.20044C5.24292 4.02044 5.59542 4.08044 5.77542 4.33544C5.95542 4.59044 5.89542 4.94294 5.64042 5.12294C4.24542 6.10544 3.34542 7.64294 3.17292 9.33794C3.15042 9.62294 2.90292 9.84044 2.61792 9.84044Z"
                  fill="#111111"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M9.04497 16.9575C7.93497 16.9575 6.87747 16.7025 5.88747 16.2075C5.60997 16.065 5.49747 15.7275 5.63997 15.45C5.78247 15.1725 6.11997 15.06 6.39747 15.2025C8.01747 16.02 9.96747 16.035 11.6025 15.2475C11.88 15.1125 12.2175 15.2325 12.3525 15.51C12.4875 15.7875 12.3675 16.125 12.09 16.26C11.13 16.725 10.11 16.9575 9.04497 16.9575Z"
                  fill="#111111"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M9.04594 6.33016C7.58344 6.33016 6.39844 5.14516 6.39844 3.68266C6.39844 2.22016 7.58344 1.03516 9.04594 1.03516C10.5084 1.03516 11.6934 2.22016 11.6934 3.68266C11.6934 5.14516 10.5009 6.33016 9.04594 6.33016ZM9.04594 2.16766C8.20594 2.16766 7.52344 2.85016 7.52344 3.69016C7.52344 4.53016 8.20594 5.21266 9.04594 5.21266C9.88594 5.21266 10.5684 4.53016 10.5684 3.69016C10.5684 2.85016 9.87844 2.16766 9.04594 2.16766Z"
                  fill="#111111"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M3.62211 15.502C2.15961 15.502 0.974609 14.317 0.974609 12.8545C0.974609 11.3995 2.15961 10.207 3.62211 10.207C5.08461 10.207 6.26961 11.392 6.26961 12.8545C6.26961 14.3095 5.08461 15.502 3.62211 15.502ZM3.62211 11.332C2.78211 11.332 2.09961 12.0145 2.09961 12.8545C2.09961 13.6945 2.78211 14.377 3.62211 14.377C4.46211 14.377 5.14461 13.6945 5.14461 12.8545C5.14461 12.0145 4.46211 11.332 3.62211 11.332Z"
                  fill="#111111"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
                <path
                  d="M14.378 15.502C12.9155 15.502 11.7305 14.317 11.7305 12.8545C11.7305 11.3995 12.9155 10.207 14.378 10.207C15.8405 10.207 17.0255 11.392 17.0255 12.8545C17.018 14.3095 15.833 15.502 14.378 15.502ZM14.378 11.332C13.538 11.332 12.8555 12.0145 12.8555 12.8545C12.8555 13.6945 13.538 14.377 14.378 14.377C15.218 14.377 15.9005 13.6945 15.9005 12.8545C15.893 12.0145 15.218 11.332 14.378 11.332Z"
                  fill="#111111"
                  className="group-hover:stroke-[#1935CA] duration-300"
                />
              </svg>
            </span>
            <ShareModal
              shareOpen={shareOpen}
              handleShareClose={handleShareClose}
              shareUrl={shareUrl}
              type="video"
            />
          </div>
        </div>
        <div className="text-[#A09D9D] text-sm leading-6 tracking-wide text-left mt-3">
          {video.contentSnippet}
          <a href={video.link} className="text-blue-700">
            {" "}
            Read more...
          </a>
        </div>
        <div className="w-full mt-6">
          <div
            className={`w-full flex justify-between ${
              !comments ? "hidden" : "block"
            }`}
          >
            {comments?.length <= 6 ? (
              <p className="font-semibold leading-6">All Comments</p>
            ) : (
              <p
                onClick={addPreviousComment}
                className="font-semibold leading-6 cursor-pointer hover:text-[#A09D9D] duration-200"
              >
                Previous Comments
              </p>
            )}
            <p
              onClick={seeAllComments}
              className={`text-primaryColor cursor-pointer hover:text-[#A09D9D] duration-200 text-sm ${
                comments?.length <= 6 ? "hidden" : "block"
              }`}
            >
              See all
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-y-5">
            {!comments ? (
              <MyLoader2 />
            ) : comments?.length === 0 ? (
              <div>No comments yet</div>
            ) : (
              comments
                .slice(slicedComments)
                .map((comment: any) => (
                  <CommentComp
                    key={comment._id}
                    name={comment.name}
                    comment={comment.comment}
                    time={comment.createdAt}
                    id={comment._id}
                  />
                ))
            )}
            {commentsLoading ? <MyLoader2 /> : <></>}
          </div>
          <div className="mt-6">
            <p className="font-bold">Leave a comment</p>
            <div className="relative mt-4">
              <textarea
                required
                onChange={(e) => setCommentText(e.target.value)}
                value={commentText}
                className={`block w-full px-2.5 py-2 text-sm border-[#79747E] rounded-lg border ${
                  isFocusedComment ? "border-primaryColor" : "border-[#79747E]"
                } bg-transparent outline-none focus:border-primaryColor transition duration-300 h-28`}
                onFocus={() => {
                  setIsFocusedComment(true);
                }}
                onBlur={() => setIsFocusedComment(false)}
              />
              <label
                className={`absolute text-xs duration-300 transform ${
                  isFocusedComment || commentText
                    ? "text-blue-600 scale-75 top-2 -translate-y-4"
                    : "text-gray-500 scale-100 top-2"
                } left-2 bg-white px-1`}
              >
                Comment
              </label>
            </div>
            <div
              onClick={addComment}
              className="cursor-pointer w-48 mt-5 text-center px-10 py-3 rounded-3xl bg-primaryColor text-white font-semibold text-xs"
            >
              Send
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-left font-semibold leading-6">Related videos</p>
          <div className="flex gap-y-7 w-full flex-wrap flex-row justify-between mt-5">
            {!relatedVideos ? (
              <Loader />
            ) : (
              relatedVideos
                .slice(0, 2)
                .map((relatedVideo: any) => (
                  <VideoCard
                    key={relatedVideo.title}
                    content={relatedVideo.content}
                    title={relatedVideo.title}
                    image={relatedVideo.image}
                    video={relatedVideo.video}
                    pubDate={relatedVideo.pubDate}
                    contentSnippet={relatedVideo.contentSnippet}
                  />
                ))
            )}
          </div>
          {/* <PostCard /> */}
        </div>
      </div>
    </div>
  );
};

export default SingleVideoPage;
