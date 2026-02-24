// src/config/constants.js
// Central place for constants.

// OpenWeatherMap endpoint for CURRENT weather.
export const OWM_CURRENT_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

// Limit how many recent searches we keep.
export const MAX_RECENTS = 6;

// Key used to store recents in localStorage.
export const RECENTS_KEY = "weather_recents";
