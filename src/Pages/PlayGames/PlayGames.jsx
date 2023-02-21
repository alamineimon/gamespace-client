import React from "react";
import useTitle from "../../Hooks/useTitle/useTitle";
import HtmlGames from "./components/HtmlGames/HtmlGames";
import PlayGamesHeader from "./components/PlayGamesHeader/PlayGamesHeader";

const PlayGames = () => {
  useTitle("HTML-Games");
  return (
    <>
      <PlayGamesHeader />
      <HtmlGames />
    </>
  );
};

export default PlayGames;
