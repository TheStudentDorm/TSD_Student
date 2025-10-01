import React, { useState } from "react";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";

const words = ["campus","library","coffee","exam","coding"];

const Hangman = () => {
  const [word] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessed, setGuessed] = useState<string[]>([]);
  const maxWrong = 6;
  const [milestone, setMilestone] = useState(false);

  const handleGuess = (letter: string) => {
    if (!guessed.includes(letter)) setGuessed([...guessed, letter]);
  };

  const wrongGuesses = guessed.filter(l => !word.includes(l)).length;
  const displayWord = word.split("").map(l => (guessed.includes(l) ? l : "_")).join(" ");
  const isWon = !displayWord.includes("_");
  const isLost = wrongGuesses >= maxWrong;

  if (isWon && !milestone) setMilestone(true);

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
            🎉 Hangman Hero! 🎉
          </motion.div>
        )}
      </AnimatePresence>

      <h3 className="font-semibold mb-2">👤🪢 Hangman</h3>
      <p className="mb-2">{displayWord}</p>
      <p className="mb-2">Wrong guesses: {wrongGuesses}/{maxWrong}</p>
      {isWon && <p className="text-green-600 font-bold">🎉 You Won!</p>}
      {isLost && <p className="text-red-600 font-bold">Game Over! Word: {word}</p>}
      <div className="grid grid-cols-7 gap-1 mt-2">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(l => (
          <button
            key={l}
            onClick={() => handleGuess(l.toLowerCase())}
            disabled={guessed.includes(l.toLowerCase()) || isWon || isLost}
            className={`p-1 rounded ${guessed.includes(l.toLowerCase()) ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`}
          >
            {l}
          </button>
        ))}
      </div>
      <button
        className="mt-3 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={() => window.location.reload()}
      >
        Reset
      </button>
    </div>
  );
};

export default Hangman;
