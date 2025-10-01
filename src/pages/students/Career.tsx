import React, { useState } from "react";
import HeroSectionSmall from "../../components/HeroSectionSmall";
import NavigationButtons from "../../components/NavigationButtons";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Can I apply even if I’m a full-time student?",
    a: "Yes! All roles at TSD are remote/flexible and designed to accommodate class schedules.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Absolutely. All interns and team members receive experience letters/certificates.",
  },
];

export default function Careers() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <HeroSectionSmall
        title="Careers & Internships"
        subtitle="Explore internships, part-time jobs, and career opportunities tailored for students in the UAE."
        icon="/icons/career.svg"
        image="/images/student-hero-careers.jpg"
      />

      {/* Career Opportunities & Careers at TSD */}
<section className="py-16 px-6 space-y-8">
  {/* Career Opportunities Box */}
  <div className="relative p-6 bg-orange-100 rounded-xl shadow-md border border-gray-200">
    {/* UAE Flag corners */}
   {/*  <div className="absolute top-0 left-0 w-6 h-6 bg-red-600 rounded-tr-full"></div>
    <div className="absolute top-0 right-0 w-6 h-6 bg-black rounded-bl-full"></div>
    <div className="absolute bottom-0 left-0 w-6 h-6 bg-green-600 rounded-tr-full"></div>
    <div className="absolute bottom-0 right-0 w-6 h-6 bg-yellow-400 rounded-bl-full"></div>
 */}
    <h2 className="text-3xl font-bold text-black mb-4">
      Career Opportunities in the UAE
    </h2>
    <p className="text-lg text-gray-700 leading-snug mb-4">
      <strong>Explore What’s Out There</strong>
      <br />
      We’ve curated real-time internship and entry-level job opportunities
      across the UAE, especially student-friendly roles in marketing,
      operations, finance, tech, and design.
    </p>
    <div className="flex justify-center">
      <div className="p-4 bg-yellow-50 border-2 border-dashed border-tsd-orange rounded-xl shadow inline-block">
        <p className="text-tsd-orange font-semibold text-lg">🚧 Coming Soon</p>
      </div>
    </div>
  </div>

  {/* Careers at TSD Box */}
  <div className="relative p-6 bg-green-50 rounded-xl shadow-md border border-gray-200">
    {/* TSD brand corners */}
   {/*  <div className="absolute top-0 left-0 w-6 h-6 bg-tsd-blue rounded-tr-full"></div>
    <div className="absolute top-0 right-0 w-6 h-6 bg-tsd-orange rounded-bl-full"></div>
    <div className="absolute bottom-0 left-0 w-6 h-6 bg-tsd-orange rounded-tr-full"></div>
    <div className="absolute bottom-0 right-0 w-6 h-6 bg-tsd-blue rounded-bl-full"></div> */}

    <h2 className="text-3xl font-bold text-black mb-4">Careers at TSD</h2>
    <p className="text-lg text-gray-700 leading-snug mb-3">
      Be part of a fast-growing student-led startup transforming campus
      life in the UAE.
    </p>

    <h3 className="text-xl text-tsd-orange mb-1 font-semibold">
      Why work with us?
    </h3>
    <p className="text-gray-700 text-md leading-tight sm:leading-snug mb-0">
      We’re young, dynamic, and driven by purpose. Working at TSD means
      joining a team that values initiative, creativity, and student
      insight — because that’s where we came from.
    </p>

    <div className="flex justify-center mt-4">
      <div className="p-4 bg-yellow-50 border-2 border-dashed border-tsd-orange rounded-xl shadow inline-block">
        <p className="text-tsd-orange font-semibold text-lg">🚧 Coming Soon</p>
      </div>
    </div>
  </div>
</section>

        {/* Pitch Us Your Role */}
        <section className="py-16 px-6 bg-gradient-to-br from-white to-gray-50">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Pitch Your Role Box */}
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-tsd-blue mb-3">
        Can’t find your role?
      </h2>
      <p className="text-gray-700 leading-snug mb-2">
        <strong>Pitch us your skillset!</strong> If you're passionate about
        students, design, or coding, we want to hear from you.
      </p>
      <p className="text-gray-700">
        Email:{" "}
        <a
          href="mailto:thestudentdorm@gmail.com"
          className="text-tsd-orange underline hover:text-tsd-blue transition-colors"
        >
          thestudentdorm@gmail.com
        </a>{" "}
        with your CV and a short 2-sentence pitch.
      </p>
    </div>

    {/* FAQ Box */}
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 flex flex-col">
      <h2 className="text-2xl font-semibold text-tsd-blue mb-4">FAQs</h2>
      <div className="flex-1 overflow-y-auto max-h-[400px] space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded-lg p-4 shadow-sm bg-white">
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="font-medium text-gray-800">{faq.q}</span>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform ${
                  openIndexes.includes(i) ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndexes.includes(i) ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 leading-snug">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

   

      <NavigationButtons />
    </main>
  );
}