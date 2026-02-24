// src/services/weatherService.js
// Networking layer: calls OpenWeatherMap and returns raw JSON.

import { getOwmApiKey } from "../config/env";
import { OWM_CURRENT_WEATHER_URL } from "../config/constants";

export async function fetchCurrentWeatherRaw(city, units) {
  const apiKey = getOwmApiKey();

  if (!apiKey) {
    throw new Error(
      "Missing API key. Create a .env file with REACT_APP_OWM_API_KEY, then restart npm start."
    );
  }

  const trimmed = city.trim();
  if (!trimmed) throw new Error("Type a city name.");

  const url = new URL(OWM_CURRENT_WEATHER_URL);
  url.searchParams.set("q", trimmed);
  url.searchParams.set("appid", apiKey);
  url.searchParams.set("units", units);

  const res = await fetch(url.toString());
  const data = await res.json();

  if (!res.ok) {
    const msg = data && data.message ? String(data.message) : "Request failed";
    throw new Error(msg);
  }

  return data;
}
