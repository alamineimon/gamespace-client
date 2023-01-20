import React from "react";
import bgVideo2 from "../../../../assets/videos/bg2.mp4";
import "./Subcribtion.css";

const VideoBg = () => {
  return (
    <div className="videoo relative mx-auto">

        <video src={bgVideo2} autoPlay muted loop className="videoBg"></video>

      <div className="bgOverlay"></div>
    </div>
  );
};

export default VideoBg;
