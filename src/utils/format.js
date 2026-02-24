// src/utils/format.js
// Formatting helpers for display.

export function round1(n) {
  if (typeof n !== "number" || Number.isNaN(n)) return "–";
  return Math.round(n * 10) / 10;
}

export function formatWind(ms) {
  if (typeof ms !== "number" || Number.isNaN(ms)) return "–";
  return `${round1(ms)} m/s`;
}

export function formatVisibility(meters) {
  if (typeof meters !== "number" || Number.isNaN(meters)) return "–";
  return `${round1(meters / 1000)} km`;
}

export function unitLabel(units) {
  return units === "imperial" ? "°F" : "°C";
}
