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
    
    <main className="max-w-5xl mx-auto py-16 px-6">
        <HeroSectionSmall
        title="Find Student Accommodation"
        subtitle="Discover your next home in the UAE. Verified listings, tips, and guides to make your student housing search simple."
        icon="/icons/accomodation.svg"
        image="/images/student_acc.jpg"
      /><br/><br/>
      <h2 className="text-2xl font-semibold mb-4">Popular Student Accommodations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 bg-white shadow rounded-lg">Accommodation Listing 1</div>
        <div className="p-6 bg-white shadow rounded-lg">Accommodation Listing 2</div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">TSD Pro Tips!</h2>
      <TipsCarousel tips={accommodationTips} duration={30}/>
      <NavigationButtons/>
    </main>
  );
}
