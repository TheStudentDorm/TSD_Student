// src/components/HeroSection.tsx
import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  id: string;
  title: string;
  image: string;
  children: React.ReactNode;
  reverse?: boolean;
  background?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  id,
  title,
  image,
  children,
  reverse = false,
  background = false,
}) => {
  return (
    <section
      id={id}
      className={`relative py-16 px-6 ${
        background ? "text-white" : "text-gray-900"
      }`}
      style={
        background
          ? {
              backgroundImage: `linear-gradient(rgba(2, 6, 111, 0.8), rgba(2, 6, 111, 0.8)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div
        className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text */}
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ff6d34]">
            {title}
          </h2>
          <div className="text-lg">{children}</div>
        </motion.div>

        {/* Image */}
        {!background && (
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: reverse ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={image}
              alt={title}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
