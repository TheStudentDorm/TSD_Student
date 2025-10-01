import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

import RiddleCard from "../components/RiddleCard";
import OnThisDayCard from "../components/OnThisDayCard";
import PollCard from "../components/PollCard";
import QuoteCard from "./QuoteCard";

export default function PuzzleAnimation(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { once: true });
  const { width, height } = useWindowSize();

  const components = [
    <RiddleCard key="riddle" />,
    <OnThisDayCard key="ontoday" />,
    <PollCard key="poll" />,
    <QuoteCard key="quote" />,
  ];

  // Slots (2x2 grid)
  const slots = useMemo(
    () => [
      { top: "0%", left: "0%" },
      { top: "0%", left: "50%" },
      { top: "50%", left: "0%" },
      { top: "50%", left: "50%" },
    ],
    []
  );

  // Pieces
  const pieces = useMemo(
    () => [
      { slotIndex: 0, image: "images/tsd-puz/new/piece1.png" },
      { slotIndex: 1, image: "images/tsd-puz/new/piece2.png" },
      { slotIndex: 2, image: "images/tsd-puz/new/piece3.png" },
      { slotIndex: 3, image: "images/tsd-puz/new/piece4.png" },
    ],
    []
  );

  // Random start positions
  const randomOffsets = useMemo(
    () =>
      pieces.map(() => ({
        top: `${Math.random() * 60 + 20}%`,
        left: `${Math.random() * 60 + 20}%`,
      })),
    [pieces]
  );

  const [pieceSize, setPieceSize] = useState(0);
  const [placed, setPlaced] = useState<boolean[]>(Array(pieces.length).fill(false));
  const [highlight, setHighlight] = useState<boolean[]>(Array(pieces.length).fill(false));
  const [snapAnim, setSnapAnim] = useState<boolean[]>(Array(pieces.length).fill(false));
  const [celebrate, setCelebrate] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // --- update piece size on resize
  useEffect(() => {
    function updatePieceSize() {
      if (!containerRef.current) return;
      const boardWidth = containerRef.current.clientWidth;
      const basePiece = boardWidth / 2;
      const knobExtra = basePiece * 0.15; // 15% for knobs
      setPieceSize(basePiece + knobExtra);
    }
    updatePieceSize();
    window.addEventListener("resize", updatePieceSize);
    return () => window.removeEventListener("resize", updatePieceSize);
  }, []);

  // --- helper: get slot center
  function getSlotCenter(slotIndex: number) {
    const container = containerRef.current?.getBoundingClientRect();
    if (!container) return null;
    const slot = slots[slotIndex];
    const slotLeftPct = parseFloat(slot.left) / 100;
    const slotTopPct = parseFloat(slot.top) / 100;
    const centerX = container.left + (slotLeftPct + 0.25) * container.width;
    const centerY = container.top + (slotTopPct + 0.25) * container.height;
    return { centerX, centerY };
  }

  function getPieceCenter(info: { point: { x: number; y: number } }) {
    return {
      centerX: info.point.x + pieceSize / 2,
      centerY: info.point.y + pieceSize / 2,
    };
  }

  // --- drag handling
  function handleDrag(index: number, info: { point: { x: number; y: number } }) {
    if (placed[index]) return;
    const slotCenter = getSlotCenter(index);
    if (!slotCenter) return;
    const pieceCenter = getPieceCenter(info);
    const tolerance = 60;
    const close =
      Math.abs(pieceCenter.centerX - slotCenter.centerX) < tolerance &&
      Math.abs(pieceCenter.centerY - slotCenter.centerY) < tolerance;
    setHighlight((prev) => prev.map((_, i) => (i === index ? close : false)));
  }

  function handleDrop(index: number, info: { point: { x: number; y: number } }) {
    if (placed[index]) return;
    const slotCenter = getSlotCenter(index);
    if (!slotCenter) return;
    const pieceCenter = getPieceCenter(info);
    const tolerance = 60;
    const isClose =
      Math.abs(pieceCenter.centerX - slotCenter.centerX) < tolerance &&
      Math.abs(pieceCenter.centerY - slotCenter.centerY) < tolerance;

    if (isClose) {
      setPlaced((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
      setSnapAnim((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
      setTimeout(() => {
        setSnapAnim((prev) => {
          const next = [...prev];
          next[index] = false;
          return next;
        });
      }, 400);
    }
    setHighlight((prev) => prev.map((_, i) => (i === index ? false : prev[i])));
  }

  // --- celebrate when all placed
  useEffect(() => {
    if (placed.every(Boolean)) {
      setCelebrate(true);
      const timer = setTimeout(() => {
        setShowContent(true);
        setCelebrate(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [placed]);

  return (
    <div ref={containerRef} className="w-full max-w-5xl mx-auto mb-16 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center tracking-wide uppercase mb-8">
        Student Fun Zone
      </h2>

      {celebrate && <Confetti width={width} height={height} numberOfPieces={150} />}

      <motion.div
        className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-md"
        animate={
          celebrate
            ? { scale: [1, 1.05, 0.95, 1], rotate: [0, 2, -2, 0] }
            : { scale: 1, rotate: 0 }
        }
        transition={{ duration: 0.8 }}
      >
        {/* Slots */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 p-3">
          {slots.map((_, i) => (
            <div
              key={i}
              className={`rounded-lg transition-all duration-200 border-2 border-dashed ${
                highlight[i]
                  ? "border-blue-500 shadow-[0_10px_30px_rgba(59,130,246,0.18)] bg-blue-50"
                  : "border-gray-300 bg-gray-100/40"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Puzzle Phase */}
          {inView && !showContent && (
            <div className="absolute inset-0">
              {pieces.map((p, idx) => {
                const slot = slots[p.slotIndex];
                const topValue = placed[idx] ? slot.top : randomOffsets[idx].top;
                const leftValue = placed[idx] ? slot.left : randomOffsets[idx].left;

                return (
                  <motion.img
                    key={idx}
                    src={p.image}
                    alt={`Puzzle piece ${idx + 1}`}
                    drag={!placed[idx]}
                    dragConstraints={containerRef}
                    dragMomentum={false}
                    onDrag={(_, info) => handleDrag(idx, info)}
                    onDragEnd={(_, info) => handleDrop(idx, info)}
                    whileTap={{ scale: 0.95 }}
                    whileDrag={{ scale: 1.05 }}
                    animate={snapAnim[idx] ? { scale: [1, 0.9, 1.05, 1] } : {}}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: pieceSize,
                      height: pieceSize,
                      top: topValue,
                      left: leftValue,
                      transform: "translateZ(0)",
                      touchAction: "none",
                    }}
                  />
                );
              })}

              {/* Instructions */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-lg md:text-2xl font-semibold text-gray-700 bg-white/80 px-4 py-2 rounded-lg">
                  Drag pieces into slots — they glow when near.
                </p>
              </div>
            </div>
          )}

          {/* Content Phase */}
          {showContent && (
            <div className="absolute inset-0">
              {slots.map((slot, i) => (
                <div
                  key={i}
                  className="absolute w-1/2 h-1/2"
                  style={{ top: slot.top, left: slot.left }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    {components[i]}
                  </div>
                </div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
