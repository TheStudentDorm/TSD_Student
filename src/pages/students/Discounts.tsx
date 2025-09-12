import React, { useState } from "react";
import HeroSectionSmall from "../../components/HeroSectionSmall";
import TipsCarousel from "../../components/TipsCarousel";
import { Accordion, AccordionItem } from "../../components/ui/accordion";
import NavigationButtons from "../../components/NavigationButtons";
import { Underline } from "lucide-react";

const discountTips = [
  { title: "Student Cards", description: "Always carry your student ID (physical or digital), and ask at the counter.  You’d be surprised how many places offer unlisted discounts!" },
  { title: "Food & Dining", description: "Many restaurants offer student meals or discounts." },
  { title: "Events & Entertainment", description: "Check for student pricing at events, cinemas, and exhibitions." },
  { title: "Online Deals", description: "Look for online coupon codes and promotions." },
];

export default function Discounts() {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <main className="max-w-6xl mx-auto">
      <HeroSectionSmall
        title="Student Discounts & Perks"
        subtitle="Take advantage of your student status!"
        caption="Being a student in the UAE comes with more than just assignments and exams, it also means access to some great deals across travel, food, entertainment, and more! Here's how you can save smartly as a student"
        icon="/icons/discount.svg"
        image="/images/student-hero-discounts.jpg"
      />
      <div>      
        <h2 className="text-lg font-semibold text-tsd-blue text-center mt-12 mb-6">Heads up! Your university may already have special partnerships with brands, gyms, or tech providers. Before paying full price, check with your university; you could be eligible for extra discounts or offers just for your campus!</h2>
      </div>

      <div className="py-16 px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Student Discounts</h2>
          <button
            onClick={() => setExpandAll(!expandAll)}
            className="px-4 py-2 text-sm font-medium text-white bg-tsd-blue hover:bg-tsd-orange rounded-lg shadow"
          >
            {expandAll ? "Collapse All" : "Expand All"}
          </button>
        </div>

        <Accordion expandAll={expandAll}>
          <AccordionItem title="Tech & Electronics">
            <p><strong>Apple Education Store:</strong> Special pricing on Macs, iPads, AppleCare+ (Year-round).</p>
            <p><strong>Samsung Student Discount:</strong> 20–30% off on Galaxy devices. Free delivery + instalment options.</p>
          </AccordionItem>

          <AccordionItem title="Fashion & Retail">
            <p><strong>H&M:</strong> 10% off with valid student ID.</p>
            <p><strong>Bossini:</strong> 20% off in-store and online.</p>
          </AccordionItem>

          <AccordionItem title="Music Streaming">
            <p><strong>Spotify Premium Student:</strong> AED 11.99/month (up to 4 years).</p>
            <p><strong>Anghami Plus:</strong> 50% off subscription, offline mode, no ads.</p>
          </AccordionItem>

          <AccordionItem title="Fitness & Gyms">
            <p><strong>GymNation:</strong> From AED 99/month. Full access, no contract.</p>
            <p><strong>Fitness First:</strong> 10% off on memberships (show student ID).</p>
          </AccordionItem>

          <AccordionItem title="Transport & Travel">
  <div>
    <strong>EMIRATES DRIVING INSTITUTE - Youth Driving Course</strong>
    <p>
      Certain universities have partnered with EDI to bring you the Youth Driving packages inclusive of:
    </p>
    <ul className="list-disc pl-6 mt-2 space-y-2 marker:text-green-600 marker:text-lg">
      <li>E-lectures, unlimited tests and training until pass</li>
      <li>Flexible payment plans</li>
      <li>Flexible scheduling</li>
      <li>RTA fees inclusive</li>
      <li>Transportation available (buses to and fro or, direct pickups from trainers at selected locations)</li>
       <li>
    Check with your university to see if they are a partner. Go{" "}
    <a 
      href="https://edi-uae.com/en/Youth-Driving-Course" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-tsd-blue underline hover:bg-tsd-orange/50"
    >
      here
    </a>{" "}to learn more about subsidised fees, document requirements, procedure and more.
  </li>
</ul>
  </div>


           </AccordionItem>
        </Accordion>


{/* TSD Pro Tips Section */}
<section className="mt-16 p-6 bg-tsd-blue/10 border-l-4 border-tsd-orange rounded-lg max-w-3xl mx-auto">
  <h3 className="font-bold mb-2 text-tsd-blue text-lg">💡 TSD Pro Tips</h3>
  <ul className="list-disc pl-5 text-gray-800 space-y-2">
    {discountTips.map((tip, index) => (
      <li key={index}>
        <span className="font-semibold text-tsd-blue">{tip.title}:</span> {tip.description}
      </li>
    ))}
  </ul>
</section>
        {/* <h2 className="text-2xl font-semibold mt-12 mb-4">TSD Pro Tips!</h2>
        <TipsCarousel tips={discountTips} duration={30} /> */}
      </div>
      <NavigationButtons/>
    </main>
  );
}
