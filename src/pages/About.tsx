// src/pages/About.tsx
import React from "react";
import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";
import HorizontalImageSection, { ImageCard } from "../components/HorizontalImageSection";
import { motion } from "framer-motion";
import NavigationButtons from "../components/NavigationButtons";
import MissionVision from "../components/MissionVision";
import InfoCard from "../components/InfoCard"; 



export default function About() {
  const aboutImages: ImageCard[] = [
    {
      id: 1,
      image: "/images/about_us/journey1.png",
      title: "GITEX YouthX Unipreneur",
      caption: "Winner!",
      date: "2024",
      content:
        "TSD was crowned one of the top student-led startups in the UAE, winning recognition for solving real challenges faced by university students.",
      alt: "TSD winning at GITEX YouthX Unipreneur 2024",
    },
    {
      id: 2,
      image: "/images/about_us/journey2.png",
      title: "Du Pitch Competition",
      caption: "Winner!",
      date: "2024",
      content:
        "Our business model stood out for its student-focused value and innovative approach to connecting students with the right resources.",
      alt: "TSD wins Du Pitch Competition 2024",
    },
    {
      id: 3,
      image: "/images/about_us/journey3.png",
      title: "Dubai Municipality",
      caption: "Sustainability in Education and Living",
      date: "2025",
      content:
        "Invited to present TSD as part of initiatives supporting students and sustainable living in Dubai, strengthening our position in the student ecosystem.",
      alt: "TSD presenting at Dubai Municipality",
    },
    {
      id: 4,
      image: "/images/about_us/journey4.png",
      title: "Heriot-Watt Business Incubator",
      caption: "Discover Urban Life",
      date: "2025",
      content:
        "TSD was selected to be part of the Business Incubator Cohort, giving us access to mentorship, investor networks, and growth opportunities.",
      alt: "TSD joins Heriot-Watt Business Incubator Cohort 2025",
    },
  ];

  return (
    <main className="text-[#ff6d34]">
      {/* About Hero Section */}
      <HeroSection
        id="about-hero"
        title="ABOUT US"
        image="/images/Slide_6.png"
        background
      >
        <div className="text-center">
          <p className="text-xl sm:text-xl md:text-2xl text-white">
            We understand how overwhelming it can be to move to a new city or even a new country.
          </p>
          <p className="text-white text-lg">That’s where we come in.</p>
        </div>
      </HeroSection>

      {/* Who We Are Section */}
      <ContentSection
        title="Who We Are"
        textBlocks={[
          "At The Student Dorm (TSD), we’re redefining the student experience in the UAE.",
          "Built by students, for students, TSD began with one vision: to make university life simpler, smarter, and more connected.",
          "Whether it’s finding accommodation, understanding visa processes, discovering transport tips, discounts, or landing internships, we bring everything into one trusted platform."
        ]}
        image="/images/about_us/who-we-are.jpg"
      />

      {/* Our Story Section */}
      <ContentSection
        title="Our Story"
        textBlocks={[
          "TSD started as an idea by Swapna Manikandan, a university student who struggled to find reliable information about living and studying in the UAE.",
          "What began as a small project has evolved into a student-first platform designed to make life easier for university students.",
          "Today, TSD is your all-in-one hub for every student need. We’re here to help students live smarter, save better, and thrive in the UAE."
        ]}
        image="/images/about_us/our-story.jpg"
        reverse
      />

      {/* Journey Section */}
      <HorizontalImageSection
        sectionTitle="Our Journey"
        sectionCaptions={[
          "From an idea to a pitch to a startup, our journey has been fuelled by innovation, passion, and a commitment to students.",
          "Along the way, we’ve pitched, competed, and grown through every milestone:"
        ]}
        images={aboutImages}
      />
    <section id="our-values" className=" py-16 mt-10"/>
     <section id="why-choose-tsd" className="bg-[#f2f3f4] py-24 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#02066f]">
          Why Choose TSD
        </h2>

        {/* Cards container with staggered animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.4 } },
          }}
        >
          <InfoCard
            title="Trusted & Verified Information"
            text="We cross-check every listing, guide, and resource for accuracy."
            dark
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9 ,ease: "easeOut" } },
            }}
            whileHover={{ scale: 1.05 }}
          />
          <InfoCard
            title="Student-Centric Approach"
            text="Built specifically for university students in Dubai and across the UAE."
            textColor="#ff6d34"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9 ,ease: "easeOut"} },
            }}
            whileHover={{ scale: 1.05 }}
          />
          <InfoCard
            title="Always Growing"
            text="As the student community grows, so does TSD. Adding more providers, features, and resources to serve you better."
            dark
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9,ease: "easeOut"} },
            }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </section>


      {/* Mission & Vision Section with Abstract Blobs */}
<section id="mission-vision" className="bg-gray-50 py-16 relative overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
    <h2 className="text-3xl font-bold mb-12 text-[#004AAD]">Our Mission & Vision</h2>
    
    <div className="grid md:grid-cols-2 gap-8 relative z-10">
      {/* Mission */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center relative overflow-hidden"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Abstract Blob Background */}
        <svg
          aria-hidden="true"
          className="absolute -top-16 -left-16 w-32 h-32 sm:w-48 sm:h-48 opacity-20 z-0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#004AAD"
            d="M45.1,-55.5C57.3,-45.6,64.2,-28.6,62.3,-13.3C60.4,2,49.6,14.9,38.5,25.8C27.5,36.7,16.2,45.7,2.7,47.7C-10.8,49.7,-21.6,44.7,-32.7,37.9C-43.8,31,-55.3,22.3,-59.1,10.7C-62.9,-0.8,-58.9,-15.4,-50.3,-27.2C-41.7,-39,-28.5,-48,-14.5,-55.2C-0.5,-62.5,14.3,-68,28.8,-65.8C43.4,-63.7,57.9,-54.4,45.1,-55.5Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Icon */}
        <div className="bg-[#004AAD] text-white p-4 rounded-full mb-4 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a7 7 0 00-7 7c0 3.866 3 7 7 7s7-3.134 7-7a7 7 0 00-7-7z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21v-4" />
          </svg>
        </div>

        <h3 className="text-xl font-semibold mb-2 z-10 text-[#004AAD]">Our Mission</h3>
        <p className="text-gray-700 z-10 leading-relaxed">
          To empower students with verified, accessible, and student-focused information so they can navigate life in the UAE confidently and independently.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center relative overflow-hidden"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Abstract Blob Background */}
        <svg
          aria-hidden="true"
          className="absolute -top-16 -right-16 w-32 h-32 sm:w-48 sm:h-48 opacity-20 z-0"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#F9943B"
            d="M38.7,-53.4C50.8,-44.4,57.9,-28.7,58.2,-14.6C58.6,-0.5,52.2,11.5,44.8,23.3C37.4,35.1,29,46.7,16.8,51.1C4.6,55.5,-11.4,52.7,-24.7,46.3C-38,39.9,-48.5,29,-53.3,16.5C-58.1,4,-57.2,-10.1,-50.5,-21.8C-43.7,-33.5,-31.1,-42.7,-18.1,-51.1C-5.1,-59.5,8.6,-67.2,20.9,-64.7C33.1,-62.1,44.9,-49.9,38.7,-53.4Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Icon */}
        <div className="bg-[#F9943B] text-white p-4 rounded-full mb-4 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>

        <h3 className="text-xl font-semibold mb-2 z-10 text-[#F9943B]">Our Vision</h3>
        <p className="text-gray-700 z-10 leading-relaxed">
          To become the go-to platform for students across the UAE, making it easier for them to study, live, and grow, all in one place.
        </p>
      </motion.div>
    </div>
  </div>
  
</section>


      <NavigationButtons />
    </main>
  );
}
