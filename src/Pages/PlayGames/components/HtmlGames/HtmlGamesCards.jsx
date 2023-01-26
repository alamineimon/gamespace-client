import React from "react";
import { Link } from "react-router-dom";

const HtmlGamesCards = ({ game }) => {
  const { gameName, authorName, gameLink, thumbnail, category, description } =
    game;
  console.log(game._id);
  return (
    <div className="card w-full bg-base-100 shadow-xl image-full h-80  ">
      <figure className="before:hidden">
        <img src={thumbnail} alt={gameName} className="w-full" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title text-mainHeading mx-auto">{gameName}</h2>
        <h3 className="text-textP">By:{authorName}</h3>
        <p>{description.slice(0, 100)}</p>
        <div className="card-actions justify-center">
          <Link
            to="/demoSingle"
            className="btn btn-outline rounded-none hover:btn-primary font-bold"
          >
            Play Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HtmlGamesCards;
