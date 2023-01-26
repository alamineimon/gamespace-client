import React from "react";
import { Link } from "react-router-dom";
import './TwoDGames.css'

const TwoDGmaes = () => {
  return (
    <div  className="h-[500px] items-center flex justify-evenly">
      <div className="CandyCrash w-96 h-60 flex flex-col justify-center items-center rounded-none shadow-xl image-full">
          <p className="text-3xl mb-6">Candy Crush</p>
          <Link className=" px-6 py-3 hover:text-white text-black bg-primary rounded-none">Play Now</Link>
      </div>
      <div className="ticyactoe  w-96 h-60 flex flex-col justify-center items-center rounded-none shadow-xl image-full">
          <p className="text-3xl mb-6">Tic Tac Toe</p>
          <Link  className=" px-6 py-3 hover:text-white text-black bg-primary rounded-none">Play Now</Link>
      </div>
      <div className="CardsFlip w-96 h-60 flex flex-col justify-center items-center rounded-none shadow-xl image-full">
          <p className="text-3xl mb-6">Cards Flip</p>
          <Link className=" px-6 py-3 hover:text-white text-black bg-primary rounded-none">Play Now</Link>
      </div>
    </div>
  );
};

export default TwoDGmaes;
