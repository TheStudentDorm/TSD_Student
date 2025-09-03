import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Abc",
    role: "Student",
    feedback: "Testing testimonial component. The service was fantastic and helped me find the perfect accommodation quickly!",
    avatar: "/images/testimonial1.jpg",
  },
  {
    name: "Xyz",
    role: "Accommodation Provider",
    feedback: "Testing testimonial component. Partnering with TSD has boosted our bookings and connected us with genuine students.",
    avatar: "/images/testimonial2.jpg",
  },
  {
    name: "Pqr.",
    role: "Student",
    feedback: "Testing testimonial component. The platform made my transition to university life in Dubai so much smoother!",
    avatar: "/images/testimonial3.jpg",
  },
];

export default function ProviderTestimonials() {
  const [current, setCurrent] = useState(0);
  const testimonialInterval = useRef<NodeJS.Timeout | null>(null);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    testimonialInterval.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (testimonialInterval.current) clearInterval(testimonialInterval.current);
    };
  }, []);

  const goToSlide = (index: number) => {
    if (testimonialInterval.current) clearInterval(testimonialInterval.current);
    setCurrent(index);
  };

  const prevSlide = () =>
    goToSlide((current - 1 + testimonials.length) % testimonials.length);
  const nextSlide = () => goToSlide((current + 1) % testimonials.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    startX.current = null;
  };

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('images/background/bg5.jpg')" }} // 🔥 background image
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="relative max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-black">
          What Providers & Students Say
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-10 italic">
          <br/>
          Real experiences from our community.
        </p>

        <div
          className="relative bg-white p-8 rounded-xl shadow-lg overflow-hidden bg-gradient-to-r from-orange-100 via-white to-orange-200
"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 z-10"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Slides */}
          <div className="relative h-56 sm:h-64 md:h-72">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col items-center justify-center text-center px-6
                  ${
                    current === idx
                      ? "opacity-100 translate-x-0 z-10"
                      : "opacity-0 translate-x-10 z-0"
                  }
                `}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="mx-auto w-20 h-20 rounded-full mb-4 object-cover shadow"
                />
                <p className="text-gray-700 italic mb-2">"{t.feedback}"</p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 z-10"
          >
            <ChevronRight size={30} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                current === idx ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
