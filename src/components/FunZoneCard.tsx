import { motion } from "framer-motion";

export default function FunZoneCard({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -6, rotate: -1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`p-5 bg-[#1e293b] rounded-lg shadow-lg overflow-hidden ${className}`}
      style={{
        width: "550px",
        height: "250px",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <h3 className="text-lg text-white text-center font-semibold mb-2">
        {title}
      </h3>
      <div className="flex-1 flex items-center justify-center text-center">
        {children}
      </div>
    </motion.div>
  );
}
