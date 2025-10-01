import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { quotes, Quote } from "../data/quotesData";

const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const now = new Date();
    const today = now.toISOString().slice(5, 10); // format "MM-DD"
    const todayQuote = quotes.find((q) => q.date === today);

    setQuote(todayQuote || null);
  }, []);

  if (!quote) {
    return (
      <p className="text-center text-gray-700">
        No quote assigned for today.
      </p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -6, rotate: -1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="funzone-card text-[#02066F] w-[650px] max-w-full h-[250px] flex flex-col justify-center text-center p-5 overflow-hidden"
    >
      <h3 className="text-2xl font-semibold mb-3">💡 Quote of the Day</h3>

      <blockquote className="text-xl leading-relaxed italic break-words">
        “{quote.content}”
      </blockquote>

      <p className="mt-3 text-base font-semibold">— {quote.author || "Unknown"}</p>
    </motion.div>
  );
};

export default QuoteOfTheDay;
