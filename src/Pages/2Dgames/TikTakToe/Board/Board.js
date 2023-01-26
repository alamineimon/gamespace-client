import React from "react";
// import "./Board.css";

const Board = (props) => {
  return (
    <div className="w-full max-w-[500px] h-[100vw] sm:h-[500px]  grid grid-cols-3 mx-auto bg-secondary my-5 p-0">
      {props.children}
    </div>
  );
};

export default Board;
