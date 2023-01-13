import React from "react";

const GamesCards = ({ game }) => {
  const { gameTitle, gameVideoUrl, shortDescription, price, gameBanner } = game;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={gameBanner} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{gameTitle}</h2>
        <p>{shortDescription}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default GamesCards;
