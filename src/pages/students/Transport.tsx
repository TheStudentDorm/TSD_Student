import React from "react";
import HeroSectionSmall from "../../components/HeroSectionSmall";
import TipsCarousel from "../../components/TipsCarousel";
import { Train, Bus, Car, Map, CreditCard, ChevronDown } from "lucide-react";
import NavigationButtons from "../../components/NavigationButtons";

const transportTips = [
  { title: "Use Metro", description: "Dubai Metro is fast, safe, and budget-friendly for students." },
  { title: "Ride-Hailing Apps", description: "Apps like Careem and Uber make getting around easy." },
  { title: "Student Cards", description: "Check if you are eligible for student transport discounts." },
  { title: "Plan Routes", description: "Always check schedules and routes before traveling." },
];

const faqs = [
  {
    question: "Can I get a monthly pass with the Nol Student Card?",
    answer:
      "Yes, RTA offers discounted monthly and weekly passes for students holding a valid Nol Student Card.",
  },
  {
    question: "How do I apply for a Nol Student Card?",
    answer:
      "You can apply online through the RTA website by submitting your Emirates ID, a photo, and a valid student ID or university enrollment letter.",
  },
  {
    question: "Are student discounts available on taxis?",
    answer:
      "Currently, student discounts are not available for taxis or ride-hailing apps like Uber and Careem.",
  },
  {
    question: "Do international student cards (ISIC) work in Dubai?",
    answer:
      "The ISIC card is not directly linked to RTA, but it is accepted by some private transport providers and can be useful abroad.",
  },
];

type FAQAccordionProps = {
  faqs: { question: string; answer: string }[];
};

function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg shadow-sm overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-medium text-gray-800">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-600 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-700 bg-white">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Transport() {
  return (
    <main className="max-w-7xl mx-auto">
      {/* Hero */}
      <HeroSectionSmall
        title="Transport Made Simple"
        subtitle="Learn how to navigate the UAE efficiently with public transport, taxis, ride-hailing apps, and student-friendly options."
        icon="/icons/transport.svg"
        image="/images/student_trans.jpg"
      />

      {/* Info Blocks */}
      <section className="py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Getting Around the UAE
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Metro */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow hover:shadow-lg transition">
            <Train className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Metro</h3>
            <p className="text-gray-700 text-sm">
              Dubai Metro is the fastest and most affordable way for students to travel across the city.
            </p>
          </div>

          {/* Bus */}
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow hover:shadow-lg transition">
            <Bus className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Bus</h3>
            <p className="text-gray-700 text-sm">
              RTA buses cover a wide network and are budget-friendly with student cards.
            </p>
          </div>

          {/* Taxi */}
          <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow hover:shadow-lg transition">
            <Car className="w-10 h-10 text-yellow-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Taxi / Ride Apps</h3>
            <p className="text-gray-700 text-sm">
              Use Careem, Uber, or RTA taxis for flexible and safe travel anytime.
            </p>
          </div>

          {/* Route Planning */}
          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow hover:shadow-lg transition">
            <Map className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Route Planning</h3>
            <p className="text-gray-700 text-sm">
              Plan ahead using RTA apps or Google Maps to avoid delays and save time.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Carousel */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          TSD Pro Tips!
        </h2>
        <TipsCarousel tips={transportTips} duration={30} />
      </section>

      {/* Student Transport Cards */}
      <section className="py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Student Transport Cards
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Nol Card */}
          <div className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl shadow hover:shadow-lg transition text-center">
            <CreditCard className="w-10 h-10 text-indigo-600 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">Student Nol Card</h3>
            <p className="text-gray-700 text-sm mb-3">
              Special discounted fares for Metro, Bus, and Tram. Apply via RTA website with student ID.
            </p>
            <a
              href="https://www.rta.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline font-medium"
            >
              Apply Now
            </a>
          </div>

          {/* University ID */}
          <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl shadow hover:shadow-lg transition text-center">
            <CreditCard className="w-10 h-10 text-pink-600 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">University ID</h3>
            <p className="text-gray-700 text-sm mb-3">
              Many universities partner with RTA and private transport providers for special rates.
            </p>
            <a
              href="#"
              className="text-pink-600 hover:underline font-medium"
            >
              Check with your University
            </a>
          </div>

          {/* International Student Cards */}
          <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl shadow hover:shadow-lg transition text-center">
            <CreditCard className="w-10 h-10 text-teal-600 mb-4 mx-auto" />
            <h3 className="font-semibold text-lg mb-2">ISIC Card</h3>
            <p className="text-gray-700 text-sm mb-3">
              The International Student Identity Card (ISIC) is accepted worldwide for discounts, including some transport services.
            </p>
            <a
              href="https://www.isic.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:underline font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <FAQAccordion faqs={faqs} />
      </section>
      <NavigationButtons />
    </main>
  );
}
