// Home.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StudentResources from "../components/StudentResources";
import BlogTestimonials from "../components/BlogTestimonials";
import EventsSection from "../components/EventsSection";
import PartnerSection from "../components/PartnerSection";
import ContactForm from "../components/ContactForm";
import PuzzleBoard from "../components/PuzzleBoard";
import StudentFunZone from "../components/StudentFunZone";

interface HomeProps {
  overlay?: "light" | "ultraLight";
}

export default function Home({ overlay = "light" }: HomeProps) {
  return (
    <div className="relative w-full overflow-x-hidden">
      
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero section */}
      <Hero overlay={overlay} navbarOffset="pt-16" />

      {/* Student Resources */}
      <StudentResources />

      {/* Blog & Testimonials */}
      <BlogTestimonials />

      {/* Grey line divider */}
    {/* //  <div className="w-full h-px bg-gray-400 my-8  bg-opacity-70"></div> */}
   {/* Centered slim fading divider */}
<hr className="my-8 border-gray-300" />

      {/* Events */}
      <EventsSection />

      {/* Student Fun Zone / Puzzle Animation */}
      
       <StudentFunZone/>
     
      <PartnerSection />

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
