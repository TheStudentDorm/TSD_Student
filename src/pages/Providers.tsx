// src/pages/ProvidersPage.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ProviderTestimonials from "../components/ProviderTestimonials";
import NavigationButtons from "../components/NavigationButtons";
import { motion } from "framer-motion";

const steps = [
  { step: "STEP 1", title: "Get In Touch", caption: "Fill our Provider Interest Form or contact us directly.", desc:"Our partnerships team will guide you through the options based on your property size, facilities, and target audience", icon: "images/provider/step1.svg" },
  { step: "STEP 2", title: "Choose Your Plan", caption: "Select Basic, Standard or Featured subscription.", desc: "You can also explore add-on services like professional photography, homepage banners, and social media campaigns for boosted visibility.",icon: "images/provider/step2.svg" },
  { step: "STEP 3", title: "Share Property Details", caption: "Submit photos, room types, pricing, booking process.",desc: "Our team will help ensure your listing is accurate, attractive, and student-friendly", icon: "images/provider/step3.svg" },
  { step: "STEP 4", title: "Review & Approve", caption: "We’ll confirm details before publishing.",desc: "We’ll also advise on optimising your content for maximum engagement", icon: "images/provider/step4.svg" },
  { step: "STEP 5", title: "Go Live", caption: "Your listing is published and visible to students.",desc: "If you’ve opted for featured placements or add-ons, you’ll also benefit from priority exposure across our website and marketing channels", icon: "images/provider/step5.svg" },
  { step: "STEP 6", title: "Track & Optimise", caption: "We provide analytics for better performance.",desc: "• Student inquiries per listing • Traffic from our website • Social engagement (if add-ons are used)", icon: "images/provider/step6.svg" },
];

const plans = [
  {
    title: "BASIC",
    price: "Free",
    caption:"",
    features: [
      "Minimal listing and photos", 
      "List up to 2 units/room types with a single photo per unit",
      "Listing on TSD for 30 days",
      "Display of contact info (email & phone)",
      "Visible in student searches (default order)",
      "Provider dashboard for managing your listings"
    ],
    additionalinfo:"",
  },
  {
    title: "STANDARD",
    price: "AED 300/month",
    caption:"Everything in Basic, plus:",
    features: [
      "Profile page with photos, amenities",
      "Maximum 5 units/room types",
      "Add custom photos and videos",
      "Appear above Basic listings in search results",
      "Priority support for listing edits"
    ],
    additionalinfo:"*Enjoy up to 25% off premium add-ons including social media features, homepage banners, and content creation.",
    highlighted: true, // Highlighted for standard plan
  },
  {
    title: "FEATURED",
    price: "AED 550/month",
    caption:"Everything in Standard, plus:",
    features: [
      "Priority placement on search results, photos, amenities",
      "Highlighted listing with coloured border & priority tag",
      "Appear in top results",
      "One Social media feature (worth AED 499)",
      "One banner ad on homepage for 14 days (worth AED 400)",
      "Custom content creation (copy + layout assistance)"
    ],
    additionalinfo:"*Need more visibility? Featured partners can purchase extra social features, content packages, and banners at special rates",
  },
];

