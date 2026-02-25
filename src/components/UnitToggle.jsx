// src/components/UnitToggle.jsx
// This component lets the user switch between temperature units:
// Celsius (°C) and Fahrenheit (°F).

import React from "react";
// Imports React so we can create a React component.


// The component receives two props from the parent (App):
//
// units → current unit selected ("metric" for °C or "imperial" for °F)
// setUnits → function to change the unit when user clicks a button
export default function UnitToggle({ units, setUnits }) {
  return (
    <div className="row-between section">

      {/* Label describing what this control is for */}
      <div style={{ fontSize: 12, color: "var(--muted)" }}>
        Units
      </div>

      {/* Container holding the toggle buttons */}
      <div className="toggle">

        {/* Button for Celsius */}
        <button
          type="button" 
          // Prevents this button from submitting any form

          className={units === "metric" ? "active" : ""}
          // If current unit is metric, apply "active" style
          // This visually shows which unit is selected

          onClick={() => setUnits("metric")}
          // When clicked, update the unit to metric (Celsius)
        >
          °C
        </button>

        {/* Button for Fahrenheit */}
        <button
          type="button"

          className={units === "imperial" ? "active" : ""}
          // If current unit is imperial, highlight this button

          onClick={() => setUnits("imperial")}
          // When clicked, update the unit to imperial (Fahrenheit)
        >
          °F
        </button>

      </div>
    </div>
  );
}