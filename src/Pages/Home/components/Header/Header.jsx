import React from "react";
import { Link } from "react-router-dom";
import bgVideos from "../../../../assets/videos/bg.mp4";
import "./header.css";

const Header = () => {
  return (
    <div className="landingPage">
      <video src={bgVideos} autoPlay muted loop className="videoBgs"></video>
      <div className="bgOverlay"></div>
      <div className="textArea md:ml-16">
        <p className="lg:text-8xl text-4xl lg:mt-12 lg:mb-6 font-bold ">
          All Your Games
          <br />{" "}
          <span className="lg:text-8xl text-4xl text-yellow-600">
            is Here...
          </span>
        </p>
        <p className="lg:text-xl text-lg w-8/12 md:w-1/2  mb-12">
          Arcane gives you the power to create the perfect website for your team
          and community.A trully perfect theme for games !
        </p>
        <div className="flex gap-6 ">
          <p>
            <Link className="bg-yellow-600 text-whiteuppercase hover:text-white font-semibold w-[250px] md:w-[350px] text-center px-8 py-2 ">
              Join Now
            </Link>
          </p>
          <p >
            <Link className="bg-yellow-600  text-whiteuppercase hover:text-white font-semibold w-[250px] md:w-[350px] text-center px-8 py-2">
              Browse Game
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
