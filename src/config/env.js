// src/config/env.js
// Handles how we read the OpenWeatherMap API key in Create React App.

export function getOwmApiKey() {
  // Create React App exposes env vars that start with REACT_APP_
  // Make sure your .env file contains:
  // REACT_APP_OWM_API_KEY=your_key_here
  const key = process.env.REACT_APP_OWM_API_KEY;

  // Return empty string if missing; the app will show a helpful error.
  return key || "";
}
