import React, { useState } from 'react';
import "./tic-tac-toe.css";

export default function TicTacToe  () {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const draw = board.every((square) => square !== null);
  const nextPlayer = isXNext ? 'X' : 'O';

  const handleClick = (index) => {
    if (board[index] || winner) return;
    board[index] = isXNext ? 'X' : 'O';
    setBoard(board);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(!isXNext);
  };

  return (
    <div className="container">
      <h1 className="title">
        {winner ? `${winner} wins!` : draw ? "It's a draw!" : `Next Player: ${nextPlayer}`}
      </h1>
      <div className="board">
        {board.map((value, index) => (
          <div key={index} className="boxes" onClick={() => handleClick(index)}>
            {value === 'X' ? 'X' : null}
            {value === 'O' ? 'O' : null}
          </div>
        ))}
      </div>
      <button className="reset" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};


