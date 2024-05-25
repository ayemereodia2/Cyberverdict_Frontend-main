import React from "react";
import { Link } from "react-router-dom";

interface WebsiteCardProps {
  title: string;
  siteLink: string;
  category?: string;
  description?: string;
  image?:string;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({
  title,
  siteLink,
  description,
  image
}) => {
  const truncateText = (text: string, maxChars: number): string => {
    if (text.length > maxChars) {
      return text.slice(0, maxChars) + " ...";
    }
    return text;
  };
  return (
    <Link to={`/website/${title}`} className="lg:basis-[48.5%] w-full flex flex-row gap-5 justify-between p-5 rounded-lg bg-white border border-[#EDEDED]">
      <div className="hidden lg:block">
        <img className="w-20 h-20" src={image} alt="website image" />
      </div>
      <div className="basis-4/5 flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div>
            <a
              href={siteLink}
              target="_blank"
              className="text-lg font-semibold text-primaryColor leading-5 tracking-wide underline"
            >
              {truncateText(siteLink, 40)}
            </a>
            <p className="text-sm text-[#A09D9D] leading-5 tracking-wide">
              {truncateText(title,40)}
            </p>
          </div>
          {/* <div className='border border-[#79747E] py-2 text-sm text-primaryColor font-semibold px-6 rounded-3xl'>Follow</div> */}
        </div>
        <p className="text-xs text-[#49454F] leading-5 tracking-wide">
          {description}{" "}
        </p>
        {/* <div className="flex flex-row justify-between">
          <div className="text-center">
            <p className="font-semibold leading-5">20K</p>
            <p className="text-xs leading-5 text-[#A09D9D]">Followers</p>
          </div>
          <div className="text-center">
            <p className="font-semibold leading-5">5</p>
            <p className="text-xs leading-5 text-[#A09D9D]">
              Articles per week
            </p>
          </div>
        </div> */}
      </div>
    </Link>
  );
};

export default WebsiteCard;
