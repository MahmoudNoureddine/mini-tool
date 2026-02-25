// src/config/constants.js
// This file stores constant values used across the app.
// Keeping them in one place makes the app easier to maintain
// and prevents repeating the same values in multiple files.


// ===== API CONFIGURATION =====

// The URL endpoint used to fetch CURRENT weather data
// from the OpenWeatherMap API.
//
// Instead of hardcoding this URL inside the service file,
// we store it here so it can be changed easily later
// (for example, switching to a forecast endpoint).
export const OWM_CURRENT_WEATHER_URL =
  "https://api.openweathermap.org/data/2.5/weather";


// ===== APP SETTINGS =====

// Maximum number of recent searches to store.
// If the user searches more cities than this number,
// older ones will be removed.
export const MAX_RECENTS = 6;


// ===== LOCAL STORAGE KEY =====

// Name of the key used to store recent searches
// inside the browser's localStorage.
//
// localStorage works like a small database in the browser.
// Using a constant prevents typos and keeps naming consistent.
export const RECENTS_KEY = "weather_recents";