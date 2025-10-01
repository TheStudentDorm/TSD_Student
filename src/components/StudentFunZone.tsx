import { useEffect, useState, useRef } from "react";
import RiddleCard from "../components/RiddleCard";
import OnThisDayCard from "../components/OnThisDayCard";
import PollCard from "../components/PollCard";
import QuoteCard from "./QuoteCard";
import "../style/puzzle.css";
import { Link } from "react-router-dom";

export default function StudentFunZone() {
  const [visibleBoxes, setVisibleBoxes] = useState<number[]>([]);
  const [showImages, setShowImages] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const START_DELAY = 1000; // 1 second
  const ANIMATION_STAGGER = 300;
  const FADE_OUT_DELAY = 6000;
  const CONTENT_SHOW_DELAY = 6500;

  const boxes = ["box1", "box2", "box3", "box4"];

  const pieceContents = [
    { component: <RiddleCard />, textColor: "white" },       // dark blue
    { component: <OnThisDayCard textColor="#F9943B" />, textColor: "white" }, // dark navy
    { component: <PollCard />, textColor: "#002060" },       // orange
    { component: <QuoteCard />, textColor: "#002060" },      // cream/light box
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate puzzle pieces dropping in
          boxes.forEach((_, i) => {
            timers.push(
              setTimeout(() => {
                setVisibleBoxes((prev) =>
                  prev.includes(i) ? prev : [...prev, i]
                );
              }, START_DELAY + i * ANIMATION_STAGGER)
            );
          });

          // Fade out images after delay
          timers.push(
            setTimeout(() => setShowImages(false), START_DELAY + FADE_OUT_DELAY)
          );

          // Show content after delay
          timers.push(
            setTimeout(
              () => setShowContent(true),
              START_DELAY + CONTENT_SHOW_DELAY
            )
          );

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-center text-[#02066f] mb-2">
        Student Fun Zone
      </h2>

      <section className="puzzle-wrapper" ref={sectionRef}>
        <div className="puzzle-container mx-auto">
          {boxes.map((cls, i) => (
            <div
              key={cls}
              className={`box ${cls} ${visibleBoxes.includes(i) ? "visible" : ""} 
                        ${!showImages ? "fade-out" : ""} ${showContent ? "show-content" : ""}`}
            >
              {showContent && (
                <div
                  className={`box-content fade-in`}
                  style={{ color: pieceContents[i].textColor, transitionDelay: `${0.3*i}s` }}
                >
                  {pieceContents[i].component}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* More Fun Link */}
    {/*   <div className="mt-1 text-center">
        <Link
          to="/pages/FunZone"
          className="inline-flex items-center gap-1 text-sm md:text-lg text-[#02066f] font-medium hover:underline hover:text-[#ff6d34] transition-colors duration-300 mb-10"
        >
          More Fun <span className="text-xl">→</span>
        </Link>
      </div> */}
    </div>
  );
}
