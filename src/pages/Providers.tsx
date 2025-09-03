// src/pages/ProvidersPage.jsx
import React from "react";
import { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ProviderTestimonials from "../components/ProviderTestimonials";
import BackToTopButton from "../components/BackToTopButton";

import NavigationButtons from "../components/NavigationButtons";
import ParallaxBanner from "../components/Parallel";
import { motion } from "framer-motion";
const steps = [
  { step: "STEP 1", title: "Get In Touch", caption: "Fill our Provider Interest Form or contact us directly.",desc:"Our partnerships team will guide you through the options based on your property size, facilities, and target audience", icon: "images/provider/step1.svg" },
  { step: "STEP 2", title: "Choose Your Plan", caption: "Select Basic, Standard or Featured subscription.", desc: "You can also explore add-on services like professional photography, homepage banners, and social media campaigns for boosted visibility.",icon: "images/provider/step2.svg" },
  { step: "STEP 3", title: "Share Property Details", caption: "Submit photos, room types, pricing, booking process.",desc: "Our team will help ensure your listing is accurate, attractive, and student-friendly", icon: "images/provider/step3.svg" },
  { step: "STEP 4", title: "Review & Approve", caption: "We’ll confirm details before publishing.",desc: "We’ll also advise on optimising your content for maximum engagement", icon: "images/provider/step4.svg" },
  { step: "STEP 5", title: "Go Live", caption: "Your listing is published and visible to students.",desc: "If you’ve opted for featured placements or add-ons, you’ll also benefit from priority exposure across our website and marketing channels", icon: "images/provider/step5.svg" },
  { step: "STEP 6", title: "Track & Optimise", caption: "We provide analytics for better performance.",desc: "•	Student inquiries per listing •	Traffic from our website •	Social engagement (if add-ons are used)", icon: "images/provider/step6.svg" },
];

const plans = [
  {
    title: "BASIC",
    price: "Free",
    features: ["Name and contact details", "Minimal listing & photos (1–2 units max)"],
  },
  {
    title: "STANDARD",
    price: "AED 300/month",
    features: ["Profile page with photos, amenities", "Maximum 3 units/room types"],
  },
  {
    title: "FEATURED",
    price: "AED 550/month",
    features: ["Priority placement on search results", "Homepage banner/feature", "Maximum 5 units/room types"],
    featured: true,
  },
];

 const ProvidersPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // Delay scroll so layout is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      {/* HERO SECTION */}
<section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
  {/* Background image with parallax */}
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: "url('/images/providers-hero.jpg')",
      transform: "translateZ(0)", // GPU acceleration for smoothness
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl px-6">
     {/* Title */}
    <h1
  className="mt-2 text-xl sm:text-3xl md:text-5xl font-bold leading-tight whitespace-nowrap bg-gradient-to-r from-green-50 to-green-100 bg-clip-text text-transparent"
  style={{ fontFamily: "Times New Roman, sans-serif" }}
>
  List Your Accommodation with TSD<br/><br/>
</h1>
    {/* Caption */}
    <p className="uppercase tracking-wide text-sm sm:text-base md:text-lg text-gray-200">
      Connect with Thousands of Students Across the UAE
    </p>
      {/* Description */}
    <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-00 italic">
      TSD (The Student Dorm) is the UAE’s fastest-growing student lifestyle and information
      platform, helping university students find verified, comfortable, and affordable living
      options. By listing your property with us, you gain direct access to a highly targeted
      student audience actively looking for accommodation.
    </p>

    
  </div>
</section>


      <section className="relative py-16 bg-gray-50 overflow-hidden">
  {/* Optional Parallax Banner Background */}
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed opacity-50"
    style={{ backgroundImage: "url('/images/background/bg1.jpg')" }}
  ></div>

  {/* Content */}
  <div className="relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 underline decoration-indigo-500">
      How It Works
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center px-6">
      {steps.map((item, i) => (
        <div
          key={i}
          className="p-6 bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >
          <img src={item.icon} alt="" className="mx-auto mb-3 h-12 w-12" />

          <h3 className="font-bold text-indigo-700 text-lg">{item.step}</h3>
          <h4 className="mt-2 font-semibold text-xl">{item.title}</h4>

          <p className="text-sm text-gray-500 mt-2">{item.caption}</p>
          <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
      <ProviderTestimonials />
      {/* SUBSCRIPTION PLANS */}
<section id="subscription-plans" className="py-16 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-10">Subscription Plans</h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

    {plans.map((item, i) => (
      <div
        key={i}
        className="p-6 bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition duration-300"
      >
        {/* Title & Price */}
        <h3 className="font-bold text-indigo-700 text-lg">{item.title}</h3>
        <h4 className="mt-2 font-semibold text-xl">{item.price}</h4>

        {/* Features list */}
        <ul className="mb-6 space-y-3 text-gray-700 mt-4">
          {item.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full">✓</span>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition">
          Get Started
        </button>
      </div>
    ))}

  </div>
</section>
<section className="relative py-16 bg-gray-50 overflow-hidden">
        {/* Add-On Services */}
       <div className="mt-16 max-w-6xl mx-auto px-6 text-center"
       style={{
      backgroundImage: "url('/images/background/bg1.jpg')",
      transform: "translateZ(0)", // GPU acceleration for smoothness
    }}>
  <h2 className="text-4xl font-bold mb-8">Add-On Services</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white rounded-xl shadow-sm overflow-hidden">
    {/* Service 1 */}
    <div className="p-5 border border-gray-100">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">📸</span>
        <h3 className="font-semibold text-xme text-left">Photography & Content</h3>
      </div>
      <p className="text-gray-800 text-me">AED 300 / listing</p>
      <p className="text-indigo-700 text-sm italic">Professional photos, videos and descriptions that make your listing stand out and attract more students. </p>
    </div>

    {/* Service 2 */}
    <div className="p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">✨</span>
        <h3 className="font-semibold">Highlight in Search</h3>
      </div>
      <p className="text-gray-800 text-me">AED 100 / 7 days</p>
      <p className="text-indigo-700 text-sm italic">Get priority visibility in student search results to boost clicks and inquiries</p>
    </div>

    {/* Service 3 */}
    <div className="p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">🏠</span>
        <h3 className="font-semibold">Homepage Banners</h3>
      </div>
      <p className="text-gray-800 text-me">AED 200 / week</p>
      <p className="text-gray-700 text-sm">(AED 700 / month)</p>
      <p className="text-indigo-700 text-sm italic">Feature your brand front and centre on the TSD homepage for maximum exposure</p>
    </div>

    {/* Service 4 */}
    <div className="p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl">📢</span>
        <h3 className="font-semibold">Social Media Feature</h3>
      </div>
      <p className="text-gray-800 text-me">AED 499 for 3 posts</p>
      <p className="text-gray-700 text-sm">(Instagram & LinkedIn)</p>
      <p className="text-indigo-700 text-sm italic">Reach thousands of students with a spotlight, co-branded post on our active social media channels.</p>
    </div>
  </div>
</div>


      </section>

      {/* CALL TO ACTION */}
{/* CALL TO ACTION */}
<section
  className="relative py-20 text-white text-center overflow-hidden"
  style={{
    backgroundImage: "url('/images/cta-bg.jpg')",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-300/80 via-indigo-700/70 to-indigo-300/80"></div>

  {/* Content */}
  <div className="relative max-w-3xl mx-auto px-6">
    {/* Heading */}
    <motion.h2
      className="text-3xl sm:text-5xl font-extrabold mb-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Ready to List Your Property?
    </motion.h2>

    {/* Subtext */}
    <motion.p
      className="text-lg sm:text-xl mb-10 text-indigo-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Reach thousands of students actively searching for accommodation across the UAE.
    </motion.p>

    {/* Buttons */}
    <motion.div
      className="flex flex-col sm:flex-row justify-center items-center gap-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Email */}
      <a
        href="mailto:thestudentdorm@gmail.com"
        className="px-6 py-3 bg-white text-indigo-900 font-semibold rounded-lg shadow-md hover:bg-indigo-100 transition transform hover:scale-105"
      >
        📧 Email Us
      </a>

      {/* Provider Form (Primary CTA) */}
      <Link
  to="/pages/ProviderInterestForm"
  className="px-6 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition transform hover:scale-105"
>
  📝 Provider Interest Form
</Link>
    </motion.div>
  </div>
</section>
<NavigationButtons/>
    </div>
  );
};

export default ProvidersPage;
