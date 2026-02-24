// src/components/UnitToggle.jsx
// Toggle between Celsius and Fahrenheit.

import React from "react";

export default function UnitToggle({ units, setUnits }) {
  return (
    <div className="row-between section">
      <div style={{ fontSize: 12, color: "var(--muted)" }}>Units</div>

      <div className="toggle">
        <button
          type="button"
          className={units === "metric" ? "active" : ""}
          onClick={() => setUnits("metric")}
        >
          °C
        </button>

        <button
          type="button"
          className={units === "imperial" ? "active" : ""}
          onClick={() => setUnits("imperial")}
        >
          °F
        </button>
      </div>
    </div>
  );
}
