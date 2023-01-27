import React from "react";
// import "./Score.css";

const Score = (props) => {
  return (
    <div className="flex justify-center space-x-20 mt-5">
      <h4 className="text-blue-600 font-bold">
        Player_X: &nbsp;&nbsp;{props.pointX}
      </h4>
      <h4 className="text-yellow-500 font-bold">
        Player_O: &nbsp;&nbsp;{props.pointO}
      </h4>
    </div>
  );
};

export default Score;
