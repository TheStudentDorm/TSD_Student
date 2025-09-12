// src/pages/Events.tsx
import { useState } from "react";
import { Calendar, MapPin, Ticket, ExternalLink } from "lucide-react";
import { events } from "../../data/eventsData";
import NavigationButtons from "../../components/NavigationButtons";
import ImageModal from "../../components/ImageModal";

const categories = ["All", "Academic & Career", "Tech & Innovation", "Music & Lifestyle", "Art & Culture"];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalImage, setModalImage] = useState<string | null>(null);

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8">🎉 Student Events 2025</h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-tsd-blue text-white border-tsd-blue"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.map((event, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
            {/* Image Wrapper */}
            <div
              className="h-48 flex items-center justify-center bg-tsd-blue/5 cursor-zoom-in"
              onClick={() => setModalImage(event.image)}
            >
              <img
                src={event.image}
                alt={event.title}
                className="max-h-full max-w-full object-contain transition hover:scale-105"
              />
            </div>

            {/* Event Info */}
            <div className="p-6">
              <span className="text-sm font-semibold text-tsd-blue">{event.category}</span>
              <h2 className="text-xl font-bold mt-2">{event.title}</h2>
              <div className="flex items-center gap-2 text-gray-600 mt-3">
                <Calendar size={16} /> <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <MapPin size={16} /> <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mt-1">
                <Ticket size={16} /> <span>{event.entry}</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-700">
                {event.description.map((line, i) => (
                  <li key={i}>• {line}</li>
                ))}
              </ul>

              {/* Links */}
              {event.links && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {event.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-tsd-blue hover:underline hover:text-tsd-orange text-sm"
                    >
                      {link.label} <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              )}
              {/* TSD Pro Tips (conditional) */}
              {event.proTips && event.proTips.length > 0 && (
                <div className="mt-6 p-4 bg-tsd-blue/10 border-l-4 border-tsd-orange rounded-lg">
                  <h3 className="font-bold mb-2 text-tsd-blue text-lg">💡 TSD Pro Tips</h3>
                  <ul className="list-disc pl-5 text-gray-800 space-y-1 text-sm">
                    {event.proTips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      
      {modalImage && (
        <ImageModal
          src={modalImage}
          alt="Event full image"
          onClose={() => setModalImage(null)}
        />
      )}

      <NavigationButtons />
    </section>
  );
}
