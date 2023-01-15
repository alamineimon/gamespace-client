import React from "react";
import FeatureSection from "../../../Components/FeatureSection/FeatureSection";
import GameSlider from "../../../Components/GameSlider/GameSlider";
import Header from "../../../Components/Header/Header";


// import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <HeroSection /> */}
      <FeatureSection />
      <GameSlider />
    </div>
  );
};

export default Home;
