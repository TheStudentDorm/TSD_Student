import { OnThisDayEvent, getTodayEvents } from "../data/onThisDay";
import { motion } from "framer-motion";
import Textfit from "@namhong2001/react-textfit";

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

function getRecurringBadge(fact: string, year?: number) {
  const lowerFact = fact.toLowerCase();
  if (lowerFact.includes("day"))
    return { label: "🌍 International Day", classes: "bg-blue-500/20 text-blue-300" };
  if (lowerFact.includes("festival"))
    return { label: "🎊 Festival", classes: "bg-pink-500/20 text-pink-300" };
  if (lowerFact.includes("anniversary"))
    return { label: "🎂 Anniversary", classes: "bg-green-500/20 text-green-300" };
  if (!year)
    return { label: "🎉 Celebrated Annually", classes: "bg-yellow-500/20 text-yellow-300" };
  return null;
}

export default function OnThisDayCard({ className, textColor }: { className?: string, textColor?: string }) {
  const eventsToday: OnThisDayEvent[] = getTodayEvents();

  if (eventsToday.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`p-4 flex flex-col items-center ${className}`}
        style={{ color: textColor || "white" }}
      >
        <h3 className="text-lg sm:text-xl text-center font-semibold mb-3">📅 On This Day</h3>
        <p className="text-sm sm:text-base text-center leading-relaxed italic">
          No major event recorded for today.
        </p>
      </motion.div>
    );
  }

  const event = eventsToday[0];
  const badge = getRecurringBadge(event.fact, event.year);

  return (
    <motion.div
      className={`p-4 flex flex-col items-center max-w-md mx-auto ${className}`}
      style={{ color: textColor || "white" }}
    >
      <h3 className="text-lg sm:text-xl text-center font-semibold mb-3">📅 On This Day</h3>

      <div className="w-full flex flex-col items-start">
        <p className="text-sm sm:text-lg leading-relaxed text-left w-full">
          On <span className="font-bold">{event.day} {monthNames[event.month]}</span>
          {event.year ? ` in ${event.year},` : ","}
        </p>

        <Textfit
          mode="multi"
          min={18}
          max={24}
          className="mt-2 text-left font-semibold whitespace-normal break-words w-full"
        >
          {event.fact}
        </Textfit>

        {badge && (
          <div className="flex justify-start mt-2 w-full">
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(event.fact)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${badge.classes} hover:scale-105 transition-transform`}
              style={{ color: textColor || "white" }}
            >
              {badge.label}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
