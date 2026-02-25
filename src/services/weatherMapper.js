// src/services/weatherMapper.js
// This file converts the complex data received from the weather API
// into a simple object that the app's UI can safely use.
//
// Why this is needed:
// The API returns a large, complicated data structure.
// The UI only needs a few specific values.
// This function extracts only what we need.

export function mapCurrentWeather(raw, units) {

  // "raw" = original data from OpenWeatherMap API
  // "units" = metric or imperial (Celsius or Fahrenheit)

  return {

    // ===== LOCATION =====

    // City name (if available)
    city: (raw && raw.name) || "",

    // Country code (e.g., SE, US, LB)
    country: (raw && raw.sys && raw.sys.country) || "",


    // ===== WEATHER DESCRIPTION =====

    // Short description (e.g., "clear sky")
    // API stores descriptions inside an array
    description:
      (raw && raw.weather && raw.weather[0] && raw.weather[0].description) || "",


    // ===== TEMPERATURE DATA =====

    // Current temperature
    temp: raw && raw.main ? raw.main.temp : undefined,

    // "Feels like" temperature
    feelsLike: raw && raw.main ? raw.main.feels_like : undefined,

    // Humidity percentage
    humidity: raw && raw.main ? raw.main.humidity : undefined,

    // Atmospheric pressure
    pressure: raw && raw.main ? raw.main.pressure : undefined,


    // ===== OTHER METRICS =====

    // Visibility distance
    visibility: raw ? raw.visibility : undefined,

    // Wind speed
    windSpeed: raw && raw.wind ? raw.wind.speed : undefined,


    // ===== TIMESTAMP =====

    // Time when data was measured (from API)
    dt: raw ? raw.dt : undefined,


    // ===== UNIT SYSTEM =====

    // Keep track of units used (Celsius or Fahrenheit)
    // So the UI knows what symbol to display
    units
  };
}