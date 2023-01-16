import React from "react";
import Loader from "../Shared/Loader/Loader";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import GameSlider from "./components/GameSlider/GameSlider";
import Header from "./components/Header/Header";


const Home = () => {
  return (
    <div>
      <Header/>
      {/* <HeroSection /> */}
      <FeatureSection />
      <GameSlider />
      <Loader/>
    </div>
  );
};

export default Home;
