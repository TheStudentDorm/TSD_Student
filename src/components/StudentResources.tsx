import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const resources = [
  { link: "/students/accommodation", icon: "/icons/accomodation.svg", title: "Find Student Accommodation", desc: "Your next home, sorted." },
  { link: "/students/visa", icon: "/icons/visa.svg", title: "Student Visa Guide", desc: "From application to arrival, stress-free." },
  { link: "/students/transport", icon: "/icons/transport.svg", title: "Transport Made Simple", desc: "Getting around made easier." },
  { link: "/students/discounts", icon: "/icons/discount.svg", title: "Student Discounts & Perks", desc: "Stretch your dirhams further." },
  { link: "/students/careers", icon: "/icons/career.svg", title: "Careers & Internships", desc: "Start building your future today." },
  { link: "/students/emergency", icon: "/icons/emergency.svg", title: "Emergency & Essential Contacts", desc: "Help when you need it most." },
];

const ResourceCard = ({ res, delay, animate }: { res: typeof resources[0]; delay: number; animate: boolean }) => (
  <Link
    to={res.link}
    className={`p-6 bg-white rounded-lg hover:shadow-lg transform transition-all duration-500 flex flex-col items-center text-center z-10 relative
      ${animate ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-90"}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <img src={res.icon} alt={res.title} className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
    <p className="text-sm sm:text-base font-semibold mb-1 text-[#02066f]">{res.title}</p>
    <p className="text-xs sm:text-sm text-gray-700">{res.desc}</p>
  </Link>
);

export default function StudentResources() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="student-resources"
      className="relative w-full py-16 sm:py-16 md:py-20 text-center min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] z-10"
      style={{
        backgroundImage: "url('/images/Slide3.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-white/10 z-0" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto flex flex-col items-center justify-center px-4">
        <h2
          className={`text-[clamp(1.25rem,4vw,2rem)] sm:text-[clamp(1.75rem,4vw,2.5rem)] md:text-[clamp(2rem,3.5vw,3rem)] font-bold mb-6 text-[#02066F] transition-all duration-700
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          STUDENT RESOURCES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-10 mb-10">
          {resources.map((res, idx) => (
            <ResourceCard key={idx} res={res} delay={idx * 200 + 300} animate={animate} />
          ))}
        </div>

        <Link
          to="/students"
          className={`mt-4 sm:mt-6 text-[#02066F] font-semibold text-lg sm:text-2xl hover:underline transition-all duration-500
            ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "1200ms" }}
        >
          More Resources →
        </Link>
      </div>
    </section>
  );
}
