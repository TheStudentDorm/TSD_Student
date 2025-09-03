// src/components/ParallaxBanner.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ParallaxBannerProps {
  image: string;
  title?: string;
  height?: string; // Tailwind height classes
  overlayOpacity?: number;
  speed?: number;
}

export default function ParallaxBanner({ image, title }: ParallaxBannerProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative h-64 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPositionY: `${offsetY * 0.5}px`, // parallax
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-4xl font-bold text-white z-10"
      >
        {title}
      </motion.h1>
    </div>
  );
}
