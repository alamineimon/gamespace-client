import React from "react";
import Loader from "../Shared/Loader/Loader";
import FeaturedGames from "./components/FeaturedGames/FeaturedGames";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import GameSlider from "./components/GameSlider/GameSlider";
import Header from "./components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <FeatureSection />
      <GameSlider />
      <FeaturedGames />
      <Loader />
    </div>
  );
};

export default Home;
