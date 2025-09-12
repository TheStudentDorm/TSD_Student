// src/components/ImageModal.tsx
import React, { useEffect } from "react";

interface ImageModalProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt = "", onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose(); // Close on ESC key
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose} // Click outside = close
    >
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] object-contain rounded shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent image click from closing
      />
    </div>
  );
};

export default ImageModal;
