// src/pages/Transport.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bus, Train, CreditCard, Smartphone, Italic } from "lucide-react";
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
              <span className="font-medium text-red-500">Red Line:  </span> Runs along E11 Sheikh Zayed Road, stopping at key locations like BurJuman, Dubai Mall, Business Bay, JLT, Dubai Internet City, and ending at Expo 2020.
            </li>
            <li>
              <span className="font-medium text-green-500">Green Line:  </span> Covers older parts of the city including Deira, Al Rigga, Union, Al Fahidi, and Creek.
            </li>
            
          </ul><br></br>
          <p className="text-sm"> Metro Timings: Metro runs daily, starting around 5:00 AM, with final departures at midnight. Sundays see a late opening at 8:00 AM. Peak hours may see more frequent departures. 
</p>
          <p className="mt-3 text-sm text-gray-600">
                Refer{" "}
                <a
                  href="https://www.rta.ae/wps/portal/rta/ae/public-transport/metro-stations-map"                 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tsd-blue underline hover:text-tsd-orange"
                >
                  here
                </a>{" "}
                for latest stations and routes.
                <p>* Timings may vary on public holidays. Always check the RTA app for the latest updates.</p>
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
           Students are eligible for a  <span className="font-medium">Blue Nol Card</span> 
            which offers 50% discounts on Metro, Tram, and local bus rides.
          </p>
          <p>How to apply</p>
          <ul className="list-decimal list-inside mt-2 space-y-1">
            <li>Start your application online -<a href="rta.ae/nol/apply)">click here</a></li>
            <li>Submit a valid student ID and a passport-size photo</li>
            <li>Pay the unit price of Dhs 70</li>
            <li>Once approved and delivered, simply tap in and out at every station. You'll automatically pay the discounted rate</li>
          </ul>
          <p className="mt-3 text-sm text-gray-600">
           *Discount applies to local travel only. Intercity travel does not accept student rates.
            </p>
          <p className="mt-3 text-sm text-gray-600">
             **Local travel only. Annual renewal required.
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
            <h2 className="text-2xl font-semibold text-green-700">INTERCITY BUSES (ACROSS EMIRATES)</h2>
          </div>
          <p>
            Need to visit another emirate? Dubai’s intercity buses, operated by the RTA, are long-distance coaches connecting Dubai to the rest of the UAE. They’re comfortable, air-conditioned, and very affordable for students on a budget.
          </p>
            
 
     
