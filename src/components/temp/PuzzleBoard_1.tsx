import React from "react";
import PuzzlePiece from "./PuzzlePiece";

interface PuzzleBoardProps {
  rows?: number;
  cols?: number;
  size?: number;
}

const PuzzleBoard: React.FC<PuzzleBoardProps> = ({ rows = 2, cols = 2, size = 200 }) => {
  // Helper to randomly assign "knob" or "hole" for internal edges
  const opposite = (edge: "knob" | "hole") => (edge === "knob" ? "hole" : "knob");

  // Build grid with edges
  const grid: ("flat" | "knob" | "hole")[][][] = [];

  for (let r = 0; r < rows; r++) {
    grid[r] = [];
    for (let c = 0; c < cols; c++) {
      const top = r === 0 ? "flat" : opposite(grid[r - 1][c][2] as any);
      const left = c === 0 ? "flat" : opposite(grid[r][c - 1][1] as any);
      const right = c === cols - 1 ? "flat" : Math.random() > 0.5 ? "knob" : "hole";
      const bottom = r === rows - 1 ? "flat" : Math.random() > 0.5 ? "knob" : "hole";
      grid[r][c] = [top, right, bottom, left];
    }
  }

  return (
    <div className={`grid`} style={{ gridTemplateColumns: `repeat(${cols}, ${size}px)` }}>
      {grid.flat().map((edges, index) => (
        <PuzzlePiece key={index} size={size} edges={edges} color={`hsl(${(index * 60) % 360},70%,50%)`}>
          {index + 1}
        </PuzzlePiece>
      ))}
    </div>
  );
};

export default PuzzleBoard;