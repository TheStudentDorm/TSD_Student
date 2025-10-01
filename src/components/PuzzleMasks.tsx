import React from "react";

export default function PuzzleMasks() {
  return (
    <svg width={0} height={0}>
      <defs>
        {/* Top Left */}
        <clipPath id="puzzle-tl" clipPathUnits="objectBoundingBox">
          <path
            d="
              M0,0 
              H1 
              V0.5 
              C0.9,0.5 0.9,0.6 1,0.6 
              V1 
              H0 
              Z
            "
          />
        </clipPath>

        {/* Top Right */}
        <clipPath id="puzzle-tr" clipPathUnits="objectBoundingBox">
          <path
            d="
              M0,0 
              H1 
              V1 
              H1
              V0.5 
               C0.5,0.9 0.4,0.9 0.4,1 
              V0 
              Z
            "
          />
        </clipPath>

        {/* Bottom Left */}
        <clipPath id="puzzle-bl" clipPathUnits="objectBoundingBox">
          <path
            d="
              M0,0 
              H0.6 
              C0.6,0.9 0.5,0.9 0.5,1 
              H0 
              V0.5 
              C0.1,0.5 0.1,0.4 0,0.4 
              Z
            "
          />
        </clipPath>

        {/* Bottom Right */}
        <clipPath id="puzzle-br" clipPathUnits="objectBoundingBox">
          <path
            d="
              M0,0 
              H1 
              V0.5 
              C0.9,0.5 0.9,0.6 1,0.6 
              V1 
              H0.5 
              C0.5,0.9 0.4,0.9 0.4,1 
              Z
            "
          />
        </clipPath>
      </defs>
    </svg>
  );
}
