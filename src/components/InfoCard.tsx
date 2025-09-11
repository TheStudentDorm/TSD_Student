import React from "react";
import { motion, MotionProps } from "framer-motion";

interface InfoCardProps extends MotionProps {
  title: string;
  text: string;
  dark?: boolean;
  textColor?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, text, dark, textColor, ...motionProps }) => {
  return (
    <motion.div
      className={`p-6 rounded-lg shadow-md cursor-pointer ${
        dark ? "bg-[#002060] text-white" : "bg-white text-[#02066f]"
      }`}
      style={{ color: textColor || undefined }}
      {...motionProps}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{text}</p>
    </motion.div>
  );
};

export default InfoCard;
