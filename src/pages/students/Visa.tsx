import React, { useState, useEffect } from "react";
import HeroSectionSmall from "../../components/HeroSectionSmall";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import TimelineItem from "../../components/TimelineItem";
import {
  BookOpen,
  FileText,
  Mail,
  Stethoscope,
  IdCard,
  Stamp,
} from "lucide-react";
import NavigationButtons from "../../components/NavigationButtons";
import "../../style/print_visa.css";


// Steps before arrival
const beforeArrivalSteps = [
  {
    icon: BookOpen,
    title: "Get Accepted to a UAE University",
    description:
      "Your visa process starts once you receive your official admission letter. Make sure your university is licensed to sponsor student visas.",
    tips: [
      "Visa processing can take up to 3–6 weeks, especially during peak seasons.",
      "Don’t wait for your final grades; once you’re accepted, start gathering documents.",
    ],
  },
  {
    icon: FileText,
    title: "Submit Visa Application Documents",
    description:
      "Send your documents to your university or the visa department. Most universities will request:",
    details: [
      "Scanned passport (valid 6+ months)",
      "Passport-size photos (white background)",
      "Signed visa application form",
      "Offer letter / enrolment confirmation",
      "Proof of accommodation (university housing or off-campus housing)",
    ],
    tips: [],
  },
  {
    icon: Mail,
    title: "Receive the Entry Permit (Electronic Visa)",
    description:
      "Once approved, you’ll receive an entry permit via email (usually takes 1–3 weeks). This allows you to legally enter the UAE for study.",
    details: [
      "Valid for 60 days from date of issue",
      "Print a copy and keep it handy during travel",
    ],
    tips: [
      "Once you enter the UAE on a student entry permit, you usually have 60 days to complete all steps, including medical, ID, and visa stamping.",
      "Overstaying leads to fines (AED 50+ per day)!",
    ],
  },
];

// Steps after arrival
const afterArrivalSteps = [
  {
    icon: Stethoscope,
    title: "Complete Medical Fitness Test",
    description:
      "Within the first 7–10 days after arrival, you must undergo a mandatory medical test at a government-approved clinic.",
    details: ["Tests include:", "Chest X-ray", "Blood test (for infectious diseases)"],
    tips: ["Usually organised by your university or visa officer."],
  },
  {
    icon: IdCard,
    title: "Apply for Emirates ID (Biometric Scanning)",
    description:
      "Visit an Emirates ID centre for fingerprinting and photo. This ID is your official UAE identification; you’ll need it for banking, sim cards, and housing.",
    details: [
      "Usually submitted with your visa documents",
      "Emirates ID arrives in 7–10 working days",
    ],
    tips: [
      "Keep digital & printed copies of all your documents every step of the way.",
      "Immigration may ask for originals.",
    ],
  },
  {
    icon: Stamp,
    title: "Visa Stamping on Passport",
    description:
      "Once your medical is cleared and Emirates ID is processed, your student residence visa will be stamped in your passport.",
    details: [
      "Valid for 1 year (or longer depending on your program)",
      "Renewable annually",
      "Your passport may be held for a few days during stamping",
    ],
    tips: [
      "Student visas are often valid for 1 year, and you must renew before it expires.",
      "Late renewals can block you from accessing services or travelling.",
    ],
  },
];

export default function Visa() {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [expandAll, setExpandAll] = useState(false);

  // Expand all before print and reset after print
  useEffect(() => {
    const handleBeforePrint = () => setExpandAll(true);
    const handleAfterPrint = () => setExpandAll(false);

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);
    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  const toggleStep = (index: number) => {
    if (expandAll) return;
    setOpenStep(openStep === index ? null : index);
  };

  const handleExpandCollapse = () => {
    setExpandAll((prev) => !prev);
    setOpenStep(null);
  };
const handleDownloadPDF = () => {
  const mainElement = document.querySelector("main");

  if (!mainElement) return;

  // Apply print-style layout manually
  mainElement.classList.add("print-mode");

  // Use timeout to allow styles to apply
  setTimeout(() => {
    html2canvas(mainElement as HTMLElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff", // white background
      scrollY: -window.scrollY,   // capture visible content only
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = 210;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("student_visa_guide.pdf");

      // Clean up
      mainElement.classList.remove("print-mode");
    });
  }, 300); // delay to apply print-mode styles
};
  // ✅ Expand all before printing, then call window.print()
  const handlePrint = () => {
    setExpandAll(true);
    setTimeout(() => {
      window.print();
    }, 300);
  };

  return (
    <main className="max-w-6xl mx-auto ">
       {/* ✅ Logo for print only */}
      <div className="print-logo print:block hidden text-center mb-6">
        <img src="/images/tsd-logo.png" alt="University Logo" className="mx-auto w-40" />
      </div>
      {/* Hero Section */}
       
      <HeroSectionSmall
        title="Student Visa Guide"
        subtitle="Everything you need to know to study legally and stress-free."
        caption="Whether you’re joining university from outside the UAE or shifting your visa from a parent or sponsor, here’s your complete guide to obtaining a UAE student visa."
        image="/images/student_visa.png"
        fixedBackground={false}
        className="hero-section"
      />
    

      <div className="py-16 px-6 space-y-16 print-section">
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
          <div className="text-[#004AAD] pt-6 mb-4 ">
            <b>Heads up!</b> Your university's student services or visa office is your go-to source for updates, timelines, and application support.
          </div>
        </section>

        {/* Expand/Collapse All */}
        <div className="flex justify-end print:hidden">
          <button
            onClick={handleExpandCollapse}
            className="px-4 py-2 bg-[#004AAD] text-white rounded-lg shadow hover:bg-[#F9943B] transition"
          >
            {expandAll ? "Collapse All" : "Expand All"}
          </button>
        </div>

        {/* Timeline Section */}
        <div className="timeline-block print-section">
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
                      key={index}
                      icon={step.icon}
                      title={step.title}
                      description={step.description}
                      details={step.details}
                      tips={step.tips}
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
                        key={realIndex}
                        icon={step.icon}
                        title={step.title}
                        description={step.description}
                        details={step.details}
                        tips={step.tips}
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

        {/* ✅ Print Buttons */}
        <div className="flex justify-end items-center print:hidden">
                   <button
            onClick={handlePrint}
            className="px-4 py-2 bg-[#004AAD] text-white rounded-lg shadow hover:bg-tsd-orange transition ml-2"
          >
            Download/Print Page
          </button>
        </div>
      </div>

      {/* Navigation */}
      <NavigationButtons />
    </main>
  );
}
