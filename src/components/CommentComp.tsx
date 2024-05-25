import React, { useContext, useEffect, useState } from "react";
import userAvater from "../assets/Mask group.svg";
import { LuDot } from "react-icons/lu";
// import { BiLike } from "react-icons/bi";
// import likeImg from "../assets/commentAssets/like.svg";
// import likedImg from "../assets/commentAssets/liked.svg";
import axios from "axios";
import { Store } from "../Store";
import { toast } from "react-toastify";

interface CommentsCompProps {
  name: string;
  comment: string;
  time: string;
  id: any;
}

const CommentComp: React.FC<CommentsCompProps> = ({
  name,
  comment,
  time,
  id,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const { state } = useContext(Store);
  const { userInfo } = state;

  const addLike = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // const body = JSON.stringify({
      //   id: id,
      // });

      const response = await axios.post(
        "https://cyberverdictbackend.onrender.com/api/comments/addLike",
        {
          commentId: id,
          userId: userInfo?._id
        },
        config
      );
      console.log(response.data);
      if(response.data === false) {
        setIsLiked(false)
        return
      }
      else if(response.data === true) {
        setIsLiked(true)
        return
      }
      else{
        return
      }
    } catch (error:any) {
      toast.error(error.response.data)
    }
  };

  useEffect(() => {
    const getUserLike = async() => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axios.get(`https://cyberverdictbackend.onrender.com/api/comments/getCommentLikes/${id}`,config)
        console.log(response.data)
        if((response.data).includes(userInfo?._id)){
          setIsLiked(true)
          return
        }
      } catch (error:any) {
        toast.error(error.response.data)
      }
    }
    getUserLike()
  }, [])

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
  return (
    <div className="">
      <div className="flex flex-row gap-x-2 items-center">
        <div className="avaterGradient w-6 h-6 p-1 rounded-full">
          <img src={userAvater} className="" alt="user avater" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs text-[#A09D9D]">{calculateTimeAgo(time)}</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm leading-6 text-[#A09D9D]">{comment}</p>
      </div>
      {/* <div className="text-xs flex flex-row gap-x-1 mt-2 items-center">
        <span>
          <BiLike className="bg-primaryColor text-sm text-white rounded-full p-0.5" />
        </span>
        <span>0</span>
      </div>
      <hr className="mt-1" /> */}
      <div className="flex flex-row gap-x-1 mt-2 items-center">
        <div
          onClick={addLike}
          className="text-sm flex flex-row items-center gap-x-0.5 rounded-md duration-200 cursor-pointer group"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M7.48047 19.0575L10.5805 21.4575C10.9805 21.8575 11.8805 22.0575 12.4805 22.0575H16.2805C17.4805 22.0575 18.7805 21.1575 19.0805 19.9575L21.4805 12.6575C21.9805 11.2575 21.0805 10.0575 19.5805 10.0575H15.5805C14.9805 10.0575 14.4805 9.55749 14.5805 8.85749L15.0805 5.65749C15.2805 4.75749 14.6805 3.75749 13.7805 3.45749C12.9805 3.15749 11.9805 3.55749 11.5805 4.15749L7.48047 10.2575"
                // stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                className={`stroke-[#292D32] ${
                  isLiked ? "fill-[#1935CA] stroke-none" : "stroke-[#292D32] fill-none"
                } group-hover:fill-[#1935CA] group-hover:stroke-none duration-500`}
              />
              <path
                d="M2.37891 19.0555V9.25547C2.37891 7.85547 2.97891 7.35547 4.37891 7.35547H5.37891C6.77891 7.35547 7.37891 7.85547 7.37891 9.25547V19.0555C7.37891 20.4555 6.77891 20.9555 5.37891 20.9555H4.37891C2.97891 20.9555 2.37891 20.4555 2.37891 19.0555Z"
                // stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className={`stroke-[#292D32] ${
                  isLiked ? "fill-[#1935CA] stroke-none" : "stroke-[#292D32] fill-none"
                } group-hover:fill-[#1935CA] group-hover:stroke-none duration-500`}
              />
            </svg>
          </span>
          <span
            className={`group-hover:text-primaryColor duration-200 ${
              isLiked ? "text-primaryColor"  : "text-black"
            }`}
          >
            Like<span className={`${isLiked ? "inline" : "hidden"}`}>d</span>
          </span>
          {/* <span><BiLike className="text-lg" /></span> */}
        </div>
        <span>
          <LuDot />
        </span>
        <p className="text-sm cursor-pointer">Reply</p>
      </div>
    </div>
  );
};

export default CommentComp;
