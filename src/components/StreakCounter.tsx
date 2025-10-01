import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

export default function StreakCounter() {
  const [streak, setStreak] = useState(0);
  const [milestone, setMilestone] = useState<number | null>(null);

  useEffect(() => {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem("lastVisit");
    let streakCount = parseInt(localStorage.getItem("streak") || "0");

    if (lastVisit !== today) {
      // Reset if gap > 1 day
      if (
        lastVisit &&
        new Date(today).getTime() - new Date(lastVisit).getTime() > 24 * 60 * 60 * 1000
      ) {
        streakCount = 1;
      } else {
        streakCount = lastVisit ? streakCount + 1 : 1;
      }

      localStorage.setItem("streak", streakCount.toString());
      localStorage.setItem("lastVisit", today);
    }
    setStreak(streakCount);

    // Milestone celebration 🎉
    if ([3, 7, 14, 30, 100].includes(streakCount)) {
      setMilestone(streakCount);
      setTimeout(() => setMilestone(null), 5000);
    }
  }, []);

  // Pick badge based on streak
  function getBadge() {
    if (streak >= 100) return "🏆 Legend (100+ days)";
    if (streak >= 30) return "🌟 Master (30 days)";
    if (streak >= 14) return "🔥 Pro (14 days)";
    if (streak >= 7) return "⚡ Streaker (7 days)";
    if (streak >= 3) return "⭐ Beginner (3 days)";
    return null;
  }

  return (
    <div className="relative p-6 rounded-2xl shadow-md bg-gradient-to-br from-yellow-50 to-orange-100">
      {/* 🎉 Confetti for milestone */}
      {milestone && <Confetti recycle={false} numberOfPieces={300} />}

      <motion.div
        key={streak}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-orange-700">🔥 Daily Streak</h3>
        <p className="text-4xl font-extrabold text-orange-900 mt-2">{streak} days</p>

        {getBadge() && (
          <p className="mt-3 text-lg font-semibold text-indigo-700">
            {getBadge()}
          </p>
        )}
      </motion.div>

      {/* 🎉 Animated badge reveal */}
      <AnimatePresence>
        {milestone && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg px-4 py-2 rounded-lg text-indigo-700 font-bold"
          >
            🎉 Congrats! {milestone}-Day Streak!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
