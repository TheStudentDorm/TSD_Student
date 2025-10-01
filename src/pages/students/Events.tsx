import React, { useState } from "react";
import { events, categoryTips } from "../../data/eventsData";
import ImageModal from "../../components/ImageModal";

const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"All" | keyof typeof categoryTips>("All");
  const [modalImage, setModalImage] = useState<string | null>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0); // normalize

  const isTodayInEvent = (event: typeof events[0]) => {
    const start = new Date(event.startDate);
    start.setHours(0, 0, 0, 0);
    const end = event.endDate ? new Date(event.endDate) : start;
    end.setHours(0, 0, 0, 0);
    return today.getTime() >= start.getTime() && today.getTime() <= end.getTime();
  };

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  const todaysEvents = filteredEvents.filter(isTodayInEvent)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  const upcomingEvents = filteredEvents.filter((e) => new Date(e.startDate) > today && !isTodayInEvent(e))
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  const pastEvents = filteredEvents.filter((e) => new Date(e.startDate) < today && !isTodayInEvent(e))
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section
        className="relative w-full h-64 sm:h-96 flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/student_events.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-3xl sm:text-5xl uppercase font-bold mb-2">Student Events </h1>
           <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Stay up-to-date with Social, Networking, Innovative and Cultural events happening around you.
          </p> 
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-4 space-y-8">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center">
          <button
            className={`px-4 py-2 rounded-full ${selectedCategory === "All" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          {Object.keys(categoryTips).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setSelectedCategory(category as keyof typeof categoryTips)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Pro Tips */}
        {selectedCategory !== "All" && categoryTips[selectedCategory] && (
          <div className="border-l-4 border-[#F9943B] bg-[#FFF7F0] p-4 rounded-xl mb-6">
            <h3 className="font-semibold text-lg mb-2">💡 TSD Pro Tips</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {categoryTips[selectedCategory].map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Today’s Events */}
        {todaysEvents.length > 0 && (
          <EventSection title="🎉 Today’s Events" events={todaysEvents} highlight onImageClick={setModalImage} />
        )}

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <EventSection title="Upcoming Events" events={upcomingEvents} onImageClick={setModalImage} />
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <EventSection title="Past Events" events={pastEvents} faded onImageClick={setModalImage} />
        )}
      </section>

      {/* Image Modal */}
      {modalImage && (
        <ImageModal src={modalImage} alt="Event full image" onClose={() => setModalImage(null)} />
      )}
    </main>
  );
};

export default Events;

// --------------------------
// EventSection Component
interface EventSectionProps {
  title: string;
  events: typeof events;
  faded?: boolean;
  highlight?: boolean;
  onImageClick: (src: string) => void;
}

const EventSection: React.FC<EventSectionProps> = ({ title, events, faded, highlight, onImageClick }) => {
  // Alternate background colors for stacked boxes
  const bgColor =
    title.includes("Today") ? "bg-green-50" :
    title.includes("Upcoming") ? "bg-blue-50" :
    "bg-gray-50";

  return (
    <div className={`relative p-6 rounded-xl shadow-md border border-gray-200 mb-10 ${bgColor}`}>
      <h2
        className={`text-2xl font-bold mb-4 ${title.includes("Today") ? "text-green-700" : faded ? "text-gray-600" : "text-tsd-blue"}`}
      >
        {title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} faded={faded} highlight={highlight} onImageClick={onImageClick} />
        ))}
      </div>
    </div>
  );
};

// --------------------------
// EventCard Component
interface EventCardProps {
  event: typeof events[0];
  faded?: boolean;
  highlight?: boolean;
  onImageClick?: (src: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, faded, highlight, onImageClick }) => (
  <div
    className={`rounded-xl overflow-hidden shadow-md transition cursor-pointer ${faded ? "bg-gray-100 opacity-80" : "bg-white"} ${highlight ? "ring-2 ring-green-500" : ""}`}
  >
    <div onClick={() => onImageClick && onImageClick(event.image)} className="h-40 overflow-hidden cursor-zoom-in">
      <img src={event.image} alt={event.title} className="w-full h-full object-cover hover:scale-105 transition" />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg">{event.title}</h3>
      <p className="text-gray-500 text-sm">{event.date}</p>
      <p className="text-gray-600">{event.location}</p>
      <p className="text-sm text-gray-700 mt-2">{event.entry}</p>
      <ul className="text-sm text-gray-600 mt-2 list-disc pl-4">
        {event.description.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
      {event.links && (
        <div className="mt-3 flex gap-3">
          {event.links.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);
