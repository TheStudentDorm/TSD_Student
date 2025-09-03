import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  id: string;
  title: string;
  image: string;
  alt?: string;
  reverse?: boolean;
  background?: boolean;
  children: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  id,
  title,
  image,
  alt,
  reverse,
  background = false,
  children,
}) => {
  if (background) {
    return (
      <section
        id={id}
        className="relative h-[500px] md:h-[600px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-label={alt || title}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Animated Content */}
        <motion.div
          className="relative max-w-3xl px-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <div className="text-lg md:text-xl">{children}</div>
        </motion.div>
      </section>
    );
  }

  // Side-by-side sections
  return (
    <section id={id} className="relative bg-gray-50">
      <div
  className={`max-w-6xl mx-auto px-6 py-16 flex flex-col ${
    reverse ? "md:flex-row-reverse" : "md:flex-row"
  } items-center gap-8 md:gap-12`}
>
  {/* Animated Text */}
  <motion.div
    className="md:w-1/2 text-center md:text-left"
    initial={{ opacity: 0, x: reverse ? 100 : -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <div className="text-lg text-gray-700">{children}</div>
  </motion.div>

  {/* Animated Image with hover zoom */}
  <motion.div
    className="md:w-1/2 overflow-hidden rounded-lg shadow-lg"
    initial={{ opacity: 0, x: reverse ? -100 : 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <img
      src={image}
      alt={alt || title}
      className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-105"
    />
  </motion.div>
</div>

    </section>
  );
};

export default HeroSection;
