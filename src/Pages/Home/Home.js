import React from "react";
import ActivePlayers from "./components/ActivePlayers/ActivePlayers";
import Features from "./components/Features/Features";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import GameSlider from "./components/GameSlider/GameSlider";
import Header from "./components/Header/Header";
import Subcribtion from "./components/Subcribtion/Subcribtion";


const Home = () => {
  return (
    <div>
      <Header/>
      <FeatureSection />
      <ActivePlayers/>
      <Features></Features>
      <GameSlider />
      <Subcribtion/>
    </div>
  );
};

export default Home;
