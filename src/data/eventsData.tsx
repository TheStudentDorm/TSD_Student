// src/data/eventsData.ts
export type EventCategory =
  | "Academic & Career"
  | "Tech & Innovation"
  | "Music & Lifestyle"
  | "Art & Culture";

export interface Event {
  id: string;
  category: EventCategory;
  title: string;
  date: string;       // Display version
  startDate: string;  // ISO format for sorting
  endDate: string;
  location: string;
  entry: string;
  description: string[];
  image: string;
  links?: { label: string; url: string }[];
}

export const events: Event[] = [
  {
    id: "gcc-exhibition-2025",
    category: "Academic & Career",
    title: "GCC Exhibition for Training & Education",
    date: "22–24 Sep, 2025",
     startDate: "2025-09-22",
    endDate: "2025-09-24",
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
    id: "dubai-comedy-festival-2025",
    category: "Music & Lifestyle",
    title: "Dubai Comedy Festival",
    date: "2–12 Oct, 2025",
    startDate: "2025-10-02",
    endDate:"2025-10-12",
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
    id: "najah-expo-2025",
    category: "Academic & Career",
    title: "Najah Expo 2025",
    date: "5–7 Oct, 2025",
    startDate: "2025-10-05",
    endDate:"202-10-07",
    location: "Dubai World Trade Centre",
    entry: "Free entry",
    description: [
      "100+ universities from 20+ countries",
      "Explore undergrad & postgrad opportunities",
    ],
    image: "/images/events/events_3.jpg",
    links: [{ label: "Website", url: "https://najahexpo.com/dubai" }],
  },
  {
    id: "gitex-global-2025",
    category: "Tech & Innovation",
    title: "Gitex Global",
    date: "13–17 Oct, 2025",
    startDate: "2025-10-13",
    endDate:"2025-10-17",
    location: "Dubai World Trade Centre",
    entry: "AED 50 (Student ID required)",
    description: ["Explore future tech & professional networking"],
    image: "/images/events/events_4.jpg",
    links: [{ label: "Website", url: "https://gitex.com" }],
  },
  {
  id:	"harry_potter",
  category: 	"Music & Lifestyle",
  title: 	"HARRY POTTER™ FILM CONCERT SERIES",
  date:	"6-7 September, 2025 ",
  startDate:	"2025-09-06",
  endDate: 	"2025-09-07",
  location: 	"Etihad Arena, Abu Dhabi",
  entry:	"Ticket prices starting from AED 120",
  description:["The first 2 iconic Harry Potter films screened live in-sync orchestra"],
  image: 	"/images/events/events_6.jpg",
  links:	[{label:"Website",url:"https://harrypotterinconcert.com"}],
}
];

// 💡 Category-based Pro Tips
export const categoryTips: Record<EventCategory, string[]> = {
  "Academic & Career": [
    "If you collect contact details at a fair, send a short thank-you or LinkedIn connection request the next day.",
    "Dress one notch smarter than you think — smart casual with confidence always works.",
  ],
  "Tech & Innovation": [
    "Popular tech events fill up fast — register early even if you’re not 100% sure you’ll attend.",
    "Bring a notebook or tablet for jotting down startup/AI trends you hear.",
  ],
  "Music & Lifestyle": [
    "Check ticket bundles — festivals often have cheaper day passes if you plan ahead.",
  ],
  "Art & Culture": [
    "Follow event hashtags on Instagram to discover side exhibitions or pop-ups happening around the main event.",
  ],
};
