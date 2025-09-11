import React from "react";
import { motion } from "framer-motion";
import HeroSectionSmall from "../../components/HeroSectionSmall";
import NavigationButtons from "../../components/NavigationButtons";

const accommodationTips = [
  "Plan your monthly expenses carefully to avoid surprises.",
  "Choose accommodation close to your university and transport.",
  "Only book verified student accommodations for safety.",
  "Communicate expectations with roommates beforehand.",
];

export default function Accommodation() {
  return (
    <main className="max-w-6xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <HeroSectionSmall
        title="Find Student Accommodation"
        subtitle="Discover your next home in the UAE. Verified listings, tips, and guides to make your student housing search simple."
        image="/images/student_acc.jpg"
      />

      {/* Coming Soon */}
      <motion.section
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🏠 Popular Student Accommodations</h2>
        <div className="p-10 bg-white rounded-2xl shadow-md inline-block">
          <p className="text-xl font-semibold text-gray-600">Coming Soon 🚧</p>
          <p className="text-gray-500 mt-2">We’re working hard to bring you verified student housing options.</p>
        </div>
      </motion.section>

      {/* Pro Tips */}
      <motion.div
        className="mt-20 p-6 bg-[#004AAD]/10 border-l-4 border-[#F9943B] rounded-lg max-w-3xl mx-auto cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-bold mb-4 text-[#004AAD]">💡 TSD Pro Tips</h3>
        <ul className="space-y-2">
          {accommodationTips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-3 bg-[#F9943B] rounded-full flex-shrink-0"></span>
              <p className="text-gray-800">{tip}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Navigation */}
      <div className="mt-16">
        <NavigationButtons />
      </div>
    </main>
  );
}
