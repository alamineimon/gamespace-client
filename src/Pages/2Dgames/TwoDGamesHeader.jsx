import React from "react";

const TwoDGamesHeader = () => {
  return (
    <div className={`py-10 lg:py-20  bg-cover `}>
      <div className="w-11/12 mx-auto text-center space-y-5">
        <h1
          className={`text-2xl lg:text-4xl capitalize text-mainHeading font-gaming  `}
        >
          Play 2D Games
        </h1>
        <p className={`w-full lg:w-2/4 mx-auto `}>
          Looking for fun and engaging games to play? Check out our website's
          collection of 2D games made with React! With a variety of genres to
          choose from, including platformers, puzzles, and arcade-style games,
          our selection has something for everyone
        </p>
      </div>
    </div>
  );
};

export default TwoDGamesHeader;
