import React from "react";
import HeroSectionSmall from "../../components/HeroSectionSmall";
import TipsCarousel from "../../components/TipsCarousel";
import NavigationButtons from "../../components/NavigationButtons";

const careersTips = [
  { title: "Intern Early", description: "Start internships as early as possible to gain experience." },
  { title: "Update CV", description: "Keep your CV and portfolio up-to-date." },
  { title: "Networking", description: "Attend events and webinars to meet potential employers." },
  { title: "Skill Development", description: "Learn new skills relevant to your field while studying." },
];

export default function Careers() {
  return (
    <main className="max-w-6xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <HeroSectionSmall
        title="Careers & Internships"
        subtitle="Explore internships, part-time jobs, and career opportunities tailored for students in the UAE."
        icon="/icons/career.svg"
        image="/images/student-hero-careers.jpg"
      />

      {/* Coming Soon */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">💼 Career Listings</h2>
        <div className="p-10 bg-white rounded-2xl shadow-md inline-block">
          <p className="text-xl font-semibold text-gray-600">Coming Soon 🚧</p>
          <p className="text-gray-500 mt-2">
            We’re building a curated list of internships, part-time jobs, and student opportunities in the UAE.
          </p>
        </div>
      </section>

      {/* Pro Tips Carousel */}
      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">TSD Pro Tips!</h2>
        <TipsCarousel tips={careersTips} duration={30} />
      </section>

      {/* Navigation */}
      <div className="mt-16">
        <NavigationButtons />
      </div>
    </main>
  );
}
