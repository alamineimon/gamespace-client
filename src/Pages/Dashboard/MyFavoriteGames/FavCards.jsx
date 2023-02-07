import React from "react";
import { Link } from "react-router-dom";

const FavCards = ({ favG }) => {
  const { _id, gameName, thumbnail } = favG;
  return (
    <div className=" bg-neutral group border hover:border-primary">
      <div className="w-full h-28 relative overflow-hidden">
        <img
          src={thumbnail}
          alt={gameName}
          className="w-full h-full object-cover"
        />
        <div className="absolute flex bg-black/50 space-x-3 justify-center h-full items-center bottom-0 w-full opacity-0 group-hover:opacity-100 backdrop-blur">
          <Link
            to={`/gameshtml/${_id}`}
            className="btn btn-primary btn-xs translate-y-10 group-hover:translate-y-0"
          >
            Play Now !
          </Link>
        </div>
      </div>
      <div>
        <h3 className="text-center p-2 text-xs group-hover:text-white">
          {gameName}
        </h3>
      </div>
    </div>
  );
};

export default FavCards;
