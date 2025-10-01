import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RiddleData, riddles } from "../data/RiddleData";

const Riddle = () => {
  const [data, setData] = useState<RiddleData | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const now = new Date();
    const today = now.toISOString().slice(5, 10); // MM-DD format
    const riddleForToday = riddles[today];

    if (riddleForToday) {
      setData(riddleForToday);
    } else {
      const allRiddles = Object.values(riddles);
      const start = new Date(now.getFullYear(), 0, 0);
      const diff = now.getTime() - start.getTime();
      const oneDay = 1000 * 60 * 60 * 24;
      const dayOfYear = Math.floor(diff / oneDay);
      const riddleIndex = dayOfYear % allRiddles.length;
      setData(allRiddles[riddleIndex]);
    }
  }, []);

  if (!data) return <p className="text-center text-white">Loading riddle...</p>;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -6, rotate: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-white p-4 flex flex-col items-center justify-center max-w-md mx-auto"
    >
      <h3 className="text-lg font-semibold text-center mb-4">
        🧩 Riddle of the Day
      </h3>

      <p className="text-center text-gray-200 mb-4 text-base sm:text-lg leading-relaxed break-words">
        "{data.riddle}"
      </p>

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition mb-4 text-sm sm:text-base"
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>

      {showAnswer && (
        <p className="text-center text-green-400 font-semibold text-base sm:text-lg leading-relaxed break-words">
          Answer: {data.answer}
        </p>
      )}
    </motion.div>
  );
};

export default Riddle;