{/* 🚌 Dubai Intercity Transport Info */}
<section className="relative py-16 bg-gray-50">
  <div className="max-w-screen-xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-tsd-blue mb-12">
      Intercity Transport from Dubai
    </h2>

    {/* 📱 MOBILE VIEW */}
    <div className="lg:hidden space-y-10">
      {/* 🚏 Terminals - Mobile */}
      <div>
        <h3 className="text-xl font-semibold text-tsd-blue mb-4">
          🏢 Main Bus Terminals
        </h3>

        {[
          {
            terminal: "📍 Al Ghubaiba (Bur Dubai)",
            destinations: "Abu Dhabi, Sharjah, Ajman",
            map: "https://goo.gl/maps/yX3dxkUCUZr2",
          },
          {
            terminal: "📍 Union Square (Deira)",
            destinations: "RAK, Fujairah, N. Emirates",
            map: "https://goo.gl/maps/3Ew2961GZ91E4dRD8",
          },
          {
            terminal: "📍 Ibn Battuta",
            destinations: "Direct to Abu Dhabi",
            map: "https://goo.gl/maps/mVWpVMcKtgoYdRDs8",
          },
          {
            terminal: "📍 Al Sabkha & Dubai City Center",
            destinations: "Sharjah & beyond",
            map: "https://goo.gl/maps/MjhYEywVagDEo6p4A",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 mb-2"
          >
            <summary className="cursor-pointer px-4 py-3 font-medium text-tsd-blue flex justify-between items-center">
              <span>{item.terminal}</span>
              <a
                href={item.map}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tsd-orange text-sm underline ml-2"
              >
                Map
              </a>
            </summary>
            <div className="px-4 py-2 text-sm text-gray-700 border-t border-gray-100">
              {item.destinations}
            </div>
          </details>
        ))}
      </div>

      {/* 🛣️ Routes - Mobile */}
      <div>
        <h3 className="text-xl font-semibold text-tsd-blue mb-4">
          🚍 Popular Intercity Routes
        </h3>

        {[
          {
            route: "🚌 E100 / E101",
            details: "Al Ghubaiba → Abu Dhabi",
            time: "~2h",
          },
          {
            route: "🚌 E102",
            details: "Al Rashidiya → Mussafah (Abu Dhabi)",
            time: "~2h 15m",
          },
          {
            route: "🚌 E303 / E304 / E306 / E307A / E308",
            details: "Various stops → Sharjah",
            time: "~1h",
          },
          {
            route: "🚌 E400",
            details: "To Ajman",
            time: "~1h",
          },
          {
            route: "🚌 E601",
            details: "To Ras Al Khaimah",
            time: "~2h 30m",
          },
          {
            route: "🚌 E700",
            details: "To Fujairah",
            time: "~2h 45m",
          },
        ].map((item, index) => (
          <details
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 mb-2"
          >
            <summary className="cursor-pointer px-4 py-3 font-medium text-tsd-blue flex justify-between items-center">
              <span>{item.route}</span>
              <span className="text-sm text-tsd-orange">{item.time}</span>
            </summary>
            <div className="px-4 py-2 text-sm text-gray-700 border-t border-gray-100">
              {item.details}
            </div>
          </details>
        ))}
      </div>
    </div>

    {/* 🖥️ DESKTOP VIEW */}
    <div className="hidden lg:grid grid-cols-2 gap-10">
      {/* 🚏 Main Bus Terminals - Desktop */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <h3 className="text-lg font-semibold text-tsd-blue bg-tsd-blue/10 px-6 py-4 border-b border-tsd-blue/20">
          🏢 Main Dubai Bus Terminals
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-tsd-blue text-white">
              <tr>
                <th className="px-4 py-3">Terminal</th>
                <th className="px-4 py-3">Destinations</th>
                <th className="px-4 py-3">Map</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-bold">📍 Al Ghubaiba (Bur Dubai)</td>
                <td className="px-4 py-3">Abu Dhabi, Sharjah, Ajman</td>
                <td className="px-4 py-3">
                  <a
                    href="https://goo.gl/maps/yX3dxkUCUZr2"
                    target="_blank"
                    className="text-tsd-orange underline"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-bold">📍 Union Square (Deira)</td>
                <td className="px-4 py-3">RAK, Fujairah, N. Emirates</td>
                <td className="px-4 py-3">
                  <a
                    href="https://goo.gl/maps/3Ew2961GZ91E4dRD8"
                    target="_blank"
                    className="text-tsd-orange underline"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-bold">📍 Ibn Battuta</td>
                <td className="px-4 py-3">Direct to Abu Dhabi</td>
                <td className="px-4 py-3">
                  <a
                    href="https://goo.gl/maps/mVWpVMcKtgoYdRDs8"
                    target="_blank"
                    className="text-tsd-orange underline"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-bold">📍 Al Sabkha & Dubai City Center</td>
                <td className="px-4 py-3">Sharjah & beyond</td>
                <td className="px-4 py-3">
                  <a
                    href="https://goo.gl/maps/MjhYEywVagDEo6p4A"
                    target="_blank"
                    className="text-tsd-orange underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 🛣️ Popular Intercity Routes - Desktop */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <h3 className="text-xl font-semibold text-tsd-blue bg-tsd-blue/10 px-6 py-4 border-b border-tsd-blue/20">
          🚍 Popular Intercity Routes
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-tsd-blue text-white">
              <tr>
                <th className="px-4 py-3">Route</th>
                <th className="px-4 py-3">Details</th>
                <th className="px-4 py-3">Est. Time</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-bold">🚌 E100 / E101</td>
                <td className="px-4 py-3">Al Ghubaiba → Abu Dhabi</td>
                <td className="px-4 py-3">~2h</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-bold">🚌 E102</td>
                <td className="px-4 py-3">Al Rashidiya → Mussafah (Abu Dhabi)</td>
                <td className="px-4 py-3">~2h 15m</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-bold">
                  🚌 E303 / E304 / E306 / E307A / E308
                </td>
                <td className="px-4 py-3">Various stops → Sharjah</td>
                <td className="px-4 py-3">~1h</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-bold">🚌 E400</td>
                <td className="px-4 py-3">To Ajman</td>
                <td className="px-4 py-3">~1h</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-bold">🚌 E601</td>
                <td className="px-4 py-3">To Ras Al Khaimah</td>
                <td className="px-4 py-3">~2h 30m</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="px-4 py-3 font-bold">🚌 E700</td>
                <td className="px-4 py-3">To Fujairah</td>
                <td className="px-4 py-3">~2h 45m</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  {/* ℹ️ Additional Info */}
<div className="mt-10 bg-tsd-blue/5 border-l-4 border-tsd-orange p-6 rounded-md text-sm text-gray-700 max-w-screen-md mx-auto">
  <p className="mb-2">
    🕒 <strong>Buses run daily</strong>, starting around <strong>5:00 AM</strong>, with final departures between <strong>11:00 PM and 1:00 AM</strong>.
    Peak hours may see more frequent departures.
  </p>
  <p className="mb-2 italic text-gray-600">
    *Timings may vary on public holidays. Always check the <a href="https://www.rta.ae" target="_blank" className="text-tsd-orange underline">RTA app</a> for the latest updates.
  </p>
  <p className="italic text-gray-600">
    **Intercity routes are <strong>not</strong> covered by the student Nol discount.
  </p>
</div>
</section>

          </motion.div>

        {/* RTA App */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariant}
          className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-md text-gray-800"
        >
          <div className="mt-12 bg-white rounded-lg shadow-md p-6 max-w-screen-md mx-auto">
  <div className="flex items-center gap-3 mb-4">
    <Smartphone className="text-[#02066f]" size={28} />
    <h2 className="text-2xl font-semibold text-[#02066f]">RTA App</h2>
  </div>

  <p className="text-gray-700 text-md leading-relaxed">
    A must-have for any student on the move, the <strong>RTA Dubai App</strong> provides real-time schedules, route maps, fare estimates, Nol card top-up, and live service updates.
  </p>

  {/* Download Button (Optional) */}
  <div className="mt-4">
    <a
      href="https://www.rta.ae/wps/portal/rta/ae/home/rta-mobile-app"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-tsd-orange text-white px-4 py-2 rounded hover:bg-tsd-orange/90 transition"
    >
      📲 Learn More About the App
    </a>
  </div>

  {/* App Store Badges */}
  <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
    <a
      href="https://apps.apple.com/ae/app/rta-dubai/id540616636"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/badges/apple.svg"
        alt="Download on the App Store"
        className="h-12"
      />
    </a>

    <a
      href="https://play.google.com/store/search?q=rta&c=apps&hl=en"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/images/badges/google.png"
        alt="Get it on Google Play"
        className="h-12"
      />
    </a>
  </div>
</div>

        </motion.div>

        {/* Navigation */}
        <NavigationButtons/>
      </div>
    </section>
  );
}
