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

export default function ParallaxBanner({
  image,
  title,
  height = "h-64 sm:h-80 md:h-96",
  overlayOpacity = 0.5,
  speed = 0.5,
}: ParallaxBannerProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffsetY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`relative ${height} bg-cover bg-center flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPositionY: `${offsetY * speed}px`,
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      ></div>

      {/* Title */}
      {title && (
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white z-10 text-center"
        >
          {title}
        </motion.h1>
      )}
    </div>
  );
}
