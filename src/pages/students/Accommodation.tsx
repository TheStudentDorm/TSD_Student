import React from "react";
import TipsCarousel from "../../components/TipsCarousel";
import HeroSectionSmall from "../../components/HeroSectionSmall";
import NavigationButtons from "../../components/NavigationButtons";

const accommodationTips = [
  { title: "Budget Wisely", description: "Plan your monthly expenses carefully to avoid surprises." },
  { title: "Check Location", description: "Choose accommodation close to your university and transport." },
  { title: "Verify Listings", description: "Only book verified student accommodations for safety." },
  { title: "Roommates", description: "Communicate expectations with roommates beforehand." },
];

export default function Accommodation() {
  return (
    <main className="max-w-6xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <HeroSectionSmall
        title="Find Student Accommodation"
        subtitle="Discover your next home in the UAE. Verified listings, tips, and guides to make your student housing search simple."
        icon="/icons/accomodation.svg"
        image="/images/student_acc.jpg"
      />

      {/* Coming Soon */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🏠 Popular Student Accommodations</h2>
        <div className="p-10 bg-white rounded-2xl shadow-md inline-block">
          <p className="text-xl font-semibold text-gray-600">Coming Soon 🚧</p>
          <p className="text-gray-500 mt-2">We’re working hard to bring you verified student housing options.</p>
        </div>
      </section>

      {/* Pro Tips Carousel */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">TSD Pro Tips!</h2>
        <TipsCarousel tips={accommodationTips} duration={30} />
      </section>

      {/* Navigation */}
      <div className="mt-16">
        <NavigationButtons />
      </div>
    </main>
  );
}
