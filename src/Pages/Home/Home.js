import React from "react";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import GameSlider from "./components/GameSlider/GameSlider";
import Header from "./components/Header/Header";
import Subcribtion from "./components/Subcribtion/Subcribtion";


const Home = () => {
  return (
    <div>
      <Header/>
      <FeatureSection />
      <GameSlider />
      <Subcribtion/>
    </div>
  );
};

export default Home;
