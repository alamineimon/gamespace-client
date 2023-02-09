import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import "./TwoDGames.css";

const TwoDGmaes = () => {
  const { theme } = useContext(AuthContext);

  return (
    <div>
      <div className={`h-[500px] items-center flex justify-evenly ${theme === "dark" ? "bg-bg1" : "bg-gray"}`}>
        <div className="CandyCrash w-96 h-60 flex flex-col justify-center items-center rounded-none shadow-xl image-full">
          <p className="text-3xl mb-6 text-white uppercase font-bold">
            Candy Crush
          </p>
          <Link
            to="/candycrash"
            onClick={handlerPlayGame}
            htmlFor="booking-modal"
            className="px-6 py-3 hover:text-white text-black bg-primary rounded-none"> Play Now</Link>
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
    </div>
  );
};

export default TwoDGmaes;
