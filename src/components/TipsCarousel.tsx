import React, { useRef, useEffect, useState } from "react";

interface Tip {
  title: string;
  description: string;
}

interface TipsCarouselProps {
  tips: Tip[];
  duration?: number; // seconds for full scroll
}

export default function TipsCarousel({ tips, duration = 30 }: TipsCarouselProps) {
  const scrollingTips = [...tips, ...tips]; // duplicate for seamless scroll
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tipsElements = Array.from(container.querySelectorAll(".tip-item"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        });
      },
      {
        root: container,
        threshold: 0.6, // at least 60% visible to be active
      }
    );

    tipsElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full py-6">
      {/* Rounded container with gradient background and hover effect */}
      <div className="relative overflow-x-auto whitespace-nowrap bg-gradient-to-r from-indigo-50 via-white to-indigo-50 rounded-xl shadow-md p-4 cursor-grab select-none transition-transform duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:scroll-pause">
        {/* Gradient fade edges */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-indigo-50 to-transparent pointer-events-none rounded-l-xl"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-indigo-50 to-transparent pointer-events-none rounded-r-xl"></div>

        {/* Scroll container with CSS animation */}
        <div
          ref={containerRef}
          className="flex animate-marquee items-center"
          style={{ animationDuration: `${duration}s` }}
        >
          {scrollingTips.map((tip, idx) => (
            <span
              key={idx}
              data-index={idx}
              className={`tip-item inline-flex items-start mr-12 text-gray-800 font-medium text-sm md:text-base transition-transform duration-300 ${
                activeIndex === idx ? "scale-105 text-indigo-600" : ""
              }`}
            >
              <strong className="mr-1">{tip.title}:</strong>
              <span>{tip.description}</span>
            </span>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            min-width: max-content;
            animation-name: marquee;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          .hover\\:scroll-pause:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
}
