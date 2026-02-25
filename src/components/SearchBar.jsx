// src/components/SearchBar.jsx
// This component is the search area where the user types a city
// and submits the request to get weather data.

import React from "react";
// Imports React so we can create a React component.


// The component receives data and functions from the parent (App):
//
// value   → the current text inside the input field
// onChange → function to update the input when user types
// onSubmit → function to run when the form is submitted
// loading → indicates if the app is currently fetching data
export default function SearchBar({ value, onChange, onSubmit, loading }) {
  return (

    // <form> allows submitting by clicking the button OR pressing Enter
    <form onSubmit={onSubmit}>

      {/* Label describing the input field */}
      <label htmlFor="city">City</label>

      <div className="row">

        {/* Input field where user types the city name */}
        <input
          id="city" // Connects label to input for accessibility
          value={value} 
          // Shows the current value from App state (controlled input)

          onChange={(e) => onChange(e.target.value)}
          // Runs when user types
          // Sends the typed text back to App to update state

          placeholder="Stockholm, Beirut, Tokyo..."
          // Example text shown when input is empty

          autoComplete="off"
          // Prevents browser suggestions from showing
        />

        {/* Submit button */}
        <button type="submit" disabled={loading}>
          {/* If loading is true → show "Searching..." */}
          {/* Otherwise → show "Search" */}
          {loading ? "Searching..." : "Search"}
        </button>

      </div>
    </form>
  );
}