import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
      </div>
    </div>
  );
};

export default Loader;
