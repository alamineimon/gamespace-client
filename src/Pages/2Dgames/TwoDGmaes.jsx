import React from "react";
import { Link } from "react-router-dom";
import "./TwoDGames.css";

const TwoDGmaes = () => {
  return (
    <div className="lg:h-[500px] items-center lg:flex block justify-evenly">
      <div className="CandyCrash w-96 h-60 flex flex-col justify-center items-center rounded-none shadow-xl image-full">
        <p className="text-3xl mb-6 text-white uppercase font-bold">
          Candy Crush
        </p>
        <Link
          to="/candycrash"
          className=" px-6 py-3 hover:text-white text-black bg-primary rounded-none"
        >
          Play Now
        </Link>
      </div>
      <div className="ticyactoe  w-96 h-60 flex flex-col justify-center items-center rounded-none shadow-xl image-full">
        <p className="text-3xl mb-6 text-white uppercase font-bold">
          Tic Tac Toe
        </p>
        <Link
          to="/tikTakToe"
          className=" px-6 py-3 hover:text-white text-black bg-primary rounded-none"
        >
          Play Now
        </Link>
      </div>
      <div className="CardsFlip w-96 h-60 flex flex-col justify-center items-center rounded-none shadow-xl image-full">
        <p className="text-3xl mb-6 text-white uppercase font-bold">
          Cards Flip
        </p>
        <Link
          to="/memory"
          className=" px-6 py-3 hover:text-white text-black bg-primary rounded-none"
        >
          Play Now
        </Link>
      </div>
    </div>
  );
};

export default TwoDGmaes;
