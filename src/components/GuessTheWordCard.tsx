import React, { useState } from "react";
import { wordsData } from "../data/wordsData";

const GuessTheWordCard = () => {
  const [word, setWord] = useState<string>(
    wordsData[Math.floor(Math.random() * wordsData.length)]
  );
  const [guesses, setGuesses] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleGuess = () => {
    if (input && !guesses.includes(input.toLowerCase())) {
      setGuesses([...guesses, input.toLowerCase()]);
    }
    setInput("");
  };

  const revealedWord = word
    .split("")
    .map((letter) => (guesses.includes(letter.toLowerCase()) ? letter : "_"))
    .join(" ");

  const isComplete = !revealedWord.includes("_");

  return (
    <div className="bg-white rounded-2xl shadow p-6 text-center">
      <h3 className="font-semibold mb-2">🔤 Guess the Word</h3>
      <p className="text-lg font-mono tracking-widest mb-4">{revealedWord}</p>

      {isComplete ? (
        <p className="text-green-600 font-semibold">🎉 You guessed it! The word was "{word}"</p>
      ) : (
        <div>
          <input
            type="text"
            value={input}
            maxLength={1}
            onChange={(e) => setInput(e.target.value)}
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

export default GuessTheWordCard;
