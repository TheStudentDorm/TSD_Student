import React from "react";
import { motion } from "framer-motion";

interface HeroSectionSmallProps {
  title: string;
  subtitle?: string;
  caption?: string;
  image: string;
  fixedBackground?: boolean;
  className?: string;
}

export default function HeroSectionSmall({
  title,
  subtitle,
  caption,
  image,
  fixedBackground,
  className=" "
}: HeroSectionSmallProps) {
  return (
    <section
      className={`relative w-full flex items-center justify-center text-center bg-cover bg-center ${className} {
        fixedBackground ? "bg-fixed" : ""
      }`}
      style={{
        backgroundImage: `url(${image})`,
        minHeight: "60vh", // minimum height for small screens
        height: "100vh",   // full viewport height
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-white text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl uppercase sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl">
            {subtitle}
          </p>
        )}
        {caption && (
          <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl">
            {caption}
          </p>
        )}
      </motion.div>
    </section>
  );
}
