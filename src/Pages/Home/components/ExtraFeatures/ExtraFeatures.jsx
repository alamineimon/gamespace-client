import React from "react";
import "./ExtraFeatures.css";
import { BiRun } from "react-icons/bi";
import { ImDownload } from "react-icons/im";
import { Link } from "react-router-dom";

const ExtraFeatures = () => {
  return (
    <div className="lg:flex sm:block text-white">
      <div className="downloadGames flex justify-center items-center lg:w-1/2 sm:w-full">
        <div className="w-full text-center">
          <BiRun className="text-5xl w-full mx-auto text-yellow-300"></BiRun>
          <h4 className="text-2xl font-semibold font-serif">
            Play Games
          </h4>
          <p className="">You can play your favorite games here..</p>
          <Link to="/play-games" className="btn rounded-none btn-outline btn-sm mt-4">Play</Link>
        </div>
      </div>
      <div className="plauHtmlGames  flex justify-center items-center lg:w-1/2 sm:w-full">
        <div className=" w-full text-center">
          <ImDownload className="text-4xl w-full mx-auto text-yellow-300"></ImDownload>
          <h5 className="text-2xl font-semibold font-serif ">
            Download Games
          </h5>
          <p className="">You can browse and download yourames here..</p>
          <Link to='/shop' className="btn rounded-none btn-outline btn-sm mt-4">
            Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExtraFeatures;
