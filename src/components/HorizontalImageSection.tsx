import React, { useState } from "react";
import { motion } from "framer-motion";

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
  sectionCaptions: string[];
  images: ImageCard[];
}

const ImageGridSection: React.FC<HorizontalImageSectionProps> = ({
  sectionTitle,
  sectionCaptions,
  images,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="my-12 px-4">
      {/* Section title and captions */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#002060]">{sectionTitle}</h2>
        {sectionCaptions.map((caption, i) => (
          <p key={i} className="text-black text-lg mt-1">
            {caption}
          </p>
        ))}
      </div>

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={img.image}
              alt={img.title}
              className="w-full h-full object-cover"
            />

            {/* Hover overlay with title */}
            <div className="absolute inset-0 bg-[#002060]/70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <h3 className="text-[#ff6d34] text-xl font-semibold">
                {img.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {selectedIndex !== null && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white rounded-lg shadow-lg max-w-3xl w-[90%] max-h-[90%] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 text-[#002060] text-2xl font-bold hover:text-[#ff6d34]"
            >
              &times;
            </button>

            <img
              src={images[selectedIndex].image}
              alt={images[selectedIndex].title}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-[#002060] mb-2">
              {images[selectedIndex].title}
            </h2>
            <p className="text-sm text-[#ff6d34]">{images[selectedIndex].date}</p>
            <p className="mt-4 text-[#002060]">{images[selectedIndex].caption}</p>
            <p className="mt-2 text-gray-700">{images[selectedIndex].content}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ImageGridSection;
