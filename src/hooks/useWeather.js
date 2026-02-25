// src/hooks/useWeather.js
// This custom hook handles the main logic of the app:
// - Searching for weather
// - Managing loading state
// - Handling errors
// - Saving recent searches

import { useCallback, useState } from "react";
// useState → stores data (weather, loading, error)
// useCallback → remembers the search function between renders

import { MAX_RECENTS } from "../config/constants";
// Maximum number of recent cities to keep

import { fetchCurrentWeatherRaw } from "../services/weatherService";
// Function that calls the weather API

import { mapCurrentWeather } from "../services/weatherMapper";
// Function that converts raw API data into a clean format for the UI


// This hook receives setRecents from App
// so it can update the list of recent cities
export function useWeather(setRecents) {

  // ===== STATE VARIABLES =====

  // Stores the weather data to display
  const [weather, setWeather] = useState(null);

  // Indicates whether the app is currently fetching data
  const [loading, setLoading] = useState(false);

  // Stores any error message (e.g., invalid city)
  const [error, setError] = useState("");


  // ===== SEARCH FUNCTION =====
  // This function runs when the user searches for a city
  const search = useCallback(async (city, units) => {

    // Start loading and clear previous results
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      // 1️⃣ Fetch raw weather data from the API
      const raw = await fetchCurrentWeatherRaw(city, units);

      // 2️⃣ Convert raw data into a simplified format for the UI
      const mapped = mapCurrentWeather(raw, units);

      // 3️⃣ Save the processed data into state
      setWeather(mapped);


      // ===== UPDATE RECENT SEARCHES =====

      // Remove extra spaces from city name
      const trimmed = city.trim();

      // Update recent cities list
      setRecents((prev) => {

        // Add new city at the beginning
        // Remove duplicates (case-insensitive)
        const next = [
          trimmed,
          ...prev.filter((c) => c.toLowerCase() !== trimmed.toLowerCase())
        ];

        // Keep only the allowed number of recent cities
        return next.slice(0, MAX_RECENTS);
      });

    } catch (e) {

      // If something goes wrong (network issue, invalid city, etc.)
      // store an error message to display in the UI
      setError(e instanceof Error ? e.message : "Something went wrong");

    } finally {

      // Stop loading regardless of success or failure
      setLoading(false);
    }

  }, [setRecents]);
  // Dependency ensures the function updates if setRecents changes


  // Return values so components can use them
  return { weather, loading, error, search };
}