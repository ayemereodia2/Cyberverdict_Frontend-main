import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import playImg from "./videoAssets/play.png";
import "./videoStyles/style.css";
import imageBackground from "../../components/../assets/signupCard3.png";
import videoImage1 from "../../components/../assets/videoImage1.png";
import videoImage2 from "../../components/../assets/videoImage2.png";
import videoImage3 from "../../components/../assets/videoImage3.png";

const SignupVideoSlider = () => {
  return (
    <div
      className="h-[500px] w-full relative flex flex-row items-center overflow-hidden"
      style={{ backgroundImage: `url(${imageBackground})` }}
    >
      <div className="absolute -left-[250px]">
        <div
          className="relative w-[500px] bg-center bg-cover bg-no-repeat h-[200px] rounded-lg"
          style={{ backgroundImage: `url(${videoImage2})` }}
        >
          <div className="playBg absolute p-3.5 top-1/2 left-1/2 cursor-pointer -translate-x-1/2 -translate-y-1/2 rounded-full">
            <img src={playImg} alt="play icon" />
          </div>
          <div className="text-white px-6 w-full absolute bottom-0 mb-[18px] flex flex-row items-center justify-between">
            <div className="text-left">
              <p className="font-semibold leading-7">Young Tech Wiz</p>
              <p className="text-xs tracking-wide">
                Lorem ipsum dolor sit aliquam enim
              </p>
            </div>
            <div>
              <p className="text-xs leading-7">2 mins ago</p>
              <div className="flex justify-between">
                <span>
                  <BookmarksOutlinedIcon fontSize="small" />
                </span>
                <span>
                  <ShareOutlinedIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="relative w-[500px] bg-center bg-cover bg-no-repeat h-[300px] rounded-lg"
          style={{ backgroundImage: `url(${videoImage1})` }}
        >
          <div className="playBg absolute p-3.5 top-1/2 left-1/2 cursor-pointer -translate-x-1/2 -translate-y-1/2 rounded-full">
            <img src={playImg} alt="play icon" />
          </div>
          <div className="text-white px-6 w-full absolute bottom-0 mb-[18px] flex flex-row items-center justify-between">
            <div className="text-left">
              <p className="font-semibold leading-7">Young poTech Wiz</p>
              <p className="text-xs tracking-wide">
                Lorem ipsum dolor sit aliquam enim
              </p>
            </div>
            <div>
              <p className="text-xs leading-7">2 mins ago</p>
              <div className="flex justify-between">
                <span>
                  <BookmarksOutlinedIcon fontSize="small" />
                </span>
                <span>
                  <ShareOutlinedIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -right-[250px]">
        <div
          className="relative w-[500px] bg-center bg-cover bg-no-repeat h-[200px] rounded-lg"
          style={{ backgroundImage: `url(${videoImage3})` }}
        >
          <div className="playBg absolute p-3.5 top-1/2 left-1/2 cursor-pointer -translate-x-1/2 -translate-y-1/2 rounded-full">
            <img src={playImg} alt="play icon" />
          </div>
          <div className="text-white px-6 w-full absolute bottom-0 mb-[18px] flex flex-row items-center justify-between">
            <div className="text-left">
              <p className="font-semibold leading-7">Young Tech Wiz</p>
              <p className="text-xs tracking-wide">
                Lorem ipsum dolor sit aliquam enim
              </p>
            </div>
            <div>
              <p className="text-xs leading-7">2 mins ago</p>
              <div className="flex justify-between">
                <span>
                  <BookmarksOutlinedIcon fontSize="small" />
                </span>
                <span>
                  <ShareOutlinedIcon fontSize="small" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupVideoSlider;
