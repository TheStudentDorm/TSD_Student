import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface TimelineItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
  details?: string[];
  tips?: string[];
  isOpen: boolean;
  onToggle: () => void;
  bgColor: string;
  textColor: string;
  index: number;
  lineColor: string;
  isLast?: boolean;
}

const timelineItemVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function TimelineItem({
  icon: Icon,
  title,
  description,
  details,
  tips,
  isOpen,
  onToggle,
  bgColor,
  textColor,
  index,
  lineColor,
  isLast = false,
}: TimelineItemProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={index}
      variants={timelineItemVariant}
      className="relative"
    >
      {/* Vertical line */}
      {!isLast && (
        <span
          className="absolute left-3 top-0 w-1"
          style={{ height: "100%", backgroundColor: lineColor }}
        />
      )}

      <div
        onClick={onToggle}
        className={`flex items-start gap-3 p-4 rounded-lg transition-all duration-200 cursor-pointer hover:shadow-md hover:bg-opacity-20`}
        style={{ backgroundColor: `${bgColor}/10` }}
      >
        {/* Icon */}
        <span
          className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-white shadow"
          style={{ backgroundColor: bgColor }}
        >
          <Icon size={16} />
        </span>

        <div className="flex-1">
          <h4 className={`font-semibold flex justify-between items-center ${textColor}`}>
            {title}
            <ChevronDown
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </h4>
          <p className="text-gray-600">{description}</p>

          {/* Expanded Content */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-gray-700 text-sm p-3 rounded-lg"
                style={{ backgroundColor: `${bgColor}/20` }}
              >
                {/* Details List */}
                {details && details.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 mb-2">
                    {details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}

                {/* Tips with single heading */}
                {tips && tips.length > 0 && (
                  <div className="mt-2 space-y-1">
                    <p className="text-[#004AAD]/90 font-semibold italic">💡 TSD Pro Tips:</p>
                    <ul className="list-disc list-inside text-gray-700">
                      {tips.map((tip, idx) => (
                        <li key={idx} className="italic">{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
