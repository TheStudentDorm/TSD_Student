// src/pages/Transport.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bus, Train, CreditCard, Smartphone } from "lucide-react";
import NavigationButtons from "../../components/NavigationButtons";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Transport() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Parallax effect: move bg slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative py-16 px-6 overflow-hidden">
      {/* 🔹 Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <img
          src="/images/student_trans.jpg" // replace with your bg
          alt="Dubai transport background"
          className="w-full h-full "
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* 🔹 Foreground Content */}
      <div className="relative max-w-5xl mx-auto space-y-16 text-white">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl uppercase sm:text-4xl font-bold">
            Getting Around Dubai & Beyond
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-black">
            Whether you're commuting to class or planning a weekend trip across the UAE, 
            Dubai offers affordable and reliable public transport options for students.
          </p>
        </motion.div>

        {/* Metro */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md text-gray-800"
        >
          <div className="flex items-center gap-3 mb-4">
            <Train className="text-[#004AAD]" size={28} />
            <h2 className="text-2xl font-semibold text-[#004AAD]">Dubai Metro</h2>
          </div>
          <p>
            Dubai’s Metro system is clean, fast, and connects most major areas of the city.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <span className="font-medium">Red Line:</span> Along Sheikh Zayed Road — BurJuman, Dubai Mall, Business Bay, JLT, Internet City, Expo 2020.
            </li>
            <li>
              <span className="font-medium">Green Line:</span> Older areas — Deira, Al Rigga, Union, Al Fahidi, Creek.
            </li>
          </ul>
          <p className="mt-3 text-sm text-gray-600">
            ⏰ Metro runs daily ~5:00 AM–midnight (Sundays open later at 8:00 AM). Always check RTA app.
          </p>
        </motion.div>

        {/* Student Nol Card */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md text-gray-800"
        >
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="text-[#F9943B]" size={28} />
            <h2 className="text-2xl font-semibold text-[#F9943B]">Student Nol Card</h2>
          </div>
          <p>
            Students can get a <span className="font-medium">Blue Nol Card</span> 
            with 50% discounts on Metro, Tram, and local bus rides.
          </p>
          <ul className="list-decimal list-inside mt-2 space-y-1">
            <li>Apply online at rta.ae/nol/apply</li>
            <li>Submit student ID & passport photo</li>
            <li>Pay AED 70</li>
            <li>Tap in/out to travel at discounted rates</li>
          </ul>
          <p className="mt-3 text-sm text-gray-600">
            ⚠️ Local travel only. Annual renewal required.
          </p>
        </motion.div>

        {/* Intercity Buses */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md text-gray-800"
        >
          <div className="flex items-center gap-3 mb-4">
            <Bus className="text-green-600" size={28} />
            <h2 className="text-2xl font-semibold text-green-700">Intercity Buses</h2>
          </div>
          <p>
            Long-distance RTA buses connect Dubai with other emirates. Comfortable, air-conditioned, and budget-friendly.
          </p>
          <p className="mt-3 font-medium">Popular Routes:</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>E100/E101 → Abu Dhabi</li>
            <li>E303/E304/E306/E307 → Sharjah</li>
            <li>E400 → Ajman</li>
            <li>E601 → Ras Al Khaimah</li>
            <li>E700 → Fujairah</li>
          </ul>
        </motion.div>

        {/* RTA App */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
          className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md text-gray-800"
        >
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="text-[#02066f]" size={28} />
            <h2 className="text-2xl font-semibold text-[#02066f]">RTA App</h2>
          </div>
          <p>
            Must-have for students — real-time schedules, route maps, fare estimates, Nol top-up, and live service updates.
          </p>
        </motion.div>

        {/* Navigation */}
        <NavigationButtons back="/student-life" next="/housing" />
      </div>
    </section>
  );
}
