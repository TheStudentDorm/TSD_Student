// src/pages/About.tsx
import React from "react";
import HeroSection from "../components/HeroSection";
import HorizontalImageSection, { ImageCard } from "../components/HorizontalImageSection";
import { motion } from "framer-motion";
import NavigationButtons from "../components/NavigationButtons";

export default function About() {
  const aboutImages: ImageCard[] = [
  {
    id: 1,
    image: "/images/journey1.png",
    title: "GITEX YouthX Unipreneur",
    caption: "Winner!",
    date: "October 2024",
    content: "TSD was crowned one of the top student-led startups in the UAE, winning recognition for solving real challenges faced by university students.",
  },
  {
    id: 2,
    image: "/images/journey2.png",
    title: "Du Pitch Competition",
    caption: "Winner!",
    date: "October 2024",
    content: "Our business model stood out for its student-focused value and innovative approach to connecting students with the right resources.",
  },
  {
    id: 3,
    image: "/images/journey3.png",
    title: "Dubai Municipality ",
    caption: "Sustainability in Education and Living",
    date: "2024",
    content: "Invited to present TSD as part of initiatives supporting students and sustainable living in Dubai, strengthening our position in the student ecosystem.",
  },
  {
    id: 4,
    image: "/images/journey4.png",
    title: "Heriot-Watt Business Incubator",
    caption: "Discover Urban Life",
    date: "2025",
    content: "TSD was selected to be part of the Business Incubator Cohort, giving us access to mentorship, investor networks, and growth opportunities",
  },
];
  return (
   <main className="text-gray-800">
  {/* About Hero Section with background image */}
  <HeroSection
    id="about-hero"
    title="ABOUT US"
    image="/images/about-hero.jpg"
    background
  >
   <p className=" text-lg sm:text-xl md:text-2xl w-full">
  We understand how overwhelming it can be to move to a new city or even a new country.
</p>
    <p>
      That’s where we come in.
    </p>
  </HeroSection>

  {/* Who We Are Section */}
  <HeroSection id="who-we-are" title="Who We Are" image="/images/who-we-are.jpg" reverse>
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
<section id="why-choose-tsd" className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-12">Why Choose TSD</h2>

    <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
      {/* Card 1 */}
      <motion.div
        className="flex-1 bg-blue-900 text-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="font-semibold text-lg mb-2">Trusted & Verified Information</h3>
        <p>We cross-check every listing, guide, and resource for accuracy.</p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="flex-1 bg-gray-200 text-gray-900 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="font-semibold text-lg mb-2">Student-Centric Approach</h3>
        <p>Built specifically for university students in Dubai and across the UAE.</p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className="flex-1 bg-blue-900 text-white p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="font-semibold text-lg mb-2">Always Growing</h3>
        <p>As the student community grows, so does TSD. Adding more providers, features, and resources to serve you better.</p>
      </motion.div>
    </div>
  </div>
</section>
{/* Horizontal Image Section */}
<HorizontalImageSection
  sectionTitle="Our Journey"
  sectionCaption="From an idea to a pitch to a startup, our journey has been fuelled by innovation, passion, and a commitment to students. Along the way, we’ve pitched, competed, and grown through every milestone:"
  images={aboutImages}
/>
{/* Mission & Vision Section with Abstract Blobs */}
<section id="mission-vision" className="bg-gray-50 py-16 relative overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
    <h2 className="text-3xl font-bold mb-12">Our Mission & Vision</h2>
    
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
        <svg className="absolute -top-16 -left-16 w-48 h-48 opacity-30 z-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#3B82F6" d="M45.1,-55.5C57.3,-45.6,64.2,-28.6,62.3,-13.3C60.4,2,49.6,14.9,38.5,25.8C27.5,36.7,16.2,45.7,2.7,47.7C-10.8,49.7,-21.6,44.7,-32.7,37.9C-43.8,31,-55.3,22.3,-59.1,10.7C-62.9,-0.8,-58.9,-15.4,-50.3,-27.2C-41.7,-39,-28.5,-48,-14.5,-55.2C-0.5,-62.5,14.3,-68,28.8,-65.8C43.4,-63.7,57.9,-54.4,45.1,-55.5Z" transform="translate(100 100)" />
        </svg>

        {/* Icon */}
        <div className="bg-blue-600 text-white p-4 rounded-full mb-4 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a7 7 0 00-7 7c0 3.866 3 7 7 7s7-3.134 7-7a7 7 0 00-7-7z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21v-4" />
          </svg>
        </div>

        <h3 className="text-xl font-semibold mb-2 z-10">Our Mission</h3>
        <p className="text-gray-700 z-10">
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
        <svg className="absolute -top-16 -right-16 w-48 h-48 opacity-30 z-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#10B981" d="M38.7,-53.4C50.8,-44.4,57.9,-28.7,58.2,-14.6C58.6,-0.5,52.2,11.5,44.8,23.3C37.4,35.1,29,46.7,16.8,51.1C4.6,55.5,-11.4,52.7,-24.7,46.3C-38,39.9,-48.5,29,-53.3,16.5C-58.1,4,-57.2,-10.1,-50.5,-21.8C-43.7,-33.5,-31.1,-42.7,-18.1,-51.1C-5.1,-59.5,8.6,-67.2,20.9,-64.7C33.1,-62.1,44.9,-49.9,38.7,-53.4Z" transform="translate(100 100)" />
        </svg>

        {/* Icon */}
        <div className="bg-green-600 text-white p-4 rounded-full mb-4 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>

        <h3 className="text-xl font-semibold mb-2 z-10">Our Vision</h3>
        <p className="text-gray-700 z-10">
          To become the go-to platform for students across the UAE, making it easier for them to study, live, and grow, all in one place.
        </p>
      </motion.div>
    </div>
  </div>
  <NavigationButtons/>
</section>

</main>

  );
}
