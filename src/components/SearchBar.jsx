// src/components/SearchBar.jsx
// Search input + submit button.

import React from "react";

export default function SearchBar({ value, onChange, onSubmit, loading }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="city">City</label>

      <div className="row">
        <input
          id="city"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Stockholm, Beirut, Tokyo..."
          autoComplete="off"
        />

        <button type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </form>
  );
}
