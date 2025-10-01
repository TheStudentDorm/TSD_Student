import React from "react";
import { Link } from "react-router-dom";

export default function PartnerSection() {
  return (
    <section
      className="relative w-full h-[80vh] md:h-screen bg-cover bg-center md:bg-fixed text-center text-white"
      style={{ backgroundImage: `url('partner-bg.png')` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-xl sm:max-w-2xl mx-auto flex flex-col items-center justify-center h-full px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          PARTNER WITH US
        </h2>
        <p className="mb-6 text-base sm:text-lg md:text-xl">
          Are you an Accommodation Provider? <br /> Get discovered by thousands
          of students every month.
        </p>
        <Link
          to="/providers"
          className="relative inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-full font-semibold bg-[#02066f] text-white hover:bg-[#ff6d34] transition-all duration-300 shadow-lg hover:shadow-xl group"
        >
          View Pricing Plans
          <svg
            className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </Link>
      </div>
    </section>
  );
}
