// src/pages/UAEAttractions.tsx
import React, { useState, useEffect, useRef } from "react";

import NavigationButtons from "../../components/NavigationButtons";

interface Attraction {
  name: string;
  description: string;
  openingHours?: string;
  entryFee?: string;
  dressCode?: string;
  website?: string;
  image?: string;
}

interface Emirate {
  name: string;
  attractions: Attraction[];
}

const uaeAttractions: Emirate[] = [
  {
    name: "Abu Dhabi",
    attractions: [
      {
        name: "Sheikh Zayed Grand Mosque",
        description:
          "One of the largest and most breathtaking mosques in the world, with white marble, grand domes, and intricate mosaics. Open to visitors of all faiths.",
        openingHours: "Daily 9:00 AM – 10:00 PM (closed 12–3 PM on Fridays)",
        entryFee: "Free",
        dressCode:
          "Modest clothing; long sleeves and trousers for men, abayas and headscarves provided for women.",
        website: "https://www.szgmc.gov.ae",
        image: "/images/attractions/Auh_1.jpg",
      },
      {
        name: "Louvre Abu Dhabi",
        description:
          "World-class museum blending global history and art with striking architecture.",
        openingHours:
          "Tue–Sun 10:00 AM – 6:30 PM (exhibitions), until 12:00 AM for dining/dome",
        entryFee: "AED 63 (students eligible for membership perks)",
        dressCode: "Casual to smart-casual",
        website: "https://www.louvreabudhabi.ae",
        image: "/images/attractions/Auh_2.jpg",
      },
      {
        name: "Yas Island",
        description:
          "Entertainment hub with Ferrari World, Yas Waterworld, and Warner Bros. World.",
        entryFee: "AED 250–350 per day; student/group discounts available",
        dressCode: "Comfortable clothing",
        website: "https://www.ferrariworldabudhabi.com",
        image: "/images/attractions/Auh_3.jpg",
      },
    ],
  },
  {
    name: "Dubai",
    attractions: [
      {
        name: "Burj Khalifa & Dubai Mall",
        description:
          "Iconic destination with shopping, dining, Dubai Fountain, and panoramic views.",
        openingHours:
          "Burj Khalifa: Daily 10:00 AM – Midnight (last entry 45 mins before close); Dubai Mall: 10:00 AM – Midnight",
        entryFee: "Burj Khalifa from AED 169",
        website: "https://www.burjkhalifa.ae",
        image: "/images/attractions/Dxb_1.jpg",
      },
      {
        name: "Dubai Desert Safari",
        description:
          "Adventure with dune bashing, camel rides, sandboarding, BBQ dinners, and shows.",
        openingHours: "3:00 PM – 10:00 PM (hotel pickup included)",
        entryFee: "AED 150–300 depending on package",
        image: "/images/attractions/Dxb_3.jpg",
      },
      {
        name: "Alserkal Avenue",
        description:
          "Dubai’s creative arts hub with galleries, design studios, cafes, exhibitions, talks, and screenings.",
        openingHours: "Daily 10:00 AM – 8:00 PM",
        entryFee: "Free",
        website: "https://www.alserkal.online",
        image: "/images/attractions/Dxb_4.jpg",
      },
    ],
  },
  {
    name: "Sharjah",
    attractions: [
      {
        name: "Sharjah Art Museum",
        description:
          "Home to one of the largest collections of modern Arab art in the region, featuring regional and international artists.",
        openingHours: "Sat–Thu 8:00 AM – 8:00 PM; Fri 4:00 PM – 8:00 PM",
        entryFee: "Free",
        dressCode: "Modest attire recommended",
        website: "https://www.sharjahmuseums.ae",
        image: "/images/attractions/Shj_1.jpg",
      },
      {
        name: "Heart of Sharjah",
        description:
          "A restored heritage district showcasing traditional souqs, museums, courtyards, and wind-tower architecture.",
        entryFee: "Free (some attractions ticketed)",
        dressCode: "Comfortable and modest clothing",
        website: "https://www.heartofsharjah.ae",
        image: "/images/attractions/Shj_2.jpg",
      },
      {
        name: "Al Noor Island",
        description:
          "Tranquil gardens, art installations, literature pavilion, and a butterfly house.",
        openingHours: "Daily 9:00 AM – 11:00 PM",
        entryFee: "AED 35 for students",
        dressCode: "Casual wear",
        website: "https://www.alnoorisland.ae",
        image: "/images/attractions/Shj_3.jpg",
      },
    ],
  },
  {
    name: "Ajman",
    attractions: [
      {
        name: "Ajman Corniche",
        description:
          "Beachfront promenade with cafés, juice stalls, and walking/biking paths.",
        entryFee: "Free",
        dressCode: "Modest beachwear recommended",
        image: "/images/attractions/Ajm_1.jpg",
      },
      {
        name: "Ajman Museum",
        description:
          "Housed in an 18th-century fort, showcasing archaeology, pearl diving, and traditional life.",
        openingHours: "8:00 AM – 8:00 PM (closed Fridays)",
        entryFee: "AED 5–10",
        dressCode: "Modest",
        website: "https://www.ajmanmuseum.gov.ae",
        image: "/images/attractions/Ajm_2.jpg",
      },
    ],
  },
  {
    name: "Umm Al Quwain",
    attractions: [
      {
        name: "Mangrove Kayaking",
        description:
          "Paddle through serene waterways and explore coastal mangroves and wildlife.",
        entryFee: "AED 100–150 per tour",
        dressCode: "Light, water-friendly clothing; sunscreen recommended",
        image: "/images/attractions/UAQ_1.jpg",
      },
      {
        name: "Dreamland Aqua Park",
        description:
          "Family-friendly water park with slides, wave pools, and shaded lounges.",
        openingHours: "10:00 AM – 6:00 PM",
        entryFee: "AED 80–100 for students",
        dressCode: "Modest swimwear",
        website: "https://www.dreamlanduae.com",
        image: "/images/attractions/UAQ_2.jpg",
      },
    ],
  },
  {
    name: "Ras Al Khaimah",
    attractions: [
      {
        name: "Jebel Jais",
        description:
          "UAE’s highest peak, ideal for hiking, panoramic views, and the world’s longest zipline.",
        entryFee: "Free (adventure activities from AED 300)",
        dressCode: "Sportswear and layers recommended",
        website: "https://www.visitjebeljais.com",
        image: "/images/attractions/Rak_1.jpg",
      },
      {
        name: "Bear Grylls Explorers Camp",
        description:
          "Survival-themed outdoor experiences like rope courses, fire-building, and navigation skills.",
        entryFee: "Starting from AED 100",
        dressCode: "Sports or hiking wear; advance booking required",
        website: "https://www.beargryllscamp.ae",
        image: "/images/attractions/Rak_2.jpg",
      },
    ],
  },
  {
    name: "Fujairah",
    attractions: [
      {
        name: "Snoopy Island",
        description:
          "Coastal spot perfect for snorkeling, diving, and kayaking with coral reefs and marine life.",
        entryFee: "Island free; beach access via resorts AED 75–150",
        dressCode: "Swimwear, towel, snorkel gear",
        image: "/images/attractions/Fuj_1.jpg",
      },
      {
        name: "Al-Bidyah Mosque",
        description:
          "Oldest known mosque in the UAE (15th century), offering historical and spiritual insights.",
        entryFee: "Free",
        dressCode: "Modest; women cover arms, legs, head",
        website: "https://www.fujairahtourism.ae",
        image: "/images/attractions/Fuj_2.jpg",
      },
    ],
  },
];

