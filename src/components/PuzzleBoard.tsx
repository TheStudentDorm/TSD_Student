import { useState, useRef, useEffect } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

import RiddleCard from "../components/RiddleCard";
import OnThisDayCard from "../components/OnThisDayCard";
import PollCard from "../components/PollCard";
import GuessTheWordCard from "../components/GuessTheWordCard";
import QuoteCard from "../components/QuoteCard";
import StreakCounter from "../components/StreakCounter";

import "../style/puzzle6.css";

interface PuzzlePiece {
  id: number;
  component: JSX.Element;
  correctPosition: { x: number; y: number };
  colorClass: string;
  image: string;
}

const StudentFunZone = () => {
  const containerWidth = 1290;
  const containerHeight = 600;
  const pieceWidth = 430;
  const pieceHeight = 300;
  const snapThreshold = 40; // pixels

  // Puzzle pieces with background positions
  const pieces: PuzzlePiece[] = [
  { id: 0, component: <RiddleCard />, correctPosition: { x: 0, y: 0 }, colorClass: "box1", image: "/images/puzzle/image_part_001.png" },
  { id: 1, component: <OnThisDayCard />, correctPosition: { x: 430, y: 0 }, colorClass: "box2", image: "/images/puzzle/image_part_002.png" },
  { id: 2, component: <PollCard />, correctPosition: { x: 860, y: 0 }, colorClass: "box3", image: "/images/puzzle/image_part_003.png" },
  { id: 3, component: <GuessTheWordCard />, correctPosition: { x: 0, y: 300 }, colorClass: "box4", image: "/images/puzzle/image_part_004.png" },
  { id: 4, component: <QuoteCard />, correctPosition: { x: 430, y: 300 }, colorClass: "box5", image: "/images/puzzle/image_part_005.png" },
  { id: 5, component: <StreakCounter />, correctPosition: { x: 860, y: 300 }, colorClass: "box6", image: "/images/puzzle/image_part_006.png" },
];

 const { width, height } = useWindowSize();

  // Generate random scattered start positions
  const generateScatteredPositions = (count: number) => {
    const positions: { x: number; y: number }[] = [];
    for (let i = 0; i < count; i++) {
      positions.push({
        x: Math.random() * (containerWidth - pieceWidth),
        y: Math.random() * (containerHeight - pieceHeight) + 100,
      });
    }
    return positions;
  };

  const [piecePositions, setPiecePositions] = useState<{ x: number; y: number }[]>(
    generateScatteredPositions(pieces.length)
  );
  const [piecesPlaced, setPiecesPlaced] = useState<boolean[]>(Array(pieces.length).fill(false));
  const [showImage, setShowImage] = useState(true); // always show images on pieces
  const [showContent, setShowContent] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [draggingId, setDraggingId] = useState<number | null>(null);

  const pieceRefs = pieces.map(() => useRef<HTMLDivElement>(null));

  const handleDrag = (index: number, e: DraggableEvent, data: DraggableData) => {
    const updatedPositions = [...piecePositions];
    updatedPositions[index] = { x: data.x, y: data.y };
    setPiecePositions(updatedPositions);
  };

  const handleStop = (index: number, e: DraggableEvent, data: DraggableData) => {
    setDraggingId(null);
    const piece = pieces[index];
    const dx = Math.abs(data.x - piece.correctPosition.x);
    const dy = Math.abs(data.y - piece.correctPosition.y);

    if (dx < snapThreshold && dy < snapThreshold) {
      const updatedPositions = [...piecePositions];
      updatedPositions[index] = { ...piece.correctPosition };
      setPiecePositions(updatedPositions);

      const updatedPlaced = [...piecesPlaced];
      updatedPlaced[index] = true;
      setPiecesPlaced(updatedPlaced);
    }
  };

  // Puzzle completion effect
  useEffect(() => {
    if (piecesPlaced.every((p) => p)) {
      setShowConfetti(true);

      const timer = setTimeout(() => {
        setShowImage(false); // fade out images
        setShowContent(true); // show contents
        setShowConfetti(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [piecesPlaced]);

  return (
    <div className="puzzle-wrapper">
      {showConfetti && <Confetti width={width} height={height} />}
      <div className="puzzle-container" style={{ position: "relative" }}>
        {pieces.map((piece, index) => (
          <Draggable
            key={piece.id}
            nodeRef={pieceRefs[index]}
            bounds="parent"
            onStart={() => setDraggingId(index)}
            onDrag={(e, data) => handleDrag(index, e, data)}
            onStop={(e, data) => handleStop(index, e, data)}
            position={piecePositions[index]}
          >
            <div
              ref={pieceRefs[index]}
              className={`box ${piece.colorClass} ${draggingId === index ? "dragging" : ""} ${
                piecesPlaced[index] ? "placed" : ""
              }`}
              style={{ zIndex: draggingId === index ? 10 : 1 }}
            >
              {/* Background image slice */}
              <motion.div
                className="absolute inset-0 rounded-md"
                style={{
                  backgroundImage: `url(${piece.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                animate={{ opacity: showImage ? 1 : 0 }}
                transition={{ duration: 1.5 }}
              />

              {/* Content (revealed after image fades) */}
              <AnimatePresence>
                {showContent && piecesPlaced[index] && (
                  <motion.div
                    className="box-content relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.5, duration: 0.8 }}
                  >
                    {piece.component}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Draggable>
        ))}

        {/* Puzzle complete message */}
        <AnimatePresence>
          {piecesPlaced.every((p) => p) && showImage && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-4xl font-bold text-white drop-shadow-lg bg-black/40 px-6 py-3 rounded-2xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                ✨ Puzzle Complete!
              </motion.h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StudentFunZone;