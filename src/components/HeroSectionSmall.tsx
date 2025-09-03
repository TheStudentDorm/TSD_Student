import React from "react";
import { motion } from "framer-motion";
import NavigationButtons from "./NavigationButtons";

interface HeroSectionSmallProps {
  title: string;
  subtitle?: string;
  icon?: string;
  image: string;
}

export default function HeroSectionSmall({ title, subtitle, icon, image }: HeroSectionSmallProps) {
  return (
    <section
      className="relative w-full h-64 md:h-80 flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <motion.div
        className="relative z-10 px-6 text-white flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {icon && <img src={icon} alt={title} className="w-16 h-16 mb-4" />}
        <h1 className="text-2xl md:text-4xl font-bold mb-2">{title}</h1>
        {subtitle && <p className="text-sm md:text-base max-w-xl">{subtitle}</p>}
      </motion.div>
      
    </section>
  );
}
