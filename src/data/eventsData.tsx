// src/data/eventsData.ts
export interface Event {
  category: string;
  title: string;
  date: string;
  location: string;
  entry: string;
  description: string[];
  image: string;
  links?: { label: string; url: string }[];
}

export const events: Event[] = [
  {
    category: "Academic & Career",
    title: "Meet the Top Students",
    date: "31 Aug, 2025 (10 AM – 6 PM)",
    location: "Millennium Plaza Downtown Hotel, Dubai",
    entry: "Free entry",
    description: [
      "Free counselling with top global university students",
      "Tips on applications & profile building",
    ],
    image: "/images/events/events_1.jpg",
    links: [
      { label: "Instagram", url: "https://instagram.com/uniplus" },
      { label: "Eventbrite", url: "https://eventbrite.com" },
    ],
  },
  {
    category: "Academic & Career",
    title: "GCC Exhibition for Training & Education",
    date: "22–24 Sep, 2025",
    location: "Etihad Arena, Abu Dhabi",
    entry: "Free entry (Open to all)",
    description: ["Discover academic institutions & universities in UAE"],
    image: "/images/events/events_2.jpg",
    links: [
      { label: "Instagram", url: "https://instagram.com/gcc_exhibition" },
      { label: "Website", url: "https://gccexhibition.com" },
    ],
  },
  {
    category: "Academic & Career",
    title: "Najah Expo 2025",
    date: "5–7 Oct, 2025",
    location: "Dubai World Trade Centre",
    entry: "Free entry",
    description: [
      "100+ universities from 20+ countries",
      "Explore undergrad & postgrad opportunities",
    ],
    image: "/images/events/events_3.jpg",
    links: [{ label: "Website", url: "https://najahexpo/dubai" }],
  },
  {
    category: "Tech & Innovation",
    title: "Gitex Global",
    date: "13–17 Oct, 2025",
    location: "Dubai World Trade Centre",
    entry: "AED 50 (Student ID required)",
    description: ["Explore future tech & professional networking"],
    image: "/images/events/events_4.jpg",
    links: [{ label: "Website", url: "https://gitex.com" }],
  },
  {
    category: "Music & Lifestyle",
    title: "Dubai Comedy Festival",
    date: "2–12 Oct, 2025",
    location: "Coca-Cola Arena & Dubai Opera",
    entry: "AED 100–300",
    description: [
      "Tom Segura, Joanne McNally, Zakir Khan & more",
      "Shows in English, Arabic, Russian & French",
    ],
    image: "/images/events/events_5.jpg",
    links: [{ label: "Website", url: "https://dubaicomedyfest.ae" }],
  },
  {
    category: "Music & Lifestyle",
    title: "Harry Potter™ Film Concert Series",
    date: "6–7 Sep, 2025",
    location: "Etihad Arena, Abu Dhabi",
    entry: "From AED 120",
    description: [
      "First 2 Harry Potter films screened with live orchestra",
    ],
    image: "/images/events/events_6.jpg",
    links: [
      { label: "Website", url: "https://harrypotterinconcert.com" },
      { label: "Etihad Arena", url: "https://etihadarena.ae/event-booking" },
    ],
  },
  {
    category: "Music & Lifestyle",
    title: "KOSTCON",
    date: "5 Sep, 2025 at 7 PM",
    location: "Coca-Cola Arena, Dubai",
    entry: "From AED 199",
    description: [
      "Performances by LYN, Kim Bum Soo, K.Will, So You, Heize, Lee Mujin",
      "Popular voices from K-drama OSTs",
    ],
    image: "/images/events/events_7.jpg",
    links: [{ label: "Visit Dubai", url: "https://visitdubai.com/kostcon-live" }],
  },
  {
    category: "Art & Culture",
    title: "Alserkal Avenue Art Nights",
    date: "Every Thursday, July 2025",
    location: "Al Quoz, Dubai",
    entry: "Free registration (some paid)",
    description: [
      "Open mics, youth exhibitions, zine fairs",
      "Creative networking",
    ],
    image: "/images/events/events_8.jpg",
    links: [{ label: "Website", url: "https://alserkal.online" }],
  },
];
