import { useEffect, useState } from "react";
import { ChevronDown, Home, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function NavigationButtons() {
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setShowScrollDown(false);
      } else {
        setShowScrollDown(true);
      }

      setShowBackToTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.querySelector("section:nth-of-type(2)");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Down (Hero only) */}
      <AnimatePresence>
        {showScrollDown && (
          <motion.button
            key="scroll-down"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToNextSection}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-200 text-gray-700 p-3 rounded-full shadow hover:bg-gray-300 transition z-40"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Home Button (always visible, fades in on mount) */}
      <motion.div
        key="home-btn"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
      >
        <Link
          to="/"
          className="fixed bottom-6 left-6 bg-gray-200 text-gray-700 p-3 rounded-full shadow hover:bg-gray-300 transition z-40"
          aria-label="Go to home"
        >
          <Home className="w-5 h-5" />
        </Link>
      </motion.div>

      {/* Back to Top (only after scroll) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-gray-200 text-gray-700 p-3 rounded-full shadow hover:bg-gray-300 transition z-40"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
