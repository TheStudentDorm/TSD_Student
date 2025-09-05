import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket } from "lucide-react";
import NavigationButtons from "../components/NavigationButtons";
import Ripple from "../components/Ripple"; 
interface Resource {
  link: string;
  icon: string;
  title: string;
  desc: string;
}

export default function Students() {
  const resources: Resource[] = [
    {
      link: "accommodation",
      icon: "/icons/accomodation.svg",
      title: "Find Student Accommodation",
      desc: "Your next home, sorted.",
    },
    {
      link: "visa",
      icon: "/icons/visa.svg",
      title: "Student Visa Guide",
      desc: "From application to arrival, stress-free.",
    },
    {
      link: "transport",
      icon: "/icons/transport.svg",
      title: "Transport Made Simple",
      desc: "Getting around made easier.",
    },
    {
      link: "discounts",
      icon: "/icons/discount.svg",
      title: "Student Discounts & Perks",
      desc: "Stretch your dirhams further.",
    },
    {
      link: "careers",
      icon: "/icons/career.svg",
      title: "Careers & Internships",
      desc: "Start building your future today.",
    },
    {
      link: "emergency",
      icon: "/icons/emergency.svg",
      title: "Emergency & Essential Contacts",
      desc: "Help when you need it most.",
    },
    {
      link: "academics",
      icon: "/icons/academics.svg",
      title: "Academics & Learning",
      desc: "Tips, courses, and guidance to excel academically.",
    },
    {
      link: "attractions",
      icon: "/icons/attractions.svg",
      title: "Explore UAE Attractions",
      desc: "Discover cultural and fun spots around the UAE.",
    },
  ];

  const tips = [
    { title: "Intern Early", description: "Start internships as early as possible to gain experience." },
    { title: "Update CV", description: "Keep your CV and portfolio up-to-date." },
    { title: "Networking", description: "Attend events and meet industry professionals." },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gray-50 py-16 px-6">
      {/* ======================== Page Header ======================== */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Student Resources</h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Explore essential resources and guidance to make your student life in the UAE smoother, safer, and more productive.
        </p>
      </div>

      {/* ======================== Resources Grid ======================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {resources.map((res, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <Ripple >
            <Link
              to={res.link}
              className="p-6 bg-white shadow rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
            >
              <img src={res.icon} alt={res.title} className="w-12 h-12 mb-4" />
              <p className="font-semibold mb-1 text-center">{res.title}</p>
              <p className="text-gray-700 text-sm text-center">{res.desc}</p>
            </Link>
            </Ripple>
          </motion.div>
        ))}
      </div>

      {/* ======================== Additional Content: Tips ======================== */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Quick Student Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 bg-white shadow rounded-lg hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================== Featured Events ======================== */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Upcoming Student Events</h2>
        <p className="text-gray-700 mb-8">Discover workshops, networking events, and exhibitions happening soon.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden text-left">
            <img src="/images/event1.jpg" alt="Event 1" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Meet The Top Students 2025</h3>
              <p className="text-gray-600 mb-2">Mentoring successful student applications abroad.</p>
              <div className="flex items-center text-sm text-gray-700 mb-2">
                <Ticket className="w-4 h-4 mr-2" /> Free Admission
              </div>
              <div className="flex items-center text-sm text-gray-700 mb-2">
                <Calendar className="w-4 h-4 mr-2" /> 31 August, 2025, 10:00 AM - 7 PM
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <MapPin className="w-4 h-4 mr-2" /> Millennium Plaza Downtown Hotel, Dubai
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden text-left">
            <img src="/images/event2.jpg" alt="Event 2" className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">GCC Exhibition for Education & Training 2025</h3>
              <p className="text-gray-600 mb-2">Explore universities and education opportunities in the UAE!</p>
              <div className="flex items-center text-sm text-gray-700 mb-2">
                <Ticket className="w-4 h-4 mr-2" /> Free Admission
              </div>
              <div className="flex items-center text-sm text-gray-700 mb-2">
                <Calendar className="w-4 h-4 mr-2" /> 22 - 24 September, 2025
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <MapPin className="w-4 h-4 mr-2" /> Etihad Arena, Abu Dhabi
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center mt-6">
                    <Link
                      to="students/Events"
                      className="text-indigo-600 font-medium hover:underline text-base sm:text-lg"
                    >
                      See All Events →
                    </Link>
                  </div>
      </section>
      <NavigationButtons/>
    </div>
    
  );
}
