import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket } from "lucide-react";
import emailjs from "@emailjs/browser";

import ParallaxBanner from "../components/Parallel";
import NavigationButtons from "../components/NavigationButtons";

interface HomeProps {
  overlay?: "light" | "ultraLight";
}

export default function Home({ overlay = "light" }: HomeProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const location = useLocation();

  const [showContent, setShowContent] = useState(false);
  const [offsetY, setOffsetY] = useState<number>(0);
    const [isMobile, setIsMobile] = useState(false);

  // ======================== EmailJS Handler ========================
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_nm9wacb",
        "template_h0afoa3",
        formRef.current,
        "wYMZ0-6j3wayjyNO-"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send. Please try again later.");
        }
      );
  };

  // ======================== Overlay Classes ========================
const overlayClasses = (overlay: "ultraLight" | "medium") =>
  overlay === "ultraLight"
    ? "absolute inset-0 bg-gradient-to-t from-black/25 via-[#02066f]/15 to-transparent"
    : "absolute inset-0 bg-gradient-to-t from-black/40 via-[#02066f]/30 to-transparent";
  // ======================== Parallax Scroll ========================
  function handleScroll() {
    const section = document.getElementById("student-resources");
    if (section) {
      const rect = section.getBoundingClientRect();
      setOffsetY(-rect.top * 0.3);
    }
  }
  useEffect(() => {
  const timer = setTimeout(() => setShowContent(true), 9000);
  return () => clearTimeout(timer);
}, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 // ======================== Detect Mobile ========================
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // ======================== Smooth Scroll for Hash ========================
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);
  const [heroOffsetY, setHeroOffsetY] = useState<number>(0);

