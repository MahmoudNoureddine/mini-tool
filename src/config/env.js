// src/config/env.js
// This file handles how the app reads the OpenWeatherMap API key.
// The API key is required to request weather data from the service.
// We keep this logic separate so sensitive data is not hardcoded.


export function getOwmApiKey() {

  // In Create React App, environment variables must start with REACT_APP_
  // The value comes from the .env file in the project root.
  //
  // Example .env file:
  // REACT_APP_OWM_API_KEY=your_key_here
  //
  // process.env lets the app read environment variables safely.
  const key = process.env.REACT_APP_OWM_API_KEY;


  // If the key exists → return it
  // If not → return an empty string
  //
  // Returning an empty string prevents the app from crashing
  // and allows other parts of the app to show a helpful error message.
  return key || "";
}