const ProvidersPage = () => {
  const location = useLocation();

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

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/property.jpg')", transform: "translateZ(0)" }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative z-10 max-w-4xl px-6">
          <h1
            className="mt-2 text-xl sm:text-3xl md:text-4xl font-bold leading-tight whitespace-nowrap bg-gradient-to-r text-white bg-clip-text text-transparent"
            style={{ fontFamily: "Times New Roman, sans-serif" }}
          >
            LIST YOUR ACCOMMODATION WITH TSD<br/><br/>
          </h1>

          <p className=" tracking-wide text-sm sm:text-base md:text-lg text-gray-200">
            Connect with Thousands of Students Across the UAE
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-100 ">
            The Student Dorm is the UAE’s fastest-growing student lifestyle and information
            platform, helping university students find verified, comfortable, and affordable living
            options. </p>
            <p>By listing your property with us, you gain direct access to a highly targeted
            student audience actively looking for accommodation.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS / STEPS */}
      <section className="relative py-16 bg-gray-50 overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-10  decoration-[#F9943B]">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center px-6">
            {steps.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white shadow-md rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <img src={item.icon} alt="" className="mx-auto mb-3 h-12 w-12" />

                <h3 className="font-bold text-[#F9943B] text-lg">{item.step}</h3>
                <h4 className="mt-2 font-semibold text-2xl text-[#004AAD]">{item.title}</h4>

                <p className="text-md text-gray-500 mt-2">{item.caption}</p>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    {/* You can add your testimonial components here, for example */}
    <ProviderTestimonials />

 
      {/* SUBSCRIPTION PLANS */}
      <section id="subscription-plans" className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#004AAD]">Subscription Plans</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((item, i) => (
            <div
              key={i}
              className={`group p-6 bg-white shadow-md rounded-2xl border flex flex-col 
                          transition duration-300 transform hover:scale-105 hover:shadow-2xl 
                          ${item.highlighted ? 'border-[#F9943B] border-4' : 'border-gray-200'}`}
            >
              <h3 className="font-bold text-[#004AAD] text-lg">{item.title}</h3>
              <h4 className="mt-2 font-semibold text-xl">{item.price}</h4>
              <div className="mt-2 font-semibold">{item.caption}</div>

              <ul className="space-y-3 text-gray-700 mt-4 flex-1 list-disc pl-6">
                {item.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              {item.additionalinfo && (
                <p className="mt-4 text-sm text-[#004AAD] italic">{item.additionalinfo}</p>
              )}

              <button
              onClick={() => {
                 document.getElementById("cta")?.scrollIntoView({ 
                            behavior: "smooth" 
                          });
                        }}
                className={`mt-4 px-6 py-3 rounded-lg font-semibold transition 
                           bg-[#004AAD] text-white hover:bg-[#003580] 
                           group-hover:shadow-lg group-hover:shadow-[#F9943B]/50 group-hover:scale-105`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-900 italic text-md">
          *Receive full list of plans and discounts upon enquiry only
        </p>
      </section>

      
     {/* ADD-ON SERVICES */}
<section
  className="relative py-16 bg-gray-50 overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/background/bg1.jpg')",
    transform: "translateZ(0)"
  }}
>
  {/* Optional overlay for contrast */}
  <div className="absolute inset-0 bg-white bg-opacity-80 pointer-events-none"></div>

  <div className="relative w-full px-6 text-center">
    <h2 className="text-4xl font-bold mb-12 text-[#004AAD]">Add-On Services</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden max-w-screen-xl mx-auto">
      {/* Card 1 */}
      <div className="p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">📸</span>
          <h3 className="font-semibold text-black text-left">Photography & Content</h3>
        </div>
        <p className="text-[#004AAD] text-sm italic">
          Professional photos, videos and descriptions that make your listing stand out and attract more students.
        </p>
        <p className="text-gray-800 mt-3">AED 300 / listing</p>
      </div>

      {/* Card 2 */}
      <div className="p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">✨</span>
          <h3 className="font-semibold text-black">Highlight in Search</h3>
        </div>
        <p className="text-[#004AAD] text-sm italic">
          Get priority visibility in student search results to boost clicks and inquiries.
        </p>
        <p className="text-gray-800 mt-3">AED 100 / 7 days</p>
      </div>

      {/* Card 3 */}
      <div className="p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">🏠</span>
          <h3 className="font-semibold text-black">Homepage Banners</h3>
        </div>
        <p className="text-[#004AAD] text-sm italic">
          Feature your brand front and centre on the TSD homepage for maximum exposure.
        </p>
        <p className="text-gray-800 mt-3">AED 200 / week</p>
        <p className="text-gray-700 text-sm">(AED 700 / month)</p>
      </div>

      {/* Card 4 */}
      <div className="p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">📢</span>
          <h3 className="font-semibold text-black">Social Media Feature</h3>
        </div>
        <p className="font-semibold text-gray-700 text-md">(Instagram & LinkedIn)</p>
        <p className="text-[#004AAD] text-sm italic mt-2">
          Reach thousands of students with a spotlight, co-branded post on our active social media channels.
        </p>
        <p className="text-gray-800 mt-3">AED 499 for 3 posts</p>
      </div>
    </div>
  </div>
</section>


      {/* CALL TO ACTION */}
      <section id="cta" className="relative py-16 bg-gradient-to-r from-tsd-blue via-tsd-orange to-tsd-blue">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Start Your Listing Today!</h2>
          <p className="mb-6 text-lg">Our team is here to assist you every step of the way.</p>
          <div className="flex justify-center gap-6">
            <Link
              to="mailto:support@tsd.com"
              className="px-6 py-3 rounded-lg font-semibold bg-tsd-blue hover:bg-tsd-orange"
            >
              Email Us
            </Link>
            <Link
              to="/pages/ProviderInterestForm"
              className="px-6 py-3 rounded-lg font-semibold bg-[#004AAD] hover:bg-tsd-orange"
            >
              Fill Out Interest Form
            </Link>
          </div>
        </div>
      </section>

      <NavigationButtons />
    </div>
  );
};

export default ProvidersPage;
