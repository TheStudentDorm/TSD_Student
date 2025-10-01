import React from "react";

type PuzzlePieceProps = {
  id: string;
  path: string;
  children?: React.ReactNode;
  color: string;
  className?: string;
};

export const PuzzlePiece: React.FC<PuzzlePieceProps> = ({ id, path, children, color, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className={className}
  >
    <defs>
      <clipPath id={`clip-${id}`}>
        <path d={path} />
      </clipPath>
    </defs>

    {/* background fill */}
    <path d={path} fill={color} stroke="#111" strokeWidth="2" />

    {/* children clipped to shape */}
    <foreignObject
      width="200"
      height="200"
      clipPath={`url(#clip-${id})`}
    >
      <div className="w-full h-full flex items-center justify-center p-4">
        {children}
      </div>
    </foreignObject>
  </svg>
);
