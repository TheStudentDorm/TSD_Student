import React from "react";

interface PuzzlePieceProps {
  size?: number;
  color?: string;
  text: string;
  edgeRight?: "knob" | "hole" | "flat";
  edgeLeft?: "knob" | "hole" | "flat";
  edgeTop?: "knob" | "hole" | "flat";
  edgeBottom?: "knob" | "hole" | "flat";
}

const PuzzlePiece: React.FC<PuzzlePieceProps> = ({
  size = 150,
  color = "#4f46e5",
  text,
  edgeRight = "flat",
  edgeLeft = "flat",
  edgeTop = "flat",
  edgeBottom = "flat",
}) => {
  const knob = 20; // knob/hole size
  const half = size / 2;

  const createEdge = (edge: string, start: string, vertical = false) => {
    if (edge === "flat") return vertical ? `L ${start},${size}` : `L ${size},${start}`;
    const direction = edge === "knob" ? 1 : -1;
    if (vertical) {
      return `c ${0},${knob * direction} ${knob},${knob * direction} ${size / 2},${0}`;
    } else {
      return `c ${knob * direction},0 ${knob * direction},${knob} ${0},${size / 2}`;
    }
  };

  const path = `
    M0,0
    ${createEdge(edgeTop, half)}
    L ${size},0
    ${createEdge(edgeRight, half, true)}
    L ${size},${size}
    ${createEdge(edgeBottom, half)}
    L 0,${size}
    ${createEdge(edgeLeft, half, true)}
    Z
  `;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <path d={path} fill={color} stroke="#000" strokeWidth={2} />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#fff"
        fontSize={20}
        fontWeight="bold"
      >
        {text}
      </text>
    </svg>
  );
};

// Usage example
const PuzzleBoard: React.FC = () => {
  return (
    <div style={{ display: "flex", gap: "-10px", padding: "20px" }}>
      <PuzzlePiece edgeRight="hole" text="POLL" color="#4f46e5" />
      <PuzzlePiece edgeLeft="knob" text="QUIZ" color="#f59e0b" />
    </div>
  );
};

export default PuzzleBoard;
