import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  reverse?: boolean;
  background?: boolean; // use gradient if true
}

const HeroSection: React.FC<HeroSectionProps> = ({
  id,
  title,
  children,
  reverse = false,
  background = false,
}) => {
  return (
    <section
      id={id}
      className={`relative py-16 px-6 ${
        background ? "text-white" : "text-gray-900"
      } flex items-center justify-center`}
      style={
        background
          ? {
              background: "linear-gradient(135deg, #004AAD, #F9943B)",
              minHeight: "400px",
            }
          : {}
      }
    >
      {/* Centered container */}
      <motion.div
        className="relative z-10 max-w-3xl text-center flex flex-col items-center justify-center space-y-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>

        {/* Each paragraph in one line */}
        <div className="text-lg flex flex-col items-center space-y-2">
          {React.Children.map(children, (child) => (
            <span className="whitespace-nowrap">{child}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
