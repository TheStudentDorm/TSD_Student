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
   proTips?: string[];
}

export const events: Event[] = [
  
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
    proTips: ["If you collected contact details or company info at a fair, send a short thank-you or LinkedIn connection request the next day. It sets you apart and shows you’re serious."],
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
    proTips: ["Dress one notch smarter than you think. You don’t need a suit for every event but if it’s semi-formal, go slightly polished.",
      "Smart casual with confidence = always a win."],
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
    proTips: ["Popular student events (especially career fairs, competitions, or industry mixers) fill up quickly. Register as soon as the event drops, even if you’re not 100% sure you’ll attend.",
      "You can always cancel later."],
  },

];
