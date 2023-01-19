import React from "react";

import Loader from "../Shared/Loader/Loader";
import FeaturedGames from "./components/FeaturedGames/FeaturedGames";
import ActivePlayers from "./components/ActivePlayers/ActivePlayers";
import Features from "./components/Features/Features";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import GameSlider from "./components/GameSlider/GameSlider";
import Header from "./components/Header/Header";
import Subcribtion from "./components/Subcribtion/Subcribtion";
import ExtraFeatures from "./components/ExtraFeatures/ExtraFeatures";

const Home = () => {
  return (
    <div>
      <Header/>
      <FeatureSection />
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
