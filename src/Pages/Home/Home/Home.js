import React from "react";

import FeatureSection from "../FeatureSection/FeatureSection";
import GameSlider from "../GameSlider/GameSlider";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection />
      <FeatureSection />
      <GameSlider />
    </div>
  );
};

export default Home;
