import React from 'react';
import Tetris from './component/Tetris';
import { useGameOver } from './hooks/useGameOver';
import './TetrisGame.css'

const TetrisGame = () => {
    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    const start = () => resetGameOver();

    return (
        <div className="TetrisGame pb-5">
            <h1 className='text-center text-3xl md:text-4xl font-bold my-5'> Tetris Game</h1>
            {gameOver ? (
                <button className="Button pb-5" onClick={start}>
                    Play Tetris
                </button>
            ) : (
                <Tetris rows={20} columns={10} setGameOver={setGameOver} />
            )}
        </div>
    );
};

export default TetrisGame;