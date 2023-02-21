import React from "react";
import FeaturedGames from "./components/FeaturedGames/FeaturedGames";
import Features from "./components/Features/Features";
import GameSlider from "./components/GameSlider/GameSlider";
import Header from "./components/Header/Header";
import ExtraFeatures from "./components/ExtraFeatures/ExtraFeatures";
import VideoBg from "./components/Subcribtion/VideoBg";
import ExperianceSection from "./components/ExperianceSection/ExperianceSection";
import PopularGames from "./components/PopularGames/PopularGames";
import useTitle from "../../Hooks/useTitle/useTitle";


const Home = () => {
  useTitle("Home")
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
    </div>
  );
};

export default Home;
