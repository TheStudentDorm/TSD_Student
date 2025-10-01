export const puzzlePaths = [
  // 1. Top-left (flat top + left, knob right, knob bottom)
  `
    M0,0 
    H140 C160,0 160,60 140,60 H200 
    V140 C200,160 140,160 140,140 V200 
    H0 Z
  `,

  // 2. Top-middle (flat top, hole left, knob right, knob bottom)
  `
    M0,0 
    H60 C40,0 40,60 60,60 H140 C160,60 160,0 140,0 H200
    V140 C200,160 140,160 140,140 V200 H0
    V140 C0,160 60,160 60,140 V60 C60,40 0,40 0,60 Z
  `,

  // 3. Top-right (flat top + right, hole left, knob bottom)
  `
    M0,0 
    H200 V200 H60 
    C40,160 40,200 60,200 H140 
    C160,200 160,140 140,140 V200 H0 
    V140 C0,160 60,160 60,140 V60 C60,40 0,40 0,60 Z
  `,

  // 4. Bottom-left (flat left, knob right, hole top, flat bottom)
  `
    M0,0 
    H140 C160,0 160,-60 140,-60 H200 
    V200 H0 Z
  `,

  // 5. Bottom-middle (hole left, knob right, hole top, flat bottom)
  `
    M0,0 
    H60 C40,0 40,-60 60,-60 H140 C160,-60 160,0 140,0 H200
    V200 H0 
    V140 C0,160 60,160 60,140 V60 C60,40 0,40 0,60 Z
  `,

  // 6. Bottom-right (flat right, hole left, hole top, flat bottom)
  `
    M0,0 
    H200 V200 H0 
    V140 C0,160 60,160 60,140 V60 C60,40 0,40 0,60 Z
    H140 C160,0 160,-60 140,-60 H200 Z
  `,
];
