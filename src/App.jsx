// src/App.jsx
// Orchestrates state and wires up the components.

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UnitToggle from "./components/UnitToggle";
import RecentChips from "./components/RecentChips";
import ErrorBanner from "./components/ErrorBanner";
import WeatherCard from "./components/WeatherCard";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useWeather } from "./hooks/useWeather";
import { RECENTS_KEY } from "./config/constants";

export default function App() {
  // Controlled input value.
  const [query, setQuery] = useState("");

  // Unit system for the API call: "metric" or "imperial".
  const [units, setUnits] = useState("metric");

  // Recent cities stored in localStorage.
  const [recents, setRecents] = useLocalStorage(RECENTS_KEY, []);

  // Weather hook (fetches weather + tracks async state).
  const { weather, loading, error, search } = useWeather(setRecents);

  // Handle form submit.
  function onSubmit(e) {
    e.preventDefault();
    search(query, units);
  }

  return (
    <div className="page">
      <div className="container">
        <h1 className="title">Weather App</h1>
        <p className="subtitle">Search by city and get current conditions via OpenWeatherMap.</p>

        <div className="card">
          <SearchBar value={query} onChange={setQuery} onSubmit={onSubmit} loading={loading} />

          <UnitToggle units={units} setUnits={setUnits} />

          <RecentChips
            recents={recents}
            onPick={(city) => {
              setQuery(city);
              search(city, units);
            }}
          />

          <ErrorBanner message={error} />

          <WeatherCard weather={weather} />
        </div>

        <div className="footer">
          Tip: If you change units after a search, click the same recent city to refresh.
        </div>
      </div>
    </div>
  );
}
