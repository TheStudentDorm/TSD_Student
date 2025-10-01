import React, { useEffect, useState } from "react";
import GuessTheWordCard from "../components/GuessTheWordCard";
import TicTacToe from "../components/TicTacToe";
import MemoryFlip from "../components/MemoryFlip";
import Hangman from "../components/Hangman";
import JokeCard from "../components/JokeCard";
import SongCard from "../components/SongCard";
import CodyCrossCard from "../components/CodyCrossCard";
import StreakCounter from "../components/StreakCounter";
import GlobalLeaderboard from "../components/GlobalLeaderboard";

const FunZone = () => {
 

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center">
      {/* Hero Section */}
      <header className="relative w-full text-center px-10 py-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg">
        <h1 className="text-4xl font-extrabold">🎉 Student Fun Zone 🎉</h1>
        <p className="mt-3 text-lg">Take a break, laugh a little, and play a lot!</p>
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          <button className="px-4 py-2 bg-white text-pink-600 font-semibold rounded-xl shadow hover:scale-105 transition">
            🎮 Games
          </button>
          <button className="px-4 py-2 bg-white text-purple-600 font-semibold rounded-xl shadow hover:scale-105 transition">
            🧩 Puzzles
          </button>
          <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-xl shadow hover:scale-105 transition">
            🎤 Creative
          </button>
          <button className="px-4 py-2 bg-white text-green-600 font-semibold rounded-xl shadow hover:scale-105 transition">
            🎵 Music
          </button>
        </div>
      </header>

      {/* Daily Fun Section */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-3">🧩 Puzzle of the Day</h2>
          <p className="text-gray-600">Solve today’s riddle or mini challenge!</p>
        </div>
        <SongCard />
       {/*  <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-3">🎵 Song of the Day</h2>
          <p className="text-gray-600">{song.title} — {song.artist}</p>
          <div className="mt-3">
            <iframe
              className="w-full rounded-lg"
              height="150"
              src={song.embedUrl}
              title="Song of the Day"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div> */}
      </section>

      {/* Mini Games */}
      <section className="w-full max-w-5xl p-6">
        <h2 className="text-2xl font-bold mb-4">🎮 Mini Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TicTacToe />
          <MemoryFlip />
          <Hangman />
          <CodyCrossCard/>
        </div>
      </section>

      {/* Creative Corner */}
      <section className="w-full max-w-5xl p-6">
        <h2 className="text-2xl font-bold mb-4">🎤 Creative Corner</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <h3 className="font-semibold mb-2">Meme Generator</h3>
            <p className="text-gray-600">Create & share student-life memes.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <h3 className="font-semibold mb-2">Talent Wall</h3>
            <p className="text-gray-600">Show off art, poems, or music!</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <h3 className="font-semibold mb-2">Comic Strip Maker</h3>
            <p className="text-gray-600">Build funny student comics.</p>
          </div>
        </div>
      </section>

      {/* Social Fun */}
      <section className="w-full max-w-5xl p-6">
        <h2 className="text-2xl font-bold mb-4">🌐 Social Fun</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <JokeCard />
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-semibold mb-2">Confession Board</h3>
            <p className="text-gray-600">Share your secrets (anonymously 😉).</p>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
<section className="w-full max-w-5xl p-6">
  <h2 className="text-2xl font-bold mb-4">🏆 Leaderboard & Badges</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Personal streak counter */}
    <div className="bg-white rounded-2xl shadow p-6">
      {/* Personal streak */}
    <StreakCounter />
    </div>

    {/* Global leaderboard mock */}
    <div>
      <GlobalLeaderboard />
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="w-full text-center py-6 mt-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
        <p>✨ Stay awesome, keep smiling ✨</p>
        <p className="text-sm mt-2">© 2025 Student Fun Zone</p>
      </footer>
    </div>
  );
};

export default FunZone;
