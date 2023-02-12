import React from "react";
import bgVideo2 from "../../../../assets/videos/bg2.mp4";
import Subcribtion from "./Subcribtion";
import "./Subcribtion.css";

const VideoBg = () => {
  return (
    <div className=" w-full min-h-[300px] flex flex-col items-center justify-center relative transition-all">

        <video src={bgVideo2} autoPlay muted loop className="videoBg"></video>

      <div className="bgOverlay">
        
      </div>
      <div className=" lg:mt-64 mt-52   h-full w-full  z-20 ">
      <Subcribtion/>
      </div>
    </div>
  );
};

export default VideoBg;
