// import React from "react";
import img from "../assets/notLoggedin.svg";
import { Link } from "react-router-dom";
// import CustomizedDialogs from "../components/AddArticlesDialog";
import { toast } from "react-toastify";

const TailorExperience = () => {
  // const [open, setOpen] = React.useState(false);

  // // const handleClickOpen = () => {
  // //   setOpen(true);
  // // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  return (
    <div className="px-4 lg:px-16">
      {/* <CustomizedDialogs open={open} setOpen={setOpen} handleClickOpen={handleClickOpen} handleClose={handleClose} /> */}
      <div className="text-center">
        <p className="text-3xl leading-10 font-bold tracking-wide mt-12">
          Tailor your experience
        </p>
        <p className="text-[#A09D9D] text-sm leading-5 tracking-wide mt-1">
          This space will showcase the most engaging articles from the feeds you
          have chosen to follow
        </p>
      </div>
      <div className="flex justify-center">
        <img src={img} alt="tailor experience image" />
      </div>
        <div 
        // onClick={handleClickOpen}
        onClick={() => toast.warning("Feature coming soon...")}
        className="cursor-pointer mt-5 px-10 py-3 rounded-3xl bg-primaryColor text-white font-semibold text-xs">
          Add articles
        </div>
      <Link to="/authpage/accountcreated">
        <div className="cursor-pointer px-10 py-3 rounded-3xl bg-white text-primaryColor font-semibold text-xs">
          Skip
        </div>
      </Link>
    </div>
  );
};

export default TailorExperience;