const UAEAttractionsTimeline: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredEmirates = uaeAttractions
    .map((emirate) => {
      const filteredAttractions = emirate.attractions.filter(
        (attr) =>
          attr.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          emirate.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...emirate, attractions: filteredAttractions };
    })
    .filter((emirate) => emirate.attractions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6 scroll-smooth">
      <h1 className="text-4xl font-bold text-center mb-6">
        Must-Visit Places Across the UAE
      </h1>

      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-20 bg-white shadow-md mb-6 py-3 flex flex-wrap justify-center gap-4">
        {uaeAttractions.map((emirate) => (
          <a
            key={emirate.name}
            href={`#${emirate.name.replace(/\s+/g, "")}`}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {emirate.name}
          </a>
        ))}
      </nav>

      {/* Search Bar */}
      <div className="sticky top-16 z-10 bg-gray-50 max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by emirate or attraction..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredEmirates.length === 0 && (
        <p className="text-center text-gray-500">
          No attractions found. Try a different search term.
        </p>
      )}

      {filteredEmirates.map((emirate) => (
        <section
          key={emirate.name}
          id={emirate.name.replace(/\s+/g, "")}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold mb-10 text-center">
            {emirate.name}
          </h2>
          <div className="relative">
            {emirate.attractions.map((attr, index) => (
              <div
                key={attr.name}
                className={`flex flex-col md:flex-row items-center mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {attr.image && (
                  <img
                    src={attr.image}
                    alt={attr.name}
                    className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
                  />
                )}
                <div className="md:w-1/2 md:px-8 mt-5 md:mt-0">
                  <h3 className="text-2xl font-bold mb-2">{attr.name}</h3>
                  <p className="mb-2 text-gray-700">{attr.description}</p>
                  {attr.openingHours && (
                    <p className="text-gray-600">
                      <strong>Hours:</strong> {attr.openingHours}
                    </p>
                  )}
                  {attr.entryFee && (
                    <p className="text-gray-600">
                      <strong>Entry Fee:</strong> {attr.entryFee}
                    </p>
                  )}
                  {attr.dressCode && (
                    <p className="text-gray-600">
                      <strong>Dress Code:</strong> {attr.dressCode}
                    </p>
                  )}
                  {attr.website && (
                    <a
                      href={attr.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline mt-2 block"
                    >
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
      <NavigationButtons />
    </div>
    
  );
};

export default UAEAttractionsTimeline;