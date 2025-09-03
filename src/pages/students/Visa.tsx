import React, { useState } from "react";
import HeroSectionSmall from "../../components/HeroSectionSmall";
import TipsCarousel from "../../components/TipsCarousel";
import { motion, AnimatePresence } from "framer-motion";
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
  },
  {
    icon: FileText,
    title: "Submit Visa Application Documents",
    description: "Universities usually request your passport, photos, visa form, offer letter, and proof of accommodation.",
    details: "Some universities may also ask for a refundable deposit. Double-check requirements.",
  },
  {
    icon: Mail,
    title: "Receive the Entry Permit",
    description: "Issued within 1–3 weeks. Valid for 60 days, needed to legally enter UAE.",
    details: "Book your flight only after receiving the entry permit. Keep multiple copies for safety.",
  },
];

const afterArrivalSteps = [
  {
    icon: Stethoscope,
    title: "Complete Medical Fitness Test",
    description: "Within 7–10 days, complete X-ray & blood test at an approved clinic.",
    details: "Usually arranged by your university’s visa office. Required for Emirates ID & visa stamping.",
  },
  {
    icon: IdCard,
    title: "Apply for Emirates ID",
    description: "Biometric scanning for fingerprints & photo. Required for banking, housing, SIM cards.",
    details: "Submit Emirates ID application together with visa docs. It typically arrives within 7–10 days.",
  },
  {
    icon: Stamp,
    title: "Visa Stamping on Passport",
    description: "Your student visa (valid 1 year, renewable) is stamped. Passport may be held a few days.",
    details: "Your residence visa allows you to stay legally in UAE. Keep track of renewal deadlines.",
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

  const totalSteps = beforeArrivalSteps.length + afterArrivalSteps.length;

  const toggleStep = (index: number) => {
    if (expandAll) return; // when "Expand All" is active, individual clicks do nothing
    setOpenStep(openStep === index ? null : index);
  };

  const handleExpandCollapse = () => {
    if (expandAll) {
      setExpandAll(false);
      setOpenStep(null);
    } else {
      setExpandAll(true);
      setOpenStep(null); // disable single open
    }
  };

  return (
    <main className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <HeroSectionSmall
        title="Student Visa Guide"
        subtitle="Step-by-step guide to applying for your student visa in the UAE. From documentation to arrival, we’ve got you covered."
        icon="/icons/visa.svg"
        image="/images/student_visa.jpg"
      />

      <div className="py-16 px-6 space-y-16">
        {/* Documents Checklist */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 shadow">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Documents You’ll Need</h2>
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
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            {expandAll ? "Collapse All" : "Expand All"}
          </button>
        </div>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-semibold mb-10 text-indigo-700">Visa Timeline</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Before Arrival */}
            <div className="relative">
              <h3 className="text-xl font-bold mb-6 text-green-700">Before Arrival</h3>
              <div className="relative pl-6 space-y-12">
                <motion.div
                  className="absolute top-0 left-2 w-1 bg-green-300"
                  style={{ height: "100%" }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  transformOrigin="top"
                />
                {beforeArrivalSteps.map((step, index) => (
                  <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={index} variants={timelineItemVariant}>
                    <div
                      onClick={() => toggleStep(index)}
                      className="flex items-start gap-3 p-4 rounded-lg transition-all duration-200 group-hover:bg-green-50 group-hover:shadow-md cursor-pointer"
                    >
                      <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white shadow">
                        <step.icon size={16} />
                      </span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-green-800 flex justify-between items-center">
                          {step.title}
                          <ChevronDown
                            className={`transition-transform duration-300 ${expandAll || openStep === index ? "rotate-180" : ""}`}
                          />
                        </h4>
                        <p className="text-gray-600">{step.description}</p>
                        <AnimatePresence>
                          {(expandAll || openStep === index) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-2 text-gray-700 text-sm bg-green-50 p-3 rounded-lg"
                            >
                              {step.details}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* After Arrival */}
            <div className="relative">
              <h3 className="text-xl font-bold mb-6 text-indigo-700">After Arrival</h3>
              <div className="relative pl-6 space-y-12">
                <motion.div
                  className="absolute top-0 left-2 w-1 bg-indigo-300"
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
                    <motion.div key={realIndex} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={index} variants={timelineItemVariant}>
                      <div
                        onClick={() => toggleStep(realIndex)}
                        className="flex items-start gap-3 p-4 rounded-lg transition-all duration-200 group-hover:bg-indigo-50 group-hover:shadow-md cursor-pointer"
                      >
                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white shadow">
                          <step.icon size={16} />
                        </span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-indigo-800 flex justify-between items-center">
                            {step.title}
                            <ChevronDown
                              className={`transition-transform duration-300 ${expandAll || openStep === realIndex ? "rotate-180" : ""}`}
                            />
                          </h4>
                          <p className="text-gray-600">{step.description}</p>
                          <AnimatePresence>
                            {(expandAll || openStep === realIndex) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-2 text-gray-700 text-sm bg-indigo-50 p-3 rounded-lg"
                              >
                                {step.details}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
      <h2 className="text-2xl font-semibold mb-4">TSD Pro Tip!</h2>
              <TipsCarousel tips={VisaTips} duration={30}/>
      <NavigationButtons/>
    </main>
  );
}