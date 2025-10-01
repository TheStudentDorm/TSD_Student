import React, { useState } from "react";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";

const icons = ["🍎","🍌","🍇","🍉","🍓","🍒"];

const MemoryFlip = () => {
  const shuffledIcons = [...icons, ...icons].sort(() => Math.random() - 0.5);
  const [cards, setCards] = useState(shuffledIcons.map(icon => ({ icon, flipped: false, matched: false })));
  const [firstCard, setFirstCard] = useState<number | null>(null);
  const [milestone, setMilestone] = useState(false);

  const handleClick = (index: number) => {
    if (cards[index].flipped || cards[index].matched) return;

    const newCards = cards.slice();
    newCards[index].flipped = true;
    setCards(newCards);

    if (firstCard === null) {
      setFirstCard(index);
    } else {
      if (newCards[firstCard].icon === newCards[index].icon) {
        newCards[firstCard].matched = true;
        newCards[index].matched = true;
        setCards(newCards);
        if (newCards.every(c => c.matched)) setMilestone(true);
      } else {
        setTimeout(() => {
          newCards[firstCard].flipped = false;
          newCards[index].flipped = false;
          setCards([...newCards]);
        }, 800);
      }
      setFirstCard(null);
    }
  };

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
            🎉 Memory Master! 🎉
          </motion.div>
        )}
      </AnimatePresence>

      <h3 className="font-semibold mb-2">🃏 Memory Flip</h3>
      <div className="grid grid-cols-3 gap-2 w-48 mx-auto">
        {cards.map((card, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-12 h-12 border text-xl font-bold flex items-center justify-center"
          >
            {card.flipped || card.matched ? card.icon : "❓"}
          </button>
        ))}
      </div>
      <button
        className="mt-3 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={() => {
          setCards(shuffledIcons.map(icon => ({ icon, flipped: false, matched: false })));
          setMilestone(false);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default MemoryFlip;
