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
    <main className="max-w-6xl mx-auto">
      <HeroSectionSmall
        title="Careers & Internships"
        subtitle="Explore internships, part-time jobs, and career opportunities tailored for students in the UAE."
        icon="/icons/career.svg"
        image="/images/student-hero-careers.jpg"
      />

      <div className="py-16 px-6">
        <div className="p-6 bg-white shadow rounded-lg mb-12">
          Career listings and tips.
        </div>

        <h2 className="text-2xl font-semibold mb-4">TSD Pro Tips!</h2>
        <TipsCarousel tips={careersTips} duration={30} />
      </div>
      <NavigationButtons/>
    </main>
  );
}
