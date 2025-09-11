import React from "react";
import { motion } from "framer-motion";

interface ContentSectionProps {
  title: string;
  textBlocks: string[];
  image: string;
  reverse?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  textBlocks,
  image,
  reverse = false,
}) => {
  return (
    <section className="py-16">
      <div
        className={`max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: reverse ? -100 : 100 }} // reversed animation
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center text-[#02066f]">{title}</h2>
          {textBlocks.map((txt, idx) => (
            <p key={idx} className="mb-4 text-gray-800">
              {txt}
            </p>
          ))}
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: reverse ? 100 : -100 }} // reversed animation
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={image}
            alt={title}
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;
