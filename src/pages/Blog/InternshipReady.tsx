import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Clock } from "lucide-react";
import NavigationButtons from "../../components/NavigationButtons";

const days = [
  { title: "Day 1–2: Fix CV & LinkedIn", content: ["Use a clean, concise CV format", "Add quantifiable achievements wherever possible", "Update your LinkedIn with a professional headline & summary"] },
  { title: "Day 3–4: Upskill Fast", content: ["Take free crash courses on Coursera, Google Digital Garage, or LinkedIn Learning", "Explore free classes and case studies on YouTube", "Focus on internship-relevant skills like Excel, presentations, research"] },
  { title: "Day 5–7: Get Application-Ready", content: ["Prepare a generic cover letter template", "List out companies hiring interns", "Join job boards (Bayt, Naukrigulf, GulfTalent, Indeed)"] },
  { title: "Day 8–9: Shortlist Opportunities", content: ["Check company websites & LinkedIn job postings daily", "Filter internships by student-friendly visa requirements"] },
  { title: "Day 10–11: Apply Strategically", content: ["Send at least 5–7 targeted applications per day", "Customize each application slightly for better response rates"] },
  { title: "Day 12–13: Start Networking", content: ["Connect with recruiters & alumni on LinkedIn", "Send a short, polite message expressing your interest"] },
  { title: "Day 14: Prepare for Interviews", content: ["Practice 3–5 common interview questions", "Research the company, its culture, and recent news", "Relax and take a deep breath. It’s just a conversation"] },
];

export default function InternshipReady() {
  const [activeDay, setActiveDay] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [positions, setPositions] = useState<number[]>([]);

  useEffect(() => {
    const updatePositions = () => {
      if (!timelineRef.current) return;
      const timelineTop = timelineRef.current.getBoundingClientRect().top + window.scrollY;
      const newPositions = sectionRefs.current.map((sec) => {
        if (!sec) return 0;
        const top = sec.offsetTop + sec.offsetHeight / 2; // center of block
        return top - timelineTop;
      });
      setPositions(newPositions);
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActiveDay(idx);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sectionRefs.current.forEach((sec) => sec && observer.observe(sec));
    return () => sectionRefs.current.forEach((sec) => sec && observer.unobserve(sec));
  }, []);

  return (
    <div className="pt-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">
        How to Get Internship-Ready in 2 Weeks
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Turn your skills into opportunities. Fast.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Why Are 2 Weeks Enough?</h2>
      <p className="text-gray-700 mb-6">
        Landing an internship doesn’t have to take months of preparation. With a focused plan, you can upgrade your profile, sharpen your skills, and start applying, all in just 14 days.
      </p>
    <div className="pt-20 px-6 max-w-6xl mx-auto md:flex gap-10">
      {/* Timeline */}
      <div className="hidden md:flex flex-col items-center w-20 relative" ref={timelineRef}>
        {/* Full line */}
        {positions.length > 0 && (
          <div
            className="absolute left-1/2 w-1 bg-gray-300 transform -translate-x-1/2"
            style={{ top: positions[0], height: positions[positions.length - 1] - positions[0] }}
          />
        )}
        {/* Filled line */}
        {positions.length > 0 && (
          <div
            className="absolute left-1/2 w-1 bg-blue-600 transform -translate-x-1/2 transition-all duration-500"
            style={{ top: positions[0], height: positions[activeDay] - positions[0] }}
          />
        )}
        {/* Circles */}
        {positions.map((pos, idx) => (
          <div
            key={idx}
            className="absolute left-1/2 transform -translate-x-1/2"
            style={{ top: pos - 12 }} // offset for circle radius
          >
            <div
              className={`
                w-6 h-6 rounded-full flex items-center justify-center border-2
                transition-transform duration-300
                ${activeDay > idx
                  ? "bg-blue-600 border-blue-600 text-white scale-110"
                  : activeDay === idx
                  ? "bg-white border-blue-600 text-blue-600 scale-110"
                  : "bg-white border-gray-400 text-gray-400"
                }
              `}
            >
              {activeDay > idx ? <CheckCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1">
        {days.map((day, idx) => (
          <div key={idx} ref={(el) => (sectionRefs.current[idx] = el)} className="mb-10">
            <h3 className="text-lg font-semibold mb-2">{day.title}</h3>
            <ul className="list-disc list-inside mb-6 text-gray-700">
              {day.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="flex justify-end">
          <Link
            to="/blog/great-cv"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Next Article → Do’s and Don’ts for a Great CV
          </Link>
        </div>
      </div>
    </div>
    <NavigationButtons/>
    </div>
  );
}