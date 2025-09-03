// src/components/ScrollHandler.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Small delay ensures layout is ready
    setTimeout(() => {
      if (hash) {
        // Scroll to element if hash exists
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Scroll to top for normal navigation
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);
  }, [pathname, hash]);

  return null;
}
