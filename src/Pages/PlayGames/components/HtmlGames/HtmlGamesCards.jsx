import React from "react";
import { Link } from "react-router-dom";

const HtmlGamesCards = ({ game }) => {
  const { gameName, thumbnail, _id } = game;
  return (
    <div className="card w-full image-full  rounded-sm border group hover:border-primary">
      <figure className="before:hidden">
        <img
          src={thumbnail}
          alt={gameName}
          className="w-full group-hover:scale-125"
        />
      </figure>
      <div className="card-body text-center  flex flex-col justify-center space-y-5">
        <h2 className="card-title text-mainHeading mx-auto text-xl  font-bold uppercase">
          {gameName}
        </h2>
        <div className="card-actions justify-center">
          <Link
            to={`/gameshtml/${_id}`}
            className="btn btn-bg1/30 rounded-none group-hover:bg-primary font-bold group-hover:text-secondary"
          >
            Play Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HtmlGamesCards;
