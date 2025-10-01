import React, { useEffect, useState } from "react";

interface Joke {
  setup: string;
  punchline: string;
}

const JOKE_STORAGE_KEY = "funzone-joke";
const DATE_STORAGE_KEY = "funzone-joke-date";

const JokeCard: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);

  const fetchJoke = async () => {
    try {
      const res = await fetch("https://official-joke-api.appspot.com/jokes/random");
      const data: Joke = await res.json();
      setJoke(data);
      localStorage.setItem(JOKE_STORAGE_KEY, JSON.stringify(data));
      localStorage.setItem(DATE_STORAGE_KEY, new Date().toDateString());
    } catch (error) {
      console.error("Failed to fetch joke:", error);
    }
  };

  useEffect(() => {
    const storedDate = localStorage.getItem(DATE_STORAGE_KEY);
    const storedJoke = localStorage.getItem(JOKE_STORAGE_KEY);
    const today = new Date().toDateString();

    if (storedJoke && storedDate === today) {
      setJoke(JSON.parse(storedJoke));
    } else {
      fetchJoke();
    }
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="font-semibold mb-2">😂 Joke of the Day</h3>
      {joke ? (
        <p className="text-gray-600">
          {joke.setup} <br /> <strong>{joke.punchline}</strong>
        </p>
      ) : (
        <p className="text-gray-600">Loading joke...</p>
      )}
    </div>
  );
};

export default JokeCard;
