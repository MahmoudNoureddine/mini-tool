// src/components/RecentChips.jsx
// This component displays clickable buttons for recently searched cities.
// It helps users quickly search again without typing the city name.

import React from "react";
// Imports React so we can create a React component.


// The component receives two things (props) from the parent component:
//
// recents → an array of city names the user searched before
// onPick → a function to run when a city is clicked
//
// Example usage in App:
// <RecentChips recents={recents} onPick={handleCityClick} />
export default function RecentChips({ recents, onPick }) {

  // If there are no recent cities, render nothing.
  // This prevents showing an empty "Recent" section.
  if (!recents || recents.length === 0) return null;

  return (
    <div className="section">
      {/* Title of the section */}
      <div style={{ fontSize: 12, color: "var(--muted)" }}>
        Recent
      </div>

      {/* Container holding all city buttons */}
      <div className="chips">

        {/* Loop through each city in the recents array */}
        {recents.map((city) => (

          // Create a button for each city
          <button
            key={city} // Unique key so React can track list items efficiently
            type="button" // Prevents the button from submitting forms
            className="chip" // CSS styling for the button
            onClick={() => onPick(city)} 
            // When clicked, call onPick and pass the selected city
          >
            {city} {/* Displays the city name on the button */}
          </button>

        ))}
      </div>
    </div>
  );
}