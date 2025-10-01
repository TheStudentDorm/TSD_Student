import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NavigationButtons from "../components/NavigationButtons";

// Hero background image
const heroBg = "/images/TSD_Backgrounds_3.png";

// Reusable Card Component
interface StudentCardProps {
  title: string;
  desc: string;
  link: string;
  bgColor: string;
  btnText?: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ title, desc, link, bgColor, btnText }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 flex flex-col justify-between">
    <div>
      <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
    <Link to={link} className="mt-4">
      <button
        aria-label={`Navigate to ${title}`}
        className={`w-full sm:w-auto px-5 py-2 rounded-full text-white font-semibold ${bgColor} hover:brightness-110 transition duration-300`}
      >
        {btnText || "Learn More"}
      </button>
    </Link>
  </div>
);

const Students: React.FC = () => {
  const mainSections = [
    {
      title: "Major Universities",
      desc: "Discover leading universities across Dubai, Abu Dhabi, Sharjah & beyond.",
      link: "/students/academics",
      bgColor: "bg-blue-600 hover:bg-blue-700",
      btnText: "Explore Universities",
    },
    {
      title: "Accommodation",
      desc: "Browse trusted listings for student-friendly rooms, apartments, and co-living spaces near major universities.",
      link: "/students/accommodation",
      bgColor: "bg-orange-600 hover:bg-orange-700",
      btnText: "Find Accommodation",
    },
    {
      title: "Transport Guide",
      desc: "Metro, buses, Nol cards, everything you need to move around easily.",
      link: "/students/transport",
      bgColor: "bg-green-600 hover:bg-green-700",
      btnText: "See Transport Options",
    },
    {
      title: "Visa & Relocation Support",
      desc: "Step-by-step help to get your student visa and settle in stress-free.",
      link: "/students/visa",
      bgColor: "bg-purple-600 hover:bg-purple-700",
      btnText: "Get Visa Help",
    },
    {
      title: "Emergency Services",
      desc: "Quick access to verified emergency numbers and embassy contacts.",
      link: "/students/emergency",
      bgColor: "bg-red-600 hover:bg-red-700",
      btnText: "Emergency Contacts",
    },
    {
      title: "Internships & Career Opportunities",
      desc: "Kickstart your career with curated internships, part-time roles, and job openings across Dubai and the UAE.",
      link: "/students/careers",
      bgColor: "bg-indigo-600 hover:bg-indigo-700",
      btnText: "Explore Careers",
    },
  ];

  const lifeCards = [
    {
      title: "Student Discounts",
      desc: "Save big on tech, fashion, gyms, and more!",
      link: "/students/discounts",
      bgColor: "bg-yellow-600 hover:bg-yellow-700",
      btnText: "Get Discounts",
    },
    {
      title: "Student Events",
      desc: "Never miss workshops, festivals, and student-friendly activities.",
      link: "/students/events",
      bgColor: "bg-teal-600 hover:bg-teal-700",
      btnText: "See Events",
    },
    {
      title: "Local Attractions",
      desc: "Explore the UAE’s must-visit spots and hidden gems.",
      link: "/students/attractions",
      bgColor: "bg-pink-600 hover:bg-pink-700",
      btnText: "Explore Attractions",
    },
  ];

  // Animation variants
  const heroTextVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };
const heroDesktopBg = "/images/TSD_Backgrounds_3.png";
const heroMobileBg = "/images/TSD_Backgrounds_Mobile.png";
  return (
    <div className="relative">
      {/* Hero Section */}
      <section
  id="hero"
  className="relative w-full h-auto sm:h-[110vh] flex items-center justify-center text-center sm:text-left overflow-hidden"
>
  {/* Responsive Background Image */}
  <picture>
    {/* Mobile-first image (shown <640px) */}
    <source
      srcSet={heroMobileBg}
      media="(max-width: 639px)"
    />
    {/* Default/desktop image */}
    <img
      src={heroDesktopBg}
      alt="Student lifestyle background"
      className="absolute inset-0 w-full h-full object-cover object-bottom -z-10"
      loading="lazy"
    />
  </picture>

  {/* Hero content */}
  <div className="relative z-10 max-w-3xl mx-4 sm:mx-0 sm:ml-auto px-4 md:px-6 py-20 sm:py-0 space-y-4 text-blue-900">
    <motion.h1
      className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight"
      variants={heroTextVariants}
      initial="hidden"
      animate="visible"
    >
      Find Everything You Need as a Student in the UAE
    </motion.h1>

    <motion.h2
      className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug"
      variants={heroTextVariants}
      initial="hidden"
      animate="visible"
    >
      Your One-Stop Hub for Student Life
    </motion.h2>

    <motion.p
      className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
      variants={heroTextVariants}
      initial="hidden"
      animate="visible"
    >
      At The Student Dorm (TSD), we make your university journey smoother, smarter, and more connected.
      Whether you're moving to the UAE for the first time or already studying here, we help you find verified
      accommodation, explore student discounts, discover events, and unlock opportunities, all in one place.
    </motion.p>
  </div>
</section>


      {/* Main Sections */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mainSections.map((section, idx) => (
            <StudentCard key={idx} {...section} />
          ))}
        </div>

        {/* Student Life */}
        <section>
          <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Student Life in the UAE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifeCards.map((card, idx) => (
              <StudentCard key={idx} {...card} />
            ))}
          </div>
        </section>
      </div>

      {/* Floating Navigation Buttons */}
      <NavigationButtons className="absolute bottom-10 right-10 z-20" />
    </div>
  );
};

export default Students;
