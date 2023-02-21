import React from "react";
import { Link } from "react-router-dom";
import "./TwoDGames.css";
import TwoDGamesHeader from "./TwoDGamesHeader";

const TwoDGmaes = () => {
  return (
    <section>
      <TwoDGamesHeader />
      <div className="bg-black1 py-5 lg:py-10">
        <div
          className={`py-5 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 justify-evenly lg:items-center w-11/12 mx-auto gap-5 lg:gap-10 `}
        >
          <div className="CandyCrash w-full m-auto h-60 mb-4  flex flex-col justify-center items-center rounded-none shadow-xl image-full group ">
            <p className="text-3xl text-white uppercase font-bold group-hover:-translate-y-8 transition-transform z-10">
              Candy Crush
            </p>
            <Link
              to="/candycrash"
              htmlFor="booking-modal"
              className="btn btn-primary font-bold rounded-none absolute opacity-0 group-hover:opacity-100 translate-y-0 group-hover:translate-y-8 transition-transform"
            >
              {" "}
              Play Now
            </Link>
          </div>
          <div className="ticyactoe  w-full m-auto h-60 mb-4  flex flex-col justify-center items-center rounded-none shadow-xl image-full group">
            <p className="text-3xl text-white uppercase font-bold group-hover:-translate-y-8 transition-transform z-10">
              Tic Tac Toe
            </p>
            <Link
              to="/tikTakToe"
              className=" btn btn-primary font-bold rounded-none absolute opacity-0 group-hover:opacity-100 translate-y-0 group-hover:translate-y-8 transition-transform"
            >
              Play Now
            </Link>
          </div>
          <div className="CardsFlip w-full m-auto h-60 mb-4  flex flex-col justify-center items-center rounded-none shadow-xl image-full group">
            <p className="text-3xl text-white uppercase font-bold group-hover:-translate-y-8 transition-transform z-10">
              Cards Flip
            </p>
            <Link
              to="/memory"
              className=" btn btn-primary font-bold rounded-none absolute opacity-0 group-hover:opacity-100 translate-y-0 group-hover:translate-y-8 transition-transform"
            >
              Play Now
            </Link>
          </div>
          <div className="flappy w-full m-auto h-60 mb-4  flex flex-col justify-center items-center rounded-none shadow-xl image-full group">
            <p className="text-3xl text-white uppercase font-bold group-hover:-translate-y-8 transition-transform z-10">
              flappy Bird
            </p>
            <Link
              to="/flappy"
              className=" btn btn-primary font-bold rounded-none absolute opacity-0 group-hover:opacity-100 translate-y-0 group-hover:translate-y-8 transition-transform"
            >
              Play Now
            </Link>
          </div>
          <div className="flappy w-full m-auto h-60 mb-4  flex flex-col justify-center items-center rounded-none shadow-xl image-full group">
            <p className="text-3xl text-white uppercase font-bold group-hover:-translate-y-8 transition-transform z-10">
              Tetris game
            </p>
            <Link
              to="/tetrisGame"
              className=" btn btn-primary font-bold rounded-none absolute opacity-0 group-hover:opacity-100 translate-y-0 group-hover:translate-y-8 transition-transform"
            >
              Play Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoDGmaes;
