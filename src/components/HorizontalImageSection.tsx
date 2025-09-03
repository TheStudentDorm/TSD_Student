import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export interface ImageCard {
  id: number;
  image: string;
  title: string;
  caption: string;
  date: string;
  content: string;
}

interface HorizontalImageSectionProps {
  sectionTitle: string;
  sectionCaption?: string;
  images: ImageCard[];
  autoplayInterval?: number; // optional autoplay speed in ms
}

const HorizontalImageSection: React.FC<HorizontalImageSectionProps> = ({
  sectionTitle,
  sectionCaption,
  images,
  autoplayInterval = 3000,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isInView = useInView(sectionRef, { once: true });

  // Auto-center the first card on mount
  useEffect(() => {
    if (scrollRef.current && images.length > 0) {
      const firstCard = scrollRef.current.children[0] as HTMLElement;
      const containerWidth = scrollRef.current.offsetWidth;
      const cardWidth = firstCard.offsetWidth;
      const offset = cardWidth / 2 - containerWidth / 2;
      scrollRef.current.scrollLeft = offset;
    }
  }, [images]);

  // Auto-scroll slightly when section enters viewport
  useEffect(() => {
    if (isInView && scrollRef.current) {
      scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  }, [isInView]);

  // Autoplay scrolling
  useEffect(() => {
    if (!scrollRef.current || hovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const maxScrollLeft =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (scrollRef.current.scrollLeft >= maxScrollLeft) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
        }
      }
    }, autoplayInterval / 60);

    return () => clearInterval(interval);
  }, [hovered, autoplayInterval]);

  // Scroll left/right
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Keyboard navigation for carousel
  const handleCarouselKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") scroll("left");
    if (e.key === "ArrowRight") scroll("right");
  };

  // Keyboard navigation for modal
  const handleModalKeyDown = (e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === "ArrowLeft" && selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
    if (e.key === "ArrowRight" && selectedIndex < images.length - 1)
      setSelectedIndex(selectedIndex + 1);
    if (e.key === "Escape") setSelectedIndex(null);
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleModalKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleModalKeyDown);
    };
  }, [selectedIndex, images.length]);

  return (
    <section
      ref={sectionRef}
      className="my-12 relative px-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      onKeyDown={handleCarouselKeyDown}
    >
      {/* Sticky title and caption */}
      <div className="sticky top-0 bg-white z-20 pb-4 mb-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{sectionTitle}</h2>
          {sectionCaption && <p className="text-gray-600 mt-2">{sectionCaption}</p>}
        </div>
      </div>

      <div className="relative">
        {/* Arrow buttons */}
        <motion.button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll Left"
        >
          &#8249;
        </motion.button>

        <motion.button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll Right"
        >
          &#8250;
        </motion.button>

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 md:w-12 bg-gradient-to-r from-white/80 z-20"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 md:w-12 bg-gradient-to-l from-white/80 z-20"></div>

        {/* Cards container */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 pl-4 pr-4 md:pl-8 md:pr-8 scrollbar-hide"
        >
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              className="flex-shrink-0 w-72 bg-white rounded-lg shadow-lg overflow-hidden snap-center cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedIndex(index)}
            >
              <img src={img.image} alt={img.title} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{img.title}</h3>
                <p className="text-gray-500 text-sm">{img.caption}</p>
                <p className="text-gray-400 text-xs mt-1">{img.date}</p>
                <p className="mt-2 text-gray-700 text-sm">{img.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            {selectedIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(selectedIndex - 1);
                }}
                className="absolute left-4 text-white text-3xl font-bold hover:text-gray-300 z-50"
              >
                &#8249;
              </button>
            )}

            {/* Image */}
            <motion.img
              src={images[selectedIndex].image}
              alt={images[selectedIndex].title}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Right Arrow */}
            {selectedIndex < images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(selectedIndex + 1);
                }}
                className="absolute right-4 text-white text-3xl font-bold hover:text-gray-300 z-50"
              >
                &#8250;
              </button>
            )}

            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300 z-50"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HorizontalImageSection;
