import React, { useEffect, useState } from "react";
import { songsData, Song } from "../data/songsData";

const SONG_STORAGE_KEY = "funzone-song";
const DATE_STORAGE_KEY = "funzone-song-date";

const SongCard: React.FC = () => {
  const [song, setSong] = useState<Song | null>(null);

  const pickSong = () => {
    const chosen = songsData[Math.floor(Math.random() * songsData.length)];
    setSong(chosen);
    localStorage.setItem(SONG_STORAGE_KEY, JSON.stringify(chosen));
    localStorage.setItem(DATE_STORAGE_KEY, new Date().toDateString());
  };

  useEffect(() => {
    const storedDate = localStorage.getItem(DATE_STORAGE_KEY);
    const storedSong = localStorage.getItem(SONG_STORAGE_KEY);
    const today = new Date().toDateString();

    if (storedSong && storedDate === today) {
      setSong(JSON.parse(storedSong));
    } else {
      pickSong();
    }
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-bold mb-3">🎵 Song of the Day</h2>
      {song ? (
        <>
          <p className="text-gray-600 mb-3">{song.title}</p>
          <iframe
            className="w-full rounded-lg"
            height="150"
            src={`https://www.youtube.com/embed/${song.id}`}
            title={song.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </>
      ) : (
        <p className="text-gray-600">Loading song...</p>
      )}
    </div>
  );
};

export default SongCard;
