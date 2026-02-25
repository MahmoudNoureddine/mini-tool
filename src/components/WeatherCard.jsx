// src/components/WeatherCard.jsx
// This component displays the weather information on the screen.
// It shows city, temperature, conditions, and other metrics.

import React from "react";

// Import helper functions used to format values nicely for users
import { formatVisibility, formatWind, round1, unitLabel } from "../utils/format";


export default function WeatherCard({ weather }) {

  // If there is no weather data yet, render nothing.
  // This happens before the user searches.
  if (!weather) return null;

  // Convert unit code ("metric" or "imperial") into display label (°C or °F)
  const unit = unitLabel(weather.units);

  return (
    <div className="weather">

      {/* ===== TOP SECTION ===== */}
      {/* Shows location and main temperature */}

      <div className="weather-top">
        <div>

          {/* City name and country */}
          <div className="place">
            {weather.city}
            {/* If country exists, show it after city */}
            {weather.country ? `, ${weather.country}` : ""}
          </div>

          {/* Short weather description (e.g., "clear sky") */}
          <div className="desc">{weather.description}</div>
        </div>

        <div>
          {/* Current temperature */}
          <div className="temp">
            {round1(weather.temp)}
            {unit}
          </div>

          {/* Feels-like temperature */}
          <div className="feels">
            Feels like {round1(weather.feelsLike)}
            {unit}
          </div>
        </div>
      </div>


      {/* ===== METRICS GRID ===== */}
      {/* Displays additional weather details */}

      <div className="grid">

        {/* Humidity */}
        <div className="metric">
          <div className="k">Humidity</div>
          <div className="v">
            {weather.humidity != null ? `${weather.humidity}%` : "–"}
          </div>
        </div>

        {/* Wind speed */}
        <div className="metric">
          <div className="k">Wind</div>
          <div className="v">{formatWind(weather.windSpeed)}</div>
        </div>

        {/* Air pressure */}
        <div className="metric">
          <div className="k">Pressure</div>
          <div className="v">
            {weather.pressure != null ? `${weather.pressure} hPa` : "–"}
          </div>
        </div>

        {/* Visibility */}
        <div className="metric">
          <div className="k">Visibility</div>
          <div className="v">{formatVisibility(weather.visibility)}</div>
        </div>
      </div>


      {/* ===== FOOTER ===== */}
      {/* Shows data source and time of measurement */}

      <div className="footer">
        Data by OpenWeatherMap. Timestamp:{" "}
        {/* Convert API timestamp to readable date/time */}
        {weather.dt ? new Date(weather.dt * 1000).toLocaleString() : "–"}
      </div>
    </div>
  );
}