import { motion } from "framer-motion";

const tips = [
  "📚 Tip: Break study sessions into 25-minute chunks (Pomodoro).",
  "🧘 Remember to stretch and hydrate every hour!",
  "💻 Check out our instagram for latest posts",
];

export default function TipsCard({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -6, rotate: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`bg-white shadow p-5 ${className}`}
    >
      <h3 className="text-lg font-semibold mb-3">📰 Student Tips & News</h3>
      <ul className="space-y-2 text-sm text-gray-700">
        {tips.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </motion.div>
  );
}
