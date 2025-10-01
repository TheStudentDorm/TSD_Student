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
    <main className="full">
      <section className="hero-section relative h-screen w-screen flex items-center justify-center text-white overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed print:hidden"
    style={{ backgroundImage: "url('/images/student-hero-discounts.jpg')" }}
  >
    <div className="absolute inset-0 bg-black/20"></div>
  </div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-3xl px-6 text-center mt-20 md:mt-0">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight uppercase text-white drop-shadow">
     Student Discounts & Perks
    </h1>

    <p className="mt-6 text-lg md:text-xl text-white/90">
      Take advantage of your student status!
    </p>
    <p className="mt-4 text-base md:text-lg text-white/80">
      Being a student in the UAE comes with more than just assignments and exams, it also means access to some great deals across travel, food, entertainment, and more! Here's how you can save smartly as a student
    </p>
  </div>
</section>
      {/* <HeroSectionSmall
        title="Student Discounts"
        subtitle="Take advantage of your student status!"
        caption="Being a student in the UAE comes with more than just assignments and exams, it also means access to some great deals across travel, food, entertainment, and more! Here's how you can save smartly as a student"
        icon="/icons/discount.svg"
        image="/images/student-hero-discounts.jpg"
      /> */}
      <div>      
        <h2 className="text-lg  text-tsd-blue text-center mt-12 mb-6"><b>Heads up!</b> Your university may already have special partnerships with brands, gyms, or tech providers. Before paying full price, check with your university; you could be eligible for extra discounts or offers just for your campus!</h2>
      </div>

      <div className="py-16 px-6 space-y-20">
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
          


        {/* <h2 className="text-2xl font-semibold mt-12 mb-4">TSD Pro Tips!</h2>
        <TipsCarousel tips={discountTips} duration={30} /> */}
      </div>
      <section>
            <div className="mt-8 p-4 border-l-4 border-[#F9943B] bg-[#FFF7F0] rounded-md shadow-sm max-w-2xl mx-auto">
                  <p className="text-gray-800 text-center text-base sm:text-md">
                     <span className="font-semibold">💡TSD Pro Tip !</span></p><p>  Always carry your student ID (physical or digital), and ask at the counter.</p><p> You’d be surprised how many places offer unlisted discounts!
                  </p></div>

          </section>
      <NavigationButtons/>
    </main>
  );
}
