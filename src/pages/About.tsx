// src/pages/About.tsx
import React from "react";
import HeroSection from "../components/HeroSection";
import HorizontalImageSection, { ImageCard } from "../components/HorizontalImageSection";
import { motion } from "framer-motion";
import NavigationButtons from "../components/NavigationButtons";
import { Italic } from "lucide-react";

// ✅ Reusable Card component
const InfoCard: React.FC<{
  title: string;
  text: string;
  dark?: boolean;
}> = ({ title, text, dark }) => (
  <motion.div
    className={`flex-1 p-6 rounded-lg shadow-lg ${
      dark ? "bg-[#02066f] text-white" : "bg-[#f2f3f4] text-gray-900"
    }`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p>{text}</p>
  </motion.div>
);

// ✅ Reusable BlobCard for Mission & Vision
const BlobCard: React.FC<{
  title: string;
  text: string;
  color: string;
  icon: React.ReactNode;
  direction?: "left" | "right";
}> = ({ title, text, color, icon, direction = "left" }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center relative overflow-hidden"
    initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {/* Abstract Blob Background */}
    <svg
      className={`absolute -top-10 ${
        direction === "left" ? "-left-10" : "-right-10"
      } w-32 h-32 sm:w-48 sm:h-48 opacity-30 z-0 pointer-events-none`}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={color} d="M45.1,-55.5C57.3,-45.6,64.2,-28.6,62.3,-13.3C60.4,2,49.6,14.9,38.5,25.8C27.5,36.7,16.2,45.7,2.7,47.7C-10.8,49.7,-21.6,44.7,-32.7,37.9C-43.8,31,-55.3,22.3,-59.1,10.7C-62.9,-0.8,-58.9,-15.4,-50.3,-27.2C-41.7,-39,-28.5,-48,-14.5,-55.2C-0.5,-62.5,14.3,-68,28.8,-65.8C43.4,-63.7,57.9,-54.4,45.1,-55.5Z" transform="translate(100 100)" />
    </svg>

    {/* Icon */}
    <div className="p-4 rounded-full mb-4 z-10" style={{ backgroundColor: color }}>
      {icon}
    </div>

    <h3 className="text-xl font-semibold mb-2 z-10">{title}</h3>
    <p className="text-gray-700 z-10">{text}</p>
  </motion.div>
);

export default function About() {
  const aboutImages: ImageCard[] = [
    {
      id: 1,
      image: "/images/journey1.png",
      title: "GITEX YouthX Unipreneur",
      caption: "Winner!",
      date: "October 2024",
      content:
        "TSD was crowned one of the top student-led startups in the UAE, winning recognition for solving real challenges faced by university students.",
      alt: "TSD winning at GITEX YouthX Unipreneur 2024",
    },
    {
      id: 2,
      image: "/images/journey2.png",
      title: "Du Pitch Competition",
      caption: "Winner!",
      date: "October 2024",
      content:
        "Our business model stood out for its student-focused value and innovative approach to connecting students with the right resources.",
      alt: "TSD wins Du Pitch Competition 2024",
    },
    {
      id: 3,
      image: "/images/journey3.png",
      title: "Dubai Municipality",
      caption: "Sustainability in Education and Living",
      date: "2024",
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
        <p className="text-lg sm:text-xl md:text-2xl w-full text-[#ff6d34]">
          <center>We understand how overwhelming it can be to move to a new city or even a new country.</center>
        </p>
        <p text-italics><center>That’s where we come in.</center></p>
      </HeroSection>

      {/* Who We Are Section */}
      <HeroSection
        id="who-we-are"
        title="Who We Are"
        image="/images/who-we-are.jpg"
        reverse
      >
        <p>
          At <strong>The Student Dorm (TSD)</strong>, we’re redefining the student experience in the UAE.
        </p>
        <p>
          Built by students, for students, TSD began with one vision: to make university life simpler, smarter, and more connected.
        </p>
        <p>
          Whether it’s finding accommodation, understanding visa processes, discovering transport tips, discounts, or landing internships, we bring everything into one trusted platform.
        </p>
      </HeroSection>

      {/* Our Story Section */}
      <HeroSection id="our-story" title="Our Story" image="/images/our-story.jpg">
        <p>
          TSD started as an idea by <strong>Swapna Manikandan</strong>, a university student who struggled to find reliable information about living and studying in the UAE.
        </p>
        <p>
          What began as a small project has evolved into a student-first platform designed to make life easier for university students.
        </p>
        <p>
          Today, TSD is your all-in-one hub for every student need. We’re here to help students live smarter, save better, and thrive in the UAE.
        </p>
      </HeroSection>

      {/* Why Choose TSD Section */}
      <section id="why-choose-tsd" className="bg-[#f2f3f4] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#ff6d34]">Why Choose TSD</h2>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <InfoCard
              title="Trusted & Verified Information"
              text="We cross-check every listing, guide, and resource for accuracy."
              dark
            />
            <InfoCard
              title="Student-Centric Approach"
              text="Built specifically for university students in Dubai and across the UAE."
            />
            <InfoCard
              title="Always Growing"
              text="As the student community grows, so does TSD. Adding more providers, features, and resources to serve you better."
              dark
            />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <HorizontalImageSection
        sectionTitle="Our Journey"
        sectionCaption="From an idea to a pitch to a startup, our journey has been fuelled by innovation, passion, and a commitment to students. Along the way, we’ve pitched, competed, and grown through every milestone:"
        images={aboutImages}
      />

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="bg-[#f2f3f4] py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-[#02066f]">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <BlobCard
              title="Our Mission"
              text="To empower students with verified, accessible, and student-focused information so they can navigate life in the UAE confidently and independently."
              color="#02066f"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a7 7 0 00-7 7c0 3.866 3 7 7 7s7-3.134 7-7a7 7 0 00-7-7z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21v-4" />
                </svg>
              }
              direction="left"
            />
            <BlobCard
              title="Our Vision"
              text="To become the go-to platform for students across the UAE, making it easier for them to study, live, and grow, all in one place."
              color="#ff6d34"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
              direction="right"
            />
          </div>
        </div>
        <NavigationButtons />
      </section>
    </main>
  );
}
