import React from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  multiExpand?: boolean; // Allow multiple open
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs, multiExpand = false }) => {
  const [openIndexes, setOpenIndexes] = React.useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (multiExpand) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Animated Answer */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 text-gray-700 bg-white">{faq.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
