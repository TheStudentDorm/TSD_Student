import React, { useState } from "react";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [milestone, setMilestone] = useState(false);

  const winner = calculateWinner(board);

  function calculateWinner(squares: (string | null)[]) {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (const [a,b,c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const handleClick = (i: number) => {
    if (board[i] || winner) return;
    const newBoard = board.slice();
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    if (calculateWinner(newBoard)) setMilestone(true);
  };

  const status = winner ? `Winner: ${winner}` : `Next: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="bg-white rounded-2xl shadow p-4 text-center relative">
      {milestone && <Confetti recycle={false} numberOfPieces={300} />}
      <AnimatePresence>
        {milestone && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow text-green-700 font-bold"
          >
            🎉 Tic-Tac-Toe Champion! 🎉
          </motion.div>
        )}
      </AnimatePresence>

      <h3 className="font-semibold mb-2"> ❌⭕ Tic-Tac-Toe</h3>
      <p className="mb-2">{status}</p>
      <div className="grid grid-cols-3 gap-1 w-48 mx-auto">
        {board.map((val, i) => (
          <button
            key={i}
            className="w-12 h-12 border text-xl font-bold"
            onClick={() => handleClick(i)}
          >
            {val}
          </button>
        ))}
      </div>
      <button
        className="mt-3 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={() => { setBoard(Array(9).fill(null)); setMilestone(false); }}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
