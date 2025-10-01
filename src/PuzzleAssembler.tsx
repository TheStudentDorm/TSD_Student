import React, { useEffect, useRef, useState } from 'react';
import './PuzzleAssembler.css';

const PuzzleAssembler: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Show when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="puzzle-container" ref={containerRef}>
      <div className={`puzzle-grid ${visible ? 'visible' : ''}`}>
        <img src="/puzzle_top_left.png" alt="Top Left" className="puzzle-piece top-left" />
        <img src="/puzzle_top_right.png" alt="Top Right" className="puzzle-piece top-right" />
        <img src="/puzzle_bottom_left.png" alt="Bottom Left" className="puzzle-piece bottom-left" />
        <img src="/puzzle_bottom_right.png" alt="Bottom Right" className="puzzle-piece bottom-right" />
      </div>
    </div>
  );
};

export default PuzzleAssembler;
