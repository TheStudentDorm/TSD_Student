import React, { useState } from "react";
import HeroSectionSmall from "../../components/HeroSectionSmall";
import { motion, AnimatePresence } from "framer-motion";
import TimelineItem from "../../components/TimelineItem";
import {
  BookOpen,
  FileText,
  Mail,
  Stethoscope,
  IdCard,
  Stamp,
  ChevronDown,
} from "lucide-react";
import NavigationButtons from "../../components/NavigationButtons";

const VisaTips = [
  { title: "Document Checklist", description: "Prepare all required documents before applying for your visa." },
  { title: "Apply Early", description: "Avoid last-minute issues by submitting your application in advance." },
  { title: "Track Application", description: "Monitor your visa status regularly online." },
  { title: "University Support", description: "Reach out to your university for guidance on visa procedures." },
];

const beforeArrivalSteps = [
  {
    icon: BookOpen,
    title: "Get Accepted to a UAE University",
    description: "Visa process starts once you receive your official admission letter.",
    details: "Ensure your chosen university is licensed to sponsor student visas in the UAE.",
     tips: [
      "Confirm the university’s eligibility for visa sponsorship before paying any fees.",
      "Check if there are specific departments handling international students."
    ],
  },
  {
    icon: FileText,
    title: "Submit Visa Application Documents",
    description: "Universities usually request your passport, photos, visa form, offer letter, and proof of accommodation.",
    details: "Some universities may also ask for a refundable deposit. Double-check requirements.",
    tips: ["Some universities also require a refundable visa deposit at this stage."],
  },
  {
    icon: Mail,
    title: "Receive the Entry Permit",
    description: "Issued within 1–3 weeks. Valid for 60 days, needed to legally enter UAE.",
    details: "Book your flight only after receiving the entry permit. Keep multiple copies for safety.",
    tips:["Once you enter the UAE on a student entry permit, you usually have 60 days to complete all steps, including medical, ID, and visa stamping. ",
          "Overstaying leads to fines (AED 50+ per day)!"],
  },
];

const afterArrivalSteps = [
  {
    icon: Stethoscope,
    title: "Complete Medical Fitness Test",
    description: "Within 7–10 days, complete X-ray & blood test at an approved clinic.",
    details: "Usually arranged by your university’s visa office. Required for Emirates ID & visa stamping.",
    tips:[
      "Usually organised by your university or visa officer."
    ]
  },
  {
    icon: IdCard,
    title: "Apply for Emirates ID",
    description: "Biometric scanning for fingerprints & photo. Required for banking, housing, SIM cards.",
    details: "Submit Emirates ID application together with visa docs. It typically arrives within 7–10 days.",
    tips:[
      "Keep digital & printed copies of all your documents every step of the way. Immigration may ask for originals."
    ]
  },
  {
    icon: Stamp,
    title: "Visa Stamping on Passport",
    description: "Your student visa (valid 1 year, renewable) is stamped. Passport may be held a few days.",
    details: "Your residence visa allows you to stay legally in UAE. Keep track of renewal deadlines.",
    tips:[
      "Your residence visa allows you to stay legally in the UAE for the visa duration (usually 1 year).",
      "Keep track of your visa renewal deadlines to avoid fines.",
      "Late renewals can block you from accessing services or travelling."
    ]
  },
];

