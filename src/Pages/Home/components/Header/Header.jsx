import React from "react";
import { Link } from "react-router-dom";
import bgVideos from "../../../../assets/videos/bg.mp4";
import "./header.css";

const Header = () => {
  return (
        <div className=" w-full min-h-[87vh] flex flex-col items-center justify-center relative transition-all">
      <video
        src={bgVideos}
        autoPlay
        muted
        loop
        className=" w-full h-full absolute top-0 z-[1] object-cover"
      ></video>
      <div className=" h-full w-full bg-black/50 z-10"></div>
      <div className="absolute z-20 text-center -translate-y-1/4">
        <h1 className="text-4xl lg:text-8xl sm:text-6xl lg:mt-12 lg:mb-6 font-bold text-center font-gaming text-mainHeading">
          All Your Games
          <br />
          <span className="text-4xl lg:text-8xl sm:text-6xl text-primary">
            is Here...
          </span>
        </h1>
        <div className="lg:flex block lg:justify-center lg:items-left space-x-5 ">
          <Link to="/login" className="btn btn-primary rounded-none font-bold">
            Join now
          </Link>
          <Link to="/shop" className="btn btn-secondary rounded-none font-bold">
            Browse games
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