useEffect(() => {
  let animationFrame: number;

  const handleScroll = () => {
    animationFrame = requestAnimationFrame(() => {
      // Subtle upward movement and fade as user scrolls down
      setHeroOffsetY(window.scrollY * 0.05);
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
    cancelAnimationFrame(animationFrame);
  };
}, []);

  // ======================== Resources & Events Data ========================
  const resources = [
    {
      link: "/students/accommodation",
      icon: "/icons/accomodation.svg",
      title: "Find Student Accommodation",
      desc: "Your next home, sorted.",
    },
    {
      link: "/students/Visa",
      icon: "/icons/visa.svg",
      title: "Student Visa Guide",
      desc: "From application to arrival, stress-free.",
    },
    {
      link: "/students/transport",
      icon: "/icons/transport.svg",
      title: "Transport Made Simple",
      desc: "Getting around made easier.",
    },
    {
      link: "/students/discounts",
      icon: "/icons/discount.svg",
      title: "Student Discounts & Perks",
      desc: "Stretch your dirhams further.",
    },
    {
      link: "/students/careers",
      icon: "/icons/career.svg",
      title: "Careers & Internships",
      desc: "Start building your future today.",
    },
    {
      link: "/students/emergency",
      icon: "/icons/emergency.svg",
      title: "Emergency & Essential Contacts",
      desc: "Help when you need it most.",
    },
  ];

  const events = [
    {
      title: "Meet The Top Students 2025",
      description:
        "Mentoring successful student applications abroad, including personal statements, profile building and more!",
      admission: "Free Admission",
      date: "31 August, 2025, 10:00 AM - 7 PM",
      location: "Millennium Plaza Downtown Hotel, Dubai",
      link: "https://eventbrite.com",
      image: "/images/event1.jpg",
    },
    {
      title: "GCC Exhibition for Education & Training 2025",
      description: "Explore universities and education opportunities in the UAE!",
      admission: "Free Admission",
      date: "22 - 24 September, 2025",
      location: "Etihad Arena, Abu Dhabi",
      link: "https://gccexhibition.com",
      image: "/images/event2.jpg",
    },
  ];

  // ======================== Render ========================
  return (
    <div className="relative w-full">
     {/* ======================== HERO SECTION ======================== */}
{/* ======================== HERO SECTION ======================== */}
<div className="relative w-full h-screen sm:h-screen min-h-[500px] overflow-hidden">
  {/* Animated Gradient Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "linear-gradient(to bottom, #02066f, white, #ff6d34)",
      backgroundSize: "100% 300%",
      animation: "gradientMove 20s linear infinite",
    }}
  ></div>

  {/* Hero Video */}
  <video
  className="absolute top-0 left-0 w-full h-full object-cover z-10"
  autoPlay
  muted
  playsInline
  preload="auto"
  poster={isMobile ? "/home-bg-mobile.jpg" : "/home-bg.jpg"} // fallback image
  style={{
    transform: `translateY(${heroOffsetY}px)`,
    transition: "transform 0.1s linear",
  }}
>
  <source
    src={isMobile ? "/home-bg-mobile.mp4" : "/home-bg.mp4"}
    type="video/mp4"
  />
</video>


  {/* Overlay with fade effect */}
  <div
    className="absolute inset-0 bg-white/10 z-20"
    style={{ opacity: 1 - heroOffsetY * 0.001 }}
  ></div>

  {/* Logo */}
  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-30">
    <img
      src="/logo.png"
      alt="The Student Dorm Logo"
      className="w-24 sm:w-28 md:w-32"
    />
  </div>

  {/* Hero Content */}
  <div
    className={`relative z-30 flex flex-col items-center justify-end h-full text-center px-4 pb-12 sm:pb-16 transition-opacity duration-1000 ${
      showContent ? "opacity-100" : "opacity-0"
    }`}
  >
    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 drop-shadow-lg text-[#02066f]">
      Your Student Life, Simplified
    </h1>
    <div className="max-w-md sm:max-w-2xl text-xs sm:text-base md:text-lg text-[#02066f] drop-shadow mb-6">
      <p>All-in-one platform for students in the UAE. </p>
    <p>From finding accommodation to exploring career opportunities, staying informed, and making the most of your journey.</p>
    </div>
  </div>

  {/* Gradient Animation Keyframes */}
  <style>
    {`
      @keyframes gradientMove {
        0% { background-position: 0% 0%; }
        50% { background-position: 0% 100%; }
        100% { background-position: 0% 0%; }
      }
    `}
  </style>
</div>


      {/* ======================== STUDENT RESOURCES ======================== */}
      <section
  id="student-resources"
  className="py-12 sm:py-16 text-center relative overflow-hidden"
  style={{
    backgroundImage: "url('/images/student-bg.jpg')",
    backgroundAttachment: "scroll",
    backgroundSize: "cover",
    backgroundPosition: `center ${offsetY}px`,
    transform: `scale(${1 + offsetY * 0.0005})`, // subtle zoom
    opacity: `${1 - offsetY * 0.001}`, // subtle fade
    transition: "transform 0.1s linear, opacity 0.1s linear"
  }}
>
  <div className="absolute inset-0 bg-black/40 z-0"></div>
  <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-16">
    <h2 className="text-4xl sm:text-3xl font-bold mb-8 text-[#02066f]">
      STUDENT RESOURCES
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
      {resources.map((res, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <Link
            to={res.link}
            className="p-6 bg-white bg-opacity-90 shadow rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center border-t-4 border-[#02066f] hover:border-[#ff6d34]"
          >
            <img
              src={res.icon}
              alt={res.title}
              className="w-10 h-10 sm:w-12 sm:h-12 mb-4"
            />
            <p className="text-sm sm:text-base font-semibold mb-1 text-[#02066f]">
              {res.title}
            </p>
            <p className="text-xs sm:text-sm text-gray-700">{res.desc}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* ======================== NEWSLETTER ======================== */}
      <section className="py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ParallaxBanner image="/images/newsletter.jpg" title="" />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#02066f]">
              TSD Blog
            </h2>

            {/* Newsletter Articles */}
            <div className="space-y-4">
              <div className="p-5 sm:p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  How to Get Internship-Ready in 2 Weeks
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2">
                  Quick tips to land your first internship
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mb-4">
                  From polishing your LinkedIn to acing interview prep, this
                  guide covers everything you need to become internship-ready
                  fast.
                </p>
                <Link
                  to="/blog/internship-ready"
                  className="text-[#02066f] font-medium hover:text-[#ff6d34] text-sm sm:text-base"
                >
                  Read Full Article →
                </Link>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Do’s and Don’ts for a Great CV
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2">
                  Your roadmap to a standout resume
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mb-4">
                  Learn the essential tips to craft a CV that gets noticed and
                  the common mistakes to avoid.
                </p>
                <Link
                  to="/blog/great-cv"
                  className="text-[#02066f] font-medium hover:text-[#ff6d34] text-sm sm:text-base"
                >
                  Read Full Article →
                </Link>
              </div>
            </div>

            {/* Read More Link */}
            <div className="flex justify-start mt-4 sm:mt-6">
              <Link
                to="blog/index"
                className="text-[#02066f] font-medium hover:text-[#ff6d34] text-base sm:text-lg"
              >
                Read More Newsletters →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================== EVENTS ======================== */}
      <section className="py-12 sm:py-16 bg-gray-50 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[#02066f]">TOP EVENTS</h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Discover upcoming student events, workshops, and opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow hover:shadow-lg transition text-left flex flex-col"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                loading="lazy"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {event.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">
                  {event.description}
                </p>
                <div className="flex items-center text-xs sm:text-sm text-gray-700 mb-2">
                  <Ticket className="w-4 h-4 mr-2" />
                  {event.admission}
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-700 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {event.location}
                </div>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline text-sm sm:text-base"
                >
                  {event.link.includes("eventbrite")
                    ? "Register on Eventbrite"
                    : "Visit Website"}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
         <Link
            to="students/Events"
            className="text-[#02066f] font-medium hover:text-[#ff6d34] text-base sm:text-lg"
          >
            See All Events →
          </Link>
        </div>
      </section>

      {/* ======================== PARTNER SECTION ======================== */}
      <section
        className="relative w-full h-[80vh] md:h-screen bg-cover bg-center md:bg-fixed text-center text-white"
        style={{ backgroundImage: `url('partner-bg.png')` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-xl sm:max-w-2xl mx-auto flex flex-col items-center justify-center h-full px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            PARTNER WITH US
          </h2>
          <p className="mb-6 text-base sm:text-lg md:text-xl">
            Are you an Accommodation Provider? <br /> Get discovered by
            thousands of students every month.
          </p>
          <Link
              to="/providers"
              className="relative inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-full font-semibold  bg-[#02066f] text-white rounded-lg hover:bg-[#ff6d34] transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              View Pricing Plans
              <svg
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
        </div>
      </section>

      {/* ======================== CONTACT FORM ======================== */}
      <section className="py-12 sm:py-16 bg-gray-50 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#02066f]">
          HAVE QUESTIONS? SUGGESTIONS?
        </h2>
        <p className="text-sm sm:text-lg text-gray-700 mb-6">
          Tell us what you think or need help with. We're here to assist you!
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="max-w-xl w-full mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full text-sm sm:text-base px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full text-sm sm:text-base px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            className="w-full text-sm sm:text-base px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-[#02066f] text-white rounded-lg hover:bg-[#ff6d34] transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8">
          <NavigationButtons />
        </div>
      </section>
    </div>
  );
}
