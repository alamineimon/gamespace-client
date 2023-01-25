import React, { useEffect, useState } from "react";
import styled from "styled-components";
const GAME_HEIGHT = 500;
const GAME_WIDTH = 500;
const BIRD_SIZE = 20;
const GRAVITY = 5;
const JUMP_GEIGHT = 100;

const Flappy = () => {
  const [birdPosition, setBirdPosition] = useState(400);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    let timeId;
    if (gameStarted && birdPosition < GAME_HEIGHT-BIRD_SIZE) {
      timeId = setInterval(() => {
        setBirdPosition((birdPosition) => birdPosition + GRAVITY);
      }, 24);
    }
    return () => {
      clearInterval(timeId);
    };
  });

  const handleClick = () => {
    let newBirdPosition = birdPosition - JUMP_GEIGHT;
    
    if(!gameStarted){
        setGameStarted(true)
    } else if (newBirdPosition < 0) {
      setBirdPosition(-400);
    } else {
      setBirdPosition(newBirdPosition);
    }
  };

  return (
      <Div onClick={handleClick}>
        <GameBox height={GAME_HEIGHT} width={GAME_WIDTH}>
          <Brid size={BIRD_SIZE} top={birdPosition}></Brid>
        </GameBox>
      </Div>

  );
};

export default Flappy;

const Brid = styled.div`
  position: absolute;
  background-color: red;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 505px;
  background-color: aquamarine;
//   margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

const GameBox = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background: blue;
`;
