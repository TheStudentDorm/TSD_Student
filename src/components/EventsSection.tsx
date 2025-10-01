// EventsSection.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Ticket } from "lucide-react";
import { events, Event } from "../data/eventsData";

// Individual Event Card
const EventCard = ({ event }: { event: Event }) => {
  const today = new Date();
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);
  const isOngoing = today >= start && today <= end;

  // Use first link if available
  const eventUrl = event.links?.[0]?.url || "#";

  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col h-full relative overflow-hidden">
      
      {/* Happening Now Ribbon */}
      {isOngoing && (
        <div className="absolute top-0 right-0">
          <div className="bg-[#ff6d34] text-white text-xs font-semibold px-3 py-1 transform rotate-45 origin-top-right shadow-md">
            Happening Now
          </div>
        </div>
      )}

      <img
        src={event.image}
        alt={event.title}
        className="w-full h-56 sm:h-60 object-cover rounded-t-lg cursor-pointer"
        loading="lazy"
        onClick={() => window.open(eventUrl, "_blank")}
      />

      <h3 className="text-lg font-semibold mb-2 text-gray-900">{event.title}</h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
        {event.description.join(", ")}
      </p>

      <div className="mt-auto space-y-1 text-xs text-gray-700">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-[#02066f]" />
          {event.date}
        </div>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2 text-[#02066f]" />
          {event.location}
        </div>
        <div className="flex items-center">
          <Ticket className="w-4 h-4 mr-2 text-[#02066f]" />
          {event.entry}
        </div>
      </div>
    </div>
  );
};

// Main Events Section
export default function EventsSection() {
  const today = new Date();

  // Filter for upcoming or ongoing events and sort by startDate
  const upcomingAndOngoingEvents = events
    .filter((event) => {
      const start = new Date(event.startDate);
      const end = new Date(event.endDate);
      return (today >= start && today <= end) || today < start;
    })
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  const topEvents = upcomingAndOngoingEvents.slice(0, 2); // top 2 events

  return (
    <section className="py-12 px-4 bg-gray-50 relative">
      
     {/*  {/* Centered stylish divider */}
     {/* <div className="w-32 h-0.5 bg-gray-100 mx-auto relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      </div> */}

      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#02066f] text-center">
        TOP EVENTS
      </h2>
      <p className="text-gray-600 mb-8 text-sm md:text-base text-center max-w-2xl mx-auto">
        Discover upcoming student events, workshops, and opportunities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
        {topEvents.map((event, idx) => (
          <EventCard key={idx} event={event} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/students/events"
          className="inline-flex items-center gap-1 text-sm md:text-lg text-[#02066f] font-medium hover:underline hover:text-[#ff6d34] transition-colors duration-300"
        >
          See All Events <span className="text-lg">→</span>
        </Link>
      </div>
    </section>
  );
}
