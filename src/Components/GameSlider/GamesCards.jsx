import React from "react";

const GamesCards = ({ game }) => {
  const { gameTitle, gameVideoUrl, shortDescription, price, gameBanner } = game;
  return (
    <div className="card card-compact bg-white border border-gray-300 ">
      <figure>
        <img src={gameBanner} alt={gameTitle} className="w-full object-cover" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-blue-800 font-bold">{gameTitle}</h2>
        <p className="text-slate-600">{shortDescription}</p>
        <div className="card-actions justify-between items-end">
          <h6 className="text-xl lg:text-3xl font-bold text-slate-900">
            ${price}
          </h6>
          <button className="btn btn-primary btn-sm hover:shadow-lg hover:scale-105 transition-all">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamesCards;
