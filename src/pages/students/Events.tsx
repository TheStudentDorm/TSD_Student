// src/pages/Events.tsx
import { useState } from "react";
import { Calendar, MapPin, Ticket, ExternalLink, Navigation2OffIcon } from "lucide-react";
import { events } from "../../data/eventsData";
import NavigationButtons from "../../components/NavigationButtons";

const categories = ["All", "Academic & Career", "Tech & Innovation", "Music & Lifestyle", "Art & Culture"];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
                ? "bg-blue-600 text-white border-blue-600"
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
          <div
            key={idx}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Event Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover"
            />

            {/* Event Info */}
            <div className="p-6">
              <span className="text-sm font-semibold text-blue-600">
                {event.category}
              </span>
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
                      className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
                    >
                      {link.label} <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pro Tips */}
      <div className="mt-16 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg max-w-3xl mx-auto">
        <h3 className="font-bold mb-2">💡 TSD Pro Tips</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Follow up with contacts from fairs — thank-you or LinkedIn.</li>
          <li>Dress one notch smarter than expected (smart casual works).</li>
          <li>Register early, popular events fill fast.</li>
          <li>Arrive early to free events for best seats & networking.</li>
        </ul>
      </div>
        <NavigationButtons />
    </section>
    
  );
}
