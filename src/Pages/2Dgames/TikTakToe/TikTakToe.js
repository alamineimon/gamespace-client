import React, { useState } from "react";
import useTitle from "../../../Hooks/useTitle/useTitle";
import Board from "./Board/Board";
import Button from "./Button/Button";
import Score from "./Score/Score";

const TikTakToe = () => {
  // setting state at empty string that will change on button click
  const [resultColor, setResultColor] = useState("");
  const [sign, signChange] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [result, setResult] = useState("");
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  useTitle("2D-Games/TikTokToe")
  const clickHandler = (i) => {
    // check if there is already content inside button, if yes do nothing, if no change the textContent
    if (sign[i] === "x" || sign[i] === "o") return;
    // check if there is a winner, if yes return, if no continue game
    if (result.length) return;
    sign[i] = isX ? "x" : "o";
    signChange(sign);
    setIsX(!isX);

    // check every win condition
    checkWinner(0, 1, 2);
    checkWinner(3, 4, 5);
    checkWinner(6, 7, 8);
    checkWinner(0, 3, 6);
    checkWinner(1, 4, 7);
    checkWinner(2, 5, 8);
    checkWinner(0, 4, 8);
    checkWinner(6, 4, 2);
    // draw condition
    draw();
  };
  // check win
  const checkWinner = (x, y, z) => {
    // plyers declaration
    let playerX = "x".repeat(3);
    let playerO = "o".repeat(3);
    // content in the three buttons
    let fieldValues = sign[x] + sign[y] + sign[z];

    if (fieldValues === playerX) {
      setResult("Player X wins!");
      setResultColor("skyblue");
      setScoreX(scoreX + 1);
    } else if (fieldValues === playerO) {
      setResult("Player O wins!");
      setResultColor("yellow");
      setScoreO(scoreO + 1);
    }
  };
  // check draw
  const draw = (_) => {
    // check if all buttons have content for draw
    let allContent = sign.every((e) => e);
    if (allContent && result.length === 0) {
      setResult("The game is tied!");
      setResultColor("red");
    }
  };

  // restart game
  const restartGameHandler = (_) => {
    setResult("");
    signChange(Array(9).fill(null));
  };
  return (
    <>
      <div className="w-11/12 mx-auto py-10">
        <div className="w-full">
          <h1 className="text-center text-2xl lg:text-4xl uppercase text-mainHeading font-bold">
            Tik tak toe
          </h1>
        </div>
        <Score pointX={scoreX} pointO={scoreO} />
        <Board>
          <Button value={sign[0]} onClick={() => clickHandler(0)} />
          <Button value={sign[1]} onClick={() => clickHandler(1)} />
          <Button value={sign[2]} onClick={() => clickHandler(2)} />
          <Button value={sign[3]} onClick={() => clickHandler(3)} />
          <Button value={sign[4]} onClick={() => clickHandler(4)} />
          <Button value={sign[5]} onClick={() => clickHandler(5)} />
          <Button value={sign[6]} onClick={() => clickHandler(6)} />
          <Button value={sign[7]} onClick={() => clickHandler(7)} />
          <Button value={sign[8]} onClick={() => clickHandler(8)} />
        </Board>
        <div className="mb-5 space-y-5">
          {/* <h2 className="text-center">Result &nbsp;</h2> */}
          <h2 className="winner text-center" style={{ color: resultColor }}>
            {result}
          </h2>
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary btn-sm"
            id="restartGame"
            onClick={restartGameHandler}
          >
            Restart game
          </button>
        </div>
      </div>
    </>
  );
};

export default TikTakToe;
