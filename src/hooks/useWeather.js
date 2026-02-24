// src/hooks/useWeather.js
// Owns the "search weather" action and async state.

import { useCallback, useState } from "react";
import { MAX_RECENTS } from "../config/constants";
import { fetchCurrentWeatherRaw } from "../services/weatherService";
import { mapCurrentWeather } from "../services/weatherMapper";

export function useWeather(setRecents) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = useCallback(async (city, units) => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const raw = await fetchCurrentWeatherRaw(city, units);
      const mapped = mapCurrentWeather(raw, units);
      setWeather(mapped);

      const trimmed = city.trim();
      setRecents((prev) => {
        const next = [trimmed, ...prev.filter((c) => c.toLowerCase() !== trimmed.toLowerCase())];
        return next.slice(0, MAX_RECENTS);
      });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [setRecents]);

  return { weather, loading, error, search };
}
