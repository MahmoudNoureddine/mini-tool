// src/hooks/useLocalStorage.js
// This file creates a custom React hook that stores data in the browser's localStorage.
// localStorage allows the app to remember data even after the page is refreshed.
// In this project, it is used to remember recent city searches.

import { useEffect, useState } from "react";
// useState → stores data in the component
// useEffect → runs code when data changes


// ===== Helper Function =====
// Safely converts stored text back into JavaScript data.
function safeParse(value, fallback) {
  try {
    // localStorage stores data as text (strings),
    // so we convert it back to its original format (array, object, etc.)
    const parsed = JSON.parse(value);

    // If parsing results in null or undefined, use fallback instead
    return parsed == null ? fallback : parsed;

  } catch {
    // If parsing fails (for example corrupted data),
    // return fallback value to prevent app crash
    return fallback;
  }
}


// ===== Custom Hook =====
// useLocalStorage behaves like useState, but also saves data in localStorage.
export function useLocalStorage(key, initialValue) {

  // Initialize state
  const [value, setValue] = useState(() => {

    // Try to read existing value from browser storage
    const stored = localStorage.getItem(key);

    // If nothing stored yet → use initial value
    // Otherwise → parse stored data safely
    return stored == null
      ? initialValue
      : safeParse(stored, initialValue);
  });


  // ===== Sync with localStorage =====
  useEffect(() => {

    // Whenever the value changes,
    // save it to localStorage as text
    localStorage.setItem(key, JSON.stringify(value));

  }, [key, value]);
  // Runs when key or value changes


  // Return state and setter (same as useState)
  return [value, setValue];
}