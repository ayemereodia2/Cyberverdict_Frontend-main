import "./videoStyles/style.css";
import playImg from "./videoAssets/play.png";
import { Link } from "react-router-dom";
import React from "react";

interface VideoCardProps {
  content: string;
  contentSnippet: string;
  title: string;
  image: string;
  video: string;
  pubDate: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  image,
  pubDate,
}) => {
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
    <div
      style={{ backgroundImage: `url(${image})` }} // Use image prop for backgroundImage
      className="relative w-full lg:w-[450px] bg-cover h-[285px] rounded-lg overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <Link
        to={`/video/${title}`}
        className="playBg absolute p-3.5 top-1/2 left-1/2 cursor-pointer -translate-x-1/2 -translate-y-1/2 rounded-full"
      >
        <img src={playImg} alt="play icon" />
      </Link>
      <div
        className="text-white px-3 lg:px-6 w-full absolute bottom-0 
      mb-[18px] flex items-center justify-between flex-row"
      >
        <div className="">
          {/* <p className="font-semibold leading-7 w-36">{contentSnippet}</p> */}
          <p className="text-xs tracking-wide w-48 lg:w-56">{title}</p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <p className="text-xs leading-7">{calculateTimeAgo(pubDate)}</p>
          <div className="flex w-full justify-between">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M11.6375 5.4668H5.15415C3.72915 5.4668 2.5625 6.63345 2.5625 8.05845V17.5251C2.5625 18.7335 3.42916 19.2501 4.4875 18.6585L7.76249 16.8335C8.11249 16.6418 8.67917 16.6418 9.02083 16.8335L12.2958 18.6585C13.3542 19.2501 14.2208 18.7335 14.2208 17.5251V8.05845C14.2292 6.63345 13.0625 5.4668 11.6375 5.4668Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.2292 8.05845V17.5251C14.2292 18.7335 13.3625 19.2418 12.3042 18.6585L9.02917 16.8335C8.67917 16.6418 8.11249 16.6418 7.76249 16.8335L4.4875 18.6585C3.42916 19.2418 2.5625 18.7335 2.5625 17.5251V8.05845C2.5625 6.63345 3.72915 5.4668 5.15415 5.4668H11.6375C13.0625 5.4668 14.2292 6.63345 14.2292 8.05845Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.2292 4.82505V14.2917C19.2292 15.5001 18.3625 16.0084 17.3042 15.4251L14.2292 13.7084V8.05839C14.2292 6.63339 13.0625 5.46674 11.6375 5.46674H7.5625V4.82505C7.5625 3.40005 8.72915 2.2334 10.1542 2.2334H16.6375C18.0625 2.2334 19.2292 3.40005 19.2292 4.82505Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M14.5547 5.70801C16.2214 6.86634 17.3714 8.70801 17.6047 10.833"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.33008 10.875C3.54674 8.75833 4.68008 6.91667 6.33008 5.75"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.24609 18.0166C8.21276 18.5083 9.31276 18.7833 10.4711 18.7833C11.5878 18.7833 12.6378 18.5333 13.5794 18.0749"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.471 6.98294C11.7504 6.98294 12.7876 5.94574 12.7876 4.66628C12.7876 3.38682 11.7504 2.34961 10.471 2.34961C9.1915 2.34961 8.1543 3.38682 8.1543 4.66628C8.1543 5.94574 9.1915 6.98294 10.471 6.98294Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.44753 17.1665C5.72699 17.1665 6.76419 16.1293 6.76419 14.8499C6.76419 13.5704 5.72699 12.5332 4.44753 12.5332C3.16807 12.5332 2.13086 13.5704 2.13086 14.8499C2.13086 16.1293 3.16807 17.1665 4.44753 17.1665Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.3967 17.1665C17.6762 17.1665 18.7134 16.1293 18.7134 14.8499C18.7134 13.5704 17.6762 12.5332 16.3967 12.5332C15.1173 12.5332 14.0801 13.5704 14.0801 14.8499C14.0801 16.1293 15.1173 17.1665 16.3967 17.1665Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
