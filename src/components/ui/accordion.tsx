import React, { useState, useEffect } from "react";

export function Accordion({
  children,
  expandAll = false,
}: {
  children: React.ReactNode;
  expandAll?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    // If expandAll → open all (represented by -1)
    if (expandAll) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(null);
    }
  }, [expandAll]);

  return (
    <div className="divide-y divide-gray-200 border rounded-lg shadow-sm">
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              isOpen: expandAll ? true : openIndex === index,
              onToggle: () =>
                setOpenIndex(openIndex === index ? null : index),
            })
          : child
      )}
    </div>
  );
}

export function AccordionItem({
  title,
  children,
  isOpen,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-4 text-left text-lg font-medium 
        bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-indigo-100 hover:to-blue-100
        transition rounded-t-lg"
      >
        {title}
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="p-4 text-gray-700 bg-white">{children}</div>}
    </div>
  );
}
