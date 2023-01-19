import React from "react";
import FeaturedGames from "./components/FeaturedGames/FeaturedGames";
import ActivePlayers from "./components/ActivePlayers/ActivePlayers";
import Features from "./components/Features/Features";
import GameSlider from "./components/GameSlider/GameSlider";
import Header from "./components/Header/Header";
import Subcribtion from "./components/Subcribtion/Subcribtion";
import ExtraFeatures from "./components/ExtraFeatures/ExtraFeatures";
import ExperianceSection from "./components/FeatureSection/ExperianceSection";

const Home = () => {
  return (
    <div>
      <Header/>
      <ExperianceSection />
      <ActivePlayers/>
      <Features/>
      <ExtraFeatures/>
      <GameSlider />
      <FeaturedGames />
      <Subcribtion/>
    </div>
  );
};

export default Home;