// Animation
const timelineItemVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Visa() {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [expandAll, setExpandAll] = useState(false);

  const toggleStep = (index: number) => {
    if (expandAll) return;
    setOpenStep(openStep === index ? null : index);
  };

  const handleExpandCollapse = () => {
    if (expandAll) {
      setExpandAll(false);
      setOpenStep(null);
    } else {
      setExpandAll(true);
      setOpenStep(null);
    }
  };

  return (
    <main className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <HeroSectionSmall
        title="Student Visa Guide"
        subtitle="Everything you need to know to study legally and stress-free."
        caption="Whether you’re joining university from outside the UAE or shifting your visa from a parent or sponsor, here’s your complete guide to obtaining a UAE student visa."
        image="/images/student_visa.png"
         fixedBackground
      />

      <div className="py-16 px-6 space-y-16">
        {/* Documents Checklist */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-[#F2F3F4] to-[#F2F3F4]/60 shadow">
          <h2 className="text-2xl font-semibold mb-4 text-[#004AAD]">
            Documents You’ll Need
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>A valid passport (with at least 6 months validity)</li>
            <li>Admission letter or enrolment certificate</li>
            <li>Recent passport-size photos (white background)</li>
            <li>Tuition fee receipt or proof of registration</li>
            <li>Medical fitness test (done after arrival)</li>
            <li>Emirates ID application form</li>
            <li>Proof of accommodation (e.g. student housing contract)</li>
            <li>Visa fee payment receipt</li>
          </ul>
        </section>

        {/* Expand/Collapse All Button */}
        <div className="flex justify-end">
          <button
            onClick={handleExpandCollapse}
            className="px-4 py-2 bg-[#004AAD] text-white rounded-lg shadow hover:bg-[#003580] transition"
          >
            {expandAll ? "Collapse All" : "Expand All"}
          </button>
        </div>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-semibold mb-10 text-[#004AAD]">Visa Timeline</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
  {/* Before Arrival */}
  <div className="relative">
    <h3 className="text-xl font-bold mb-6 text-[#F9943B]">Before Arrival</h3>
    <div className="relative pl-6 space-y-12">
      <motion.div
        className="absolute top-0 left-2 w-1 bg-[#F9943B]/50"
        style={{ height: "100%" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        transformOrigin="top"
      />
      {beforeArrivalSteps.map((step, index) => (
        <TimelineItem
  icon={step.icon}
  title={step.title}
  description={step.description}
  details={step.details}
  tips={step.tips} // array here
  isOpen={expandAll || openStep === index}
  onToggle={() => toggleStep(index)}
  bgColor="#F9943B"
  textColor="text-[#004AAD]"
  index={index}
  lineColor="#F9943B/50"
  isLast={index === beforeArrivalSteps.length - 1}
/>
      ))}
    </div>
  </div>

  {/* After Arrival */}
  <div className="relative">
    <h3 className="text-xl font-bold mb-6 text-[#004AAD]">After Arrival</h3>
    <div className="relative pl-6 space-y-12">
      <motion.div
        className="absolute top-0 left-2 w-1 bg-[#004AAD]/40"
        style={{ height: "100%" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        transformOrigin="top"
      />
      {afterArrivalSteps.map((step, index) => {
        const realIndex = index + beforeArrivalSteps.length;
        return (
          <TimelineItem
  icon={step.icon}
  title={step.title}
  description={step.description}
  details={step.details}
  tips={step.tips} // array now
  isOpen={expandAll || openStep === realIndex}
  onToggle={() => toggleStep(realIndex)}
  bgColor="#004AAD"
  textColor="text-[#004AAD]"
  index={realIndex}
  lineColor="#004AAD/40"
  isLast={index === afterArrivalSteps.length - 1}
/>
        );
      })}
    </div>
  </div>
</div>  
        </section>
      </div>

      {/* Pro Tips as List */}
      <section className="mt-16 p-6 bg-[#004AAD]/10 border-l-4 border-[#F9943B] rounded-lg max-w-3xl mx-auto">
        <h3 className="font-bold mb-2 text-[#004AAD]">💡 TSD Pro Tips</h3>
        <ul className="list-disc pl-5 text-gray-800 space-y-1">
          {VisaTips.map((tip, index) => (
            <li key={index}>
              <span className="font-semibold text-[#004AAD]">{tip.title}:</span> {tip.description}
            </li>
          ))}
        </ul>
      </section>

      <NavigationButtons />
    </main>
  );
}
