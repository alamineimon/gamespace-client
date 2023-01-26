import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className=" min-h-[600px] justify-between items-center  lg:flex overflow-hidden p-10">
      <div className="lg:w-1/2 sm:w-full mt-8 sm:mb-16 text-white ">
        <p className="text-7xl mt-12 mb-6 font-bold ml-16">
          Unleash the gamer in you
        </p>
        <p className="text-lg ml-16 mb-8 font-gaming">
          Discover the latest in gaming news, reviews, and gameplay on our
          website.
        </p>
        <div>
          <Link className="bg-blue-700 rounded ml-16 text-white sm:mb-16 text-lg uppercase font-semibold px-12 py-3">
            Join Now
          </Link>
          <Link className="bg-blue-700 rounded ml-2 text-white sm:mb-16 text-lg uppercase font-semibold px-12 py-3">
            Browse game
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-full lg:mt-0 sm:mt-16">
        <img
          className=" lg:h-[390px] lg:ml-12"
          src="https://i.ibb.co/NYhzTQK/banner-illus.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
