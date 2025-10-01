import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Textfit from "@namhong2001/react-textfit";

interface Poll {
  question: string;
  options: string[];
}

const polls: Poll[] = [
  {
    question: "What do you do when a class gets boring?",
    options: ["Doodle in notes", "Daydream", "Scroll on phone", "Actually pay attention"],
  },
  {
    question: "Do you prefer studying in the morning or night?",
    options: ["Morning 🌞", "Night 🌙"],
  },
  {
    question: "Best way to relax after a tough exam?",
    options: ["Sleep", "Hang out with friends", "Gaming", "Gym / sports"],
  },
  {
    question: "Which comfort food saves you after a long class?",
    options: ["Pizza", "Burger", "Noodles", "Fries"],
  },
  {
    question: "Which social media do you use the most?",
    options: ["Instagram", "TikTok", "X (Twitter)", "Snapchat"],
  },
];

// 🎨 Color palette for option buttons
const optionColors = [
  "bg-[#fcd34d] hover:bg-[#fbbf24] text-black", // Yellow
  "bg-[#60a5fa] hover:bg-[#3b82f6] text-white", // Blue
  "bg-[#34d399] hover:bg-[#10b981] text-white", // Green
  "bg-[#f87171] hover:bg-[#ef4444] text-white", // Red
];

export default function PollsCard({ className }: { className?: string }) {
  const [poll, setPoll] = useState<Poll | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const todayKey = new Date().toISOString().slice(0, 10); // unique per day
    const index = new Date().getDate() % polls.length;
    const chosenPoll = polls[index];
    setPoll(chosenPoll);

    const savedSelection = localStorage.getItem(`poll-selection-${todayKey}`);
    if (savedSelection) {
      setSelected(savedSelection);
    }
  }, []);

  const handleSelect = (option: string) => {
    if (!poll) return;
    const todayKey = new Date().toISOString().slice(0, 10);
    setSelected(option);
    localStorage.setItem(`poll-selection-${todayKey}`, option);

    // 🎉 Show confetti burst
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  if (!poll) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -6, rotate: -1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-5 text-[#02066f] ${className}`}
      style={{ width: "100%", maxWidth: "650px", minHeight: "250px" }}
    >
      {/* 🎉 Confetti when user votes */}
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={300} />}

      <h3 className="text-lg text-center font-semibold mb-2">🗳️ Student Poll</h3>
      <Textfit mode="single" max={22} className="mb-4 text-center font-bold">
        {poll.question}
      </Textfit>

      {!selected ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-[90%] mx-auto">
          {poll.options.map((option, i) => (
            <motion.button
              key={option}
              onClick={() => handleSelect(option)}
              className={`px-3 py-2 rounded-md text-sm sm:text-base font-medium transition break-words ${
                optionColors[i % optionColors.length]
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {option}
            </motion.button>
          ))}
        </div>
      ) : (
        <p className="text-base font-semibold text-center text-[#02066f]">
          ✅ Thanks for voting! <br />
          You chose: <span className="font-bold">{selected}</span>
        </p>
      )}
    </motion.div>
  );
}
