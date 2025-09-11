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
      image: "/images/journey1.png",
      title: "GITEX YouthX Unipreneur",
      caption: "Winner!",
      date: "2024",
      content:
        "TSD was crowned one of the top student-led startups in the UAE, winning recognition for solving real challenges faced by university students.",
      alt: "TSD winning at GITEX YouthX Unipreneur 2024",
    },
    {
      id: 2,
      image: "/images/journey2.png",
      title: "Du Pitch Competition",
      caption: "Winner!",
      date: "2024",
      content:
        "Our business model stood out for its student-focused value and innovative approach to connecting students with the right resources.",
      alt: "TSD wins Du Pitch Competition 2024",
    },
    {
      id: 3,
      image: "/images/journey3.png",
      title: "Dubai Municipality",
      caption: "Sustainability in Education and Living",
      date: "2025",
      content:
        "Invited to present TSD as part of initiatives supporting students and sustainable living in Dubai, strengthening our position in the student ecosystem.",
      alt: "TSD presenting at Dubai Municipality",
    },
    {
      id: 4,
      image: "/images/journey4.png",
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
        image="/images/about-hero.jpg"
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
        image="/images/who-we-are.jpg"
      />

      {/* Our Story Section */}
      <ContentSection
        title="Our Story"
        textBlocks={[
          "TSD started as an idea by Swapna Manikandan, a university student who struggled to find reliable information about living and studying in the UAE.",
          "What began as a small project has evolved into a student-first platform designed to make life easier for university students.",
          "Today, TSD is your all-in-one hub for every student need. We’re here to help students live smarter, save better, and thrive in the UAE."
        ]}
        image="/images/our-story.jpg"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
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


      {/* Mission & Vision Section */}
      <section id="mission-vision" className="bg-[#f2f3f4] py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* <h2 className="text-3xl font-bold mb-12 text-[#02066f]">Our Mission & Vision</h2> */}
          <MissionVision />
        </div>
      </section>

      <NavigationButtons />
    </main>
  );
}
