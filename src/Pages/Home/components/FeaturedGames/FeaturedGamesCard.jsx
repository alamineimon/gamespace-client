import React from "react";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import VideoModal from "../../../Shared/VideoModal/VideoModal";

const FeaturedGamesCard = ({ game }) => {
  const { _id, title, description, price, img, videolink } = game;

  return (
    <div className="card relative card-compact cursor-pointer bg-secondary rounded-none group">
      <figure className="relative">
        <img
          src={img}
          alt={title}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {videolink && (
          <label
            htmlFor="see-video"
            className="absolute top-[7%] -right-10 group-hover:right-3 transition-all duration-100 p-2  bg-black/75 hover:bg-primary cursor-pointer  group-hover:block rounded-full"
          >
            <FaVideo className="text-white text-lg " />
          </label>
        )}
        <div className="h-10 w-32 bg-yellow-500 absolute top-0 left-0">
          <p className="text-2xl text-white">Top Rated</p>
        </div>
        
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-mainHeading font-bold">{title}</h2>
        <p className="text-textP mt-3 mb-10">
          {description ? description.slice(0, 100) + " ..." : "description"}
        </p>
        <div className="card-actions justify-between items-end">
          <h6 className="text-xl lg:text-3xl font-bold text-mainHeading">
            ${price}
          </h6>
          <Link
            to={`/downloadGames/${_id}`}
            className="py-3 text-secondary   relative px-5 rounded-none font-bold bg-primary uppercase"
          >
            Details
          </Link>
        </div>
      </div>
      {videolink && <VideoModal videolink={videolink} />}
    </div>
  );
};

export default FeaturedGamesCard;
