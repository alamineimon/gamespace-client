import React from "react";
import { useState } from "react";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import VideoModal from "../../../Shared/VideoModal/VideoModal";
const GamesCards = ({ game }) => {
  const {_id, title, description, price, img, videolink, gameDownload } = game;
  const [video, setVideo] = useState("");

  return (
    <div className="card card-compact cursor-pointer bg-secondary rounded-none group">
      <figure className="relative">
        <img
          src={img}
          alt={title}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {videolink && (
          <label
            onClick={() => setVideo(videolink)}
            htmlFor="see-video"
            className="absolute top-[7%] -right-10 group-hover:right-3 transition-all duration-100 p-2  bg-black/75 hover:bg-primary cursor-pointer  group-hover:block rounded-full"
          >
            <FaVideo className="text-white text-lg " />
          </label>
        )}
        <span className="absolute cursor-pointer bottom-3 left-[3%] text-sm p-2 rounded-none bg-black/75 text-white hover:text-primary backdrop-blur">
          Category 1
        </span>
        <span className="absolute cursor-pointer ml-4 bottom-3 left-[30%] text-sm p-2 rounded-none bg-black/75 text-white hover:text-primary backdrop-blur">
          Category 2
        </span>
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-mainHeading font-bold">{title}</h2>
        <p className="text-textP mb-12">{description ? description?.slice(0, 100) + ' ...' : "description"}</p>
        <div className="card-actions justify-between items-end mb-3">
          <h6 className="text-xl lg:text-3xl font-bold text-mainHeading">
            $ {price}
          </h6>
          <Link
            to={`/downloadGames/${_id}`}
            className="py-3 text-secondary hover:translate-y-1  relative px-5 rounded-none font-bold bg-primary uppercase"
          >
            Details
          </Link>
        </div>
      </div>
      {videolink && video && (
        <VideoModal videolink={videolink} setVideo={setVideo} />
      )}
    </div>
  );
};

export default GamesCards;
