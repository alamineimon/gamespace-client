import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="justify-between sm:h-[900px] lg:h-[700px] w-full lg:flex overflow-hidden p-10">
      <div className="lg:w-1/2 sm:w-full mt-8 sm:mb-16 text-white ">
        <p className="text-5xl mt-12 mb-6 font-bold ml-16">
          All Your Game Is Here...
        </p>
        <p className="text-lg ml-16 mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          fugit laborum facilis.
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

export default Header;
