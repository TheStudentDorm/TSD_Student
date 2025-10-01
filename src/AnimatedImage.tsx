import React, { useEffect, useRef, useState } from 'react';
import './AnimatedImage.css';

const quadrantCount = 4;
const contentUrls = [
  '/part1.txt',
  '/part2.txt',
  '/part3.txt',
  '/part4.txt',
];

const AnimatedImage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [replacedContent, setReplacedContent] = useState<(string | null)[]>(Array(quadrantCount).fill(null));

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.5,
      }
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

  // Start replacing content after delay
  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      contentUrls.forEach((url, index) => {
        setTimeout(() => {
          fetch(url)
            .then(res => res.text())
            .then(data => {
              setReplacedContent(prev => {
                const updated = [...prev];
                updated[index] = data;
                return updated;
              });
            });
        }, index * 3000); // delay between replacements
      });
    }, 5000); // delay after appearing

    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <div ref={containerRef} className="animated-container">
      {visible && (
        <div className="image-grid">
          {[0, 1, 2, 3].map(index => (
            <div key={index} className={`quadrant q${index}`}>
              {replacedContent[index] ? (
                <div className="content">{replacedContent[index]}</div>
              ) : (
                <div className="image-slice" style={{ backgroundImage: `url('/TSD_Puzzle.png')` }} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedImage;
