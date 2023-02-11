import React from "react";
import FeaturedGames from "./components/FeaturedGames/FeaturedGames";
import Features from "./components/Features/Features";
import GameSlider from "./components/GameSlider/GameSlider";
import Header from "./components/Header/Header";
import Subcribtion from "./components/Subcribtion/Subcribtion";
import ExtraFeatures from "./components/ExtraFeatures/ExtraFeatures";
import VideoBg from "./components/Subcribtion/VideoBg";
import ExperianceSection from "./components/ExperianceSection/ExperianceSection";
import PopularGames from "./components/PopularGames/PopularGames";


const Home = () => {
  return (
    <div>
      <Header />
      <ExperianceSection />
      <Features/>
      <ExtraFeatures/>
      <GameSlider />
      <FeaturedGames />
      <PopularGames />
      <VideoBg />
      <Subcribtion />
    </div>
  );
};

export default Home;
