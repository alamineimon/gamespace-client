import React from "react";
import { Link } from "react-router-dom";

const TrendingGamesCard = ({ games }) => {
  const { _id, gameName, authorName, thumbnail } = games;
  return (
    <div className="flex justify-start items-start space-x-3">
      <img
        src={thumbnail}
        alt={gameName}
        className="w-32 h-28 object-cover rounded"
      />
      <div className="">
        <h3 className="text-xl font-semibold text-white">{gameName}</h3>
        <h6 className=" mb-3">{authorName}</h6>
        <Link to={`/gameshtml/${_id}`} className="btn btn-primary btn-sm">
          Play Now
        </Link>
      </div>
    </div>
  );
};

export default TrendingGamesCard;
