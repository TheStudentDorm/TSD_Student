import React from "react";

const mockLeaders = [
  { name: "Alice", streak: 12 },
  { name: "Bob", streak: 9 },
  { name: "Charlie", streak: 7 },
  { name: "Diana", streak: 5 },
  { name: "Ethan", streak: 4 },
];

const GlobalLeaderboard = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="font-semibold mb-2">🔥 Top Streak Holders</h3>
      <ul className="space-y-2">
        {mockLeaders.map((leader, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b last:border-none pb-2"
          >
            <span className="font-medium">
              {index + 1}. {leader.name}
            </span>
            <span className="text-pink-600 font-semibold">
              {leader.streak} days
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GlobalLeaderboard;
