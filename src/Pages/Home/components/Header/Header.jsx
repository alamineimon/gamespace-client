import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import bgVideos from "../../../../assets/videos/bg.mp4";
import { AuthContext } from "../../../../context/AuthProvider";
import "./header.css";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" w-full min-h-[40vh] lg:min-h-[86vh] flex flex-col items-center justify-center relative transition-all">
      <video
        src={bgVideos}
        autoPlay
        muted
        loop
        className=" w-full h-full absolute top-0 z-[1] object-cover"
      ></video>
      <div className=" h-full w-full bg-black/50 z-10"></div>
      <div className="absolute z-20 text-center  ">
        <h1 className="text-4xl opacity-80 lg:text-8xl sm:text-6xl lg:mt-12 lg:mb-6 font-bold text-center font-gaming text-mainHeading">
          All Your Games
          <br />
          <span className="text-4xl opacity-80 lg:text-8xl sm:text-6xl text-primary">
            is Here...
          </span>
        </h1>
        <div className="lg:flex block lg:justify-center lg:items-left space-x-5 mt-5 ">
          {!user && (
            <Link
              to="/login"
              className="btn btn-primary  rounded-none font-bold"
            >
              Join now
            </Link>
          )}
          <Link
            to="/shop"
            className="btn btn-secondary  rounded-none font-bold"
          >
            Browse games
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
