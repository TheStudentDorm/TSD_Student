import React, { useState } from "react";
import { codyCrossData, CodyCrossItem } from "../data/codyCrossData";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

const CodyCrossCard = () => {
  const [currentItem, setCurrentItem] = useState<CodyCrossItem>(
    codyCrossData[Math.floor(Math.random() * codyCrossData.length)]
  );
  const [guesses, setGuesses] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [milestone, setMilestone] = useState(false);

  const handleGuess = () => {
    if (!input) return;
    const letter = input.toUpperCase();
    if (!guesses.includes(letter)) setGuesses([...guesses, letter]);
    setInput("");
  };

  const revealedWord = currentItem.answer
    .split("")
    .map((letter) => (guesses.includes(letter) ? letter : "_"))
    .join(" ");

  const isComplete = !revealedWord.includes("_");

  return (
    <div className="bg-white rounded-2xl shadow p-6 text-center relative">
      {/* Confetti for correct answer */}
      <AnimatePresence>
        {milestone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Confetti recycle={false} numberOfPieces={300} />
          </motion.div>
        )}
      </AnimatePresence>

      <h3 className="font-semibold mb-2">🧩 CodyCross: Guess the Answer</h3>
      <p className="text-gray-700 mb-3 font-medium">Clue: {currentItem.clue}</p>

      <p className="text-lg font-mono tracking-widest mb-4">{revealedWord}</p>

      {isComplete ? (
        <div>
          <p className="text-green-600 font-semibold">
            🎉 Correct! The answer was "{currentItem.answer}"
          </p>
          <button
            className="mt-3 px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
            onClick={() => {
              const newItem =
                codyCrossData[
                  Math.floor(Math.random() * codyCrossData.length)
                ];
              setCurrentItem(newItem);
              setGuesses([]);
              setInput("");
              setMilestone(true);
              setTimeout(() => setMilestone(false), 4000);
            }}
          >
            Next Clue ▶
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={input}
            maxLength={1}
            onChange={(e) => {
              const val = e.target.value.toUpperCase();
              if (/^[A-Z]$/.test(val)) setInput(val);
            }}
            className="border px-2 py-1 rounded mr-2"
          />
          <button
            onClick={handleGuess}
            className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Guess
          </button>
        </div>
      )}
    </div>
  );
};

export default CodyCrossCard;
