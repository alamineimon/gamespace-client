import React from "react";
import { Link } from "react-router-dom";
import bgVideos from "../../../../assets/videos/bg.mp4";
import "./header.css";

const Header = () => {
  return (
    <div className="landingPage">
      <video src={bgVideos} autoPlay muted loop className="videoBgs"></video>
      <div className="bgOverlay"></div>
      <div className="textArea">
        <p className="lg:text-8xl text-4xl lg:mt-12 lg:mb-6 font-bold ml-16">
          All Your Games
          <br />{" "}
          <span className="lg:text-8xl text-4xl text-yellow-600">
            is Here...
          </span>
        </p>
        <p className="lg:text-xl text-lg w-1/2 ml-16 mb-12">
          Arcane gives you the power to create the perfect website for your team
          and community.A trully perfect theme for games !
        </p>
        <div className="lg:flex block lg:justify-left lg:items-left  ">
          <p>
            <Link className="bg-yellow-600  ml-16 text-white  text-lg uppercase hover:text-white font-semibold w-[350px] text-center px-8 py-2">
              Join Now
            </Link>
          </p>
          <p className="lg:mt-0 mt-10 ">
            <Link className="bg-yellow-600 ml-16 text-white  text-lg uppercase hover:text-white font-semibold w-[350px] text-center px-8 py-2">
              Browse Game
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
