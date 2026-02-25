// src/utils/format.js
// This file contains helper functions that format raw data
// into user-friendly text for display in the UI.
// It keeps formatting logic separate from components,
// making the code cleaner and easier to maintain.


// ===== ROUNDING FUNCTION =====

export function round1(n) {

  // Check if the input is a valid number
  // If not, return a dash to indicate missing data
  if (typeof n !== "number" || Number.isNaN(n)) return "–";

  // Round the number to 1 decimal place
  // Example: 5.36 → 5.4
  return Math.round(n * 10) / 10;
}


// ===== WIND FORMAT =====

export function formatWind(ms) {

  // Validate input
  if (typeof ms !== "number" || Number.isNaN(ms)) return "–";

  // Format wind speed with units (meters per second)
  // Uses round1 to keep numbers clean
  return `${round1(ms)} m/s`;
}


// ===== VISIBILITY FORMAT =====

export function formatVisibility(meters) {

  // Validate input
  if (typeof meters !== "number" || Number.isNaN(meters)) return "–";

  // Convert meters → kilometers for easier understanding
  // Example: 10000 meters → 10 km
  return `${round1(meters / 1000)} km`;
}


// ===== UNIT LABEL =====

export function unitLabel(units) {

  // Convert unit system name into display symbol
  //
  // "imperial" → Fahrenheit
  // anything else → Celsius
  return units === "imperial" ? "°F" : "°C";
}