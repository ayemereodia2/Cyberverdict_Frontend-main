import img1 from "../assets/signupCard2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from '../assets/signupCard1.png'
import SignupVideoSlider from "./videoComponents/SignupVideoSlider";

const SignUpSlider = () => {
  const settings = {
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    swipeToSlide: true,
  };
  return (
    <Slider {...settings}>
      <div className="h-[500px] w-full">
        <img className="w-full h-full" src={img1} alt="signup image one" />
      </div>
      <div className="h-[500px] w-full">
        <img className="w-full h-full" src={img2} alt="signup image one" />
      </div>
      <SignupVideoSlider />
    </Slider>
  );
};

export default SignUpSlider;
