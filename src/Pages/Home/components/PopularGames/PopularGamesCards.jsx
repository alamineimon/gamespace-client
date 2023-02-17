import React from "react";
import { Link } from "react-router-dom";

const PopularGamesCards = ({ games }) => {
  const { _id, gameName, authorName, thumbnail } = games;
  return (
    <div>
      <img
        src={thumbnail}
        alt=""
        className=" w-full h-80 object-cover border border-primary  "
      />
      <div className="bg-neutral p-5 m-5 hover:-translate-y-28  hover:shadow-lg -translate-y-32  space-y-5 flex flex-col justify-center items-center transition-transform rounded-sm border border-primary/50 hover:border-primary text-center -mb-16">
        <h3 className="text-xl  capitalize font-bold text-white ">
          {gameName}
        </h3>
        <h4 className="text-sm ">
          By <span className="text-primary">{authorName}</span>
        </h4>
        <Link
          to={`/gameshtml/${_id}`}
          className="py-2 px-3 bg-primary text-neutral font-bold rounded-sm"
        >
          Play Now
        </Link>
      </div>
    </div>
  );
};

export default PopularGamesCards;
