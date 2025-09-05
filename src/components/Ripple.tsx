import React, { useState, useEffect, useRef } from "react";

interface RippleProps {
  children: React.ReactNode;
  lightColor?: string; // Ripple for dark backgrounds
  darkColor?: string;  // Ripple for light backgrounds
}

export default function Ripple({
  children,
  lightColor = "bg-white/40",
  darkColor = "bg-indigo-400/50",
}: RippleProps) {
  const [ripples, setRipples] = useState<
    { x: number; y: number; size: number; key: number }[]
  >([]);
  const [isDark, setIsDark] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const bg = window.getComputedStyle(containerRef.current).backgroundColor;

    if (bg) {
      // Convert rgb(x,y,z) → brightness
      const rgb = bg.match(/\d+/g)?.map(Number);
      if (rgb && rgb.length >= 3) {
        const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
        setIsDark(brightness < 128);
      }
    }
  }, []);

  const createRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, key: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.key !== newRipple.key));
    }, 600);
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden" onClick={createRipple}>
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          className={`absolute rounded-full animate-ripple ${
            isDark ? lightColor : darkColor
          }`}
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </div>
  );
}
