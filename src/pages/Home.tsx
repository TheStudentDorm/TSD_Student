import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket, ChevronDown, ChevronRight } from "lucide-react";
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
  const [offsetY, setOffsetY] = useState(0);

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
  const overlayClasses =
    overlay === "ultraLight"
      ? "absolute inset-0 bg-gradient-to-t from-black/25 via-indigo-900/15 to-transparent"
      : "absolute inset-0 bg-gradient-to-t from-black/40 via-indigo-900/30 to-transparent";

  // ======================== Parallax Scroll ========================
  const handleScroll = () => {
    const section = document.getElementById("student-resources");
    if (section) {
      const rect = section.getBoundingClientRect();
      setOffsetY(-rect.top * 0.3);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  // ======================== Resources & Events Data ========================
  const resources = [
    { link: "/students/accommodation", icon: "/icons/accomodation.svg", title: "Find Student Accommodation", desc: "Your next home, sorted." },
    { link: "/students/Visa", icon: "/icons/visa.svg", title: "Student Visa Guide", desc: "From application to arrival, stress-free." },
    { link: "/students/transport", icon: "/icons/transport.svg", title: "Transport Made Simple", desc: "Getting around made easier." },
    { link: "/students/discounts", icon: "/icons/discount.svg", title: "Student Discounts & Perks", desc: "Stretch your dirhams further." },
    { link: "/students/careers", icon: "/icons/career.svg", title: "Careers & Internships", desc: "Start building your future today." },
    { link: "/students/emergency", icon: "/icons/emergency.svg", title: "Emergency & Essential Contacts", desc: "Help when you need it most." },
  ];

  const events = [
    {
      title: "Meet The Top Students 2025",
      description: "Mentoring successful student applications abroad, including personal statements, profile building and more!",
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
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay muted playsInline
          onEnded={() => setShowContent(true)}
        >
          <source src="/home-bg.mp4" type="video/mp4" />
        </video>

        <div className={overlayClasses}></div>

        {/* Logo */}
        <div className="absolute top-6 left-6 z-20">
          <img src="/logo.png" alt="The Student Dorm" className="w-28 md:w-32" />
        </div>

        {showContent && (
          <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white px-6 pb-16 animate-fadeIn">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg">
              Your Student Life, Simplified
            </h1>
            <p className="max-w-3xl text-3xl md:text-base text-gray-100 drop-shadow">
              All-in-one platform for students in the UAE. From finding accommodation to exploring career opportunities, staying informed, and making the most of your journey.
            </p>
          </div>
        )}
      </div>

      {/* ======================== STUDENT RESOURCES ======================== */}
      <section
        id="student-resources"
        className="py-16 text-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/student-bg.jpg')",
          backgroundAttachment: "scroll",
          backgroundSize: "cover",
          backgroundPosition: `center ${offsetY}px`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 px-6 py-16">
          <h2 className="text-3xl font-bold mb-8 text-white">STUDENT RESOURCES</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                  className="p-6 bg-white bg-opacity-90 shadow rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
                >
                  <img src={res.icon} alt={res.title} className="w-12 h-12 mb-4" />
                  <p className="font-semibold mb-1">{res.title}</p>
                  <p className="text-gray-700 text-sm">{res.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== NEWSLETTER ======================== */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
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
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-6">TSD Blog</h2>

            {/* Newsletter Articles */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold mb-2">How to Get Internship-Ready in 2 Weeks</h3>
                <p className="text-gray-600 mb-2">Quick tips to land your first internship</p>
                <p className="text-sm text-gray-500 mb-4">From polishing your LinkedIn to acing interview prep, this guide covers everything you need to become internship-ready fast.</p>
                <Link to="/blog/internship-ready" className="text-indigo-600 font-medium hover:underline">Read Full Article →</Link>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold mb-2">Do’s and Don’ts for a Great CV</h3>
                <p className="text-gray-600 mb-2">Your roadmap to a standout resume</p>
                <p className="text-sm text-gray-500 mb-4">Learn the essential tips to craft a CV that gets noticed and the common mistakes to avoid.</p>
                <Link to="/blog/great-cv" className="text-indigo-600 font-medium hover:underline">Read Full Article →</Link>
              </div>
            </div>
            
              {/* Read More Link for All Newsletters */}
              <div className="flex justify-center mt-6">
                <Link to="blog/index" className="text-indigo-600 font-medium hover:underline text-lg">
                  Read More Newsletters →
                </Link>
              </div>
            </motion.div>
        </div>
      </section>

      {/* ======================== EVENTS ======================== */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-2">TOP EVENTS</h2>
        <p className="text-gray-600 mb-8">Discover upcoming student events, workshops, and opportunities.</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div key={index} className="bg-white border rounded-lg shadow hover:shadow-lg transition text-left">
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-gray-700 mb-2"><Ticket className="w-4 h-4 mr-2" />{event.admission}</div>
                <div className="flex items-center text-sm text-gray-700 mb-2"><Calendar className="w-4 h-4 mr-2" />{event.date}</div>
                <div className="flex items-center text-sm text-gray-700 mb-4"><MapPin className="w-4 h-4 mr-2" />{event.location}</div>
                <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">{new URL(event.link).hostname}</a>
              </div>
            </div>
          ))}
       <div className="flex justify-end mt-6">
          <Link to="students/Events" className="text-indigo-600 font-medium hover:underline text-lg">
            See All Events →
          </Link>
          </div>
        </div>
          
      </section>
      {/* ======================== PARTNER SECTION ======================== */}
      <section
        className="relative py-24 bg-cover bg-center text-center text-white"
        style={{ backgroundImage: "url('/partner-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-2xl mx-auto hover:opacity-90 transition-opacity duration-300">
          <h2 className="text-3xl font-bold mb-4">PARTNER WITH US</h2>
          <p className="mb-6">Are you an Accommodation Provider? <br /> Get discovered by thousands of students every month.</p>
          <Link
            to="/providers#subscription-plans"
            className="relative inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Pricing Plans
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>
      </section>

      {/* ======================== CONTACT FORM ======================== */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">HAVE QUESTIONS? SUGGESTIONS?</h2>
        <p className="text-lg text-gray-700 mb-2">Tell us what you think or need help with. We're here to assist you!</p>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Whether you have questions about our services, need assistance, or want to share your feedback, we'd love to hear from you. Your input helps us improve and serve you better.</p>

        <form ref={formRef} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
          <textarea name="message" placeholder="Your Message" rows={4} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"></textarea>
          <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300">Send Message</button>
        </form>

        <div className="mt-8">
          <NavigationButtons />
        </div>
      </section>

    </div>
  );
}
