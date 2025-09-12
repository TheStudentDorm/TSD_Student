import React from "react";
import { motion } from "framer-motion";

const MissionVision: React.FC = () => {
  return (
    <section className="w-full bg-[#f2f3f4] py-32 flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-6">
  {/* Mission Shard */}
  <motion.div
    className="relative bg-[#002060] text-white p-10 md:p-16 flex-1 flex flex-col justify-center text-center shadow-2xl"
    style={{
      // angled on right to fit vision shard
      clipPath: "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
      borderLeft: "8px solid #ff6d34",
      minHeight: "280px",
    }}
    initial={{ x: -300, opacity: 0, rotate: -2 }}
    whileInView={{ x: 0, opacity: 1, rotate: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl font-bold mb-4 text-white">OUR MISSION</h2>
    <p className="leading-relaxed text-lg">
      To empower students with verified, accessible, and student-focused
      information so they can navigate life in the UAE confidently and
      independently.
    </p>
  </motion.div>

  {/* Vision Shard */}
  <motion.div
    className="relative bg-[#002060] text-white p-10 md:p-16 flex-1 flex flex-col justify-center text-center shadow-2xl"
    style={{
      // angled on left to fit mission shard
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 10 % 50%)",
      borderRight: "8px solid #ff6d34",
      minHeight: "280px",
    }}
    initial={{ x: 300, opacity: 0, rotate: 2 }}
    whileInView={{ x: 0, opacity: 1, rotate: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    <h2 className="text-3xl font-bold mb-4 text-white">OUR VISION</h2>
    <p className="text-lg leading-relaxed text-center md:text-right px-2">
      To become the go-to platform for students across the UAE, making it
      easier for them to study, live, and grow, all in one place.
    </p>
  </motion.div>
</div>

      
    </section>
  );
};

export default MissionVision;
