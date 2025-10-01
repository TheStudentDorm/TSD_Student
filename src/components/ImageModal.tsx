import React, { useEffect } from "react";

interface ImageModalProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt = "", onClose }) => {
  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-auto"
      onClick={onClose} // click outside closes
    >
      <div
        className="relative max-w-[95vw] max-h-[95vh] mx-auto transition-transform transform scale-95 hover:scale-100"
        onClick={(e) => e.stopPropagation()} // stop closing when clicking the image
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg shadow-lg object-contain"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-300"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
