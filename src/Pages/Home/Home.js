import React from "react";
import ActivePlayers from "./components/ActivePlayers/ActivePlayers";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import GameSlider from "./components/GameSlider/GameSlider";
import Header from "./components/Header/Header";


const Home = () => {
  return (
    <div>
      <Header/>
      <FeatureSection />
      <ActivePlayers/>
      <GameSlider />
    </div>
  );
};

export default Home;
