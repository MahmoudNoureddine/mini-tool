// src/components/WeatherCard.jsx
// Displays the mapped weather model.

import React from "react";
import { formatVisibility, formatWind, round1, unitLabel } from "../utils/format";

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const unit = unitLabel(weather.units);

  return (
    <div className="weather">
      <div className="weather-top">
        <div>
          <div className="place">
            {weather.city}
            {weather.country ? `, ${weather.country}` : ""}
          </div>
          <div className="desc">{weather.description}</div>
        </div>

        <div>
          <div className="temp">
            {round1(weather.temp)}
            {unit}
          </div>
          <div className="feels">
            Feels like {round1(weather.feelsLike)}
            {unit}
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="metric">
          <div className="k">Humidity</div>
          <div className="v">{weather.humidity != null ? `${weather.humidity}%` : "–"}</div>
        </div>

        <div className="metric">
          <div className="k">Wind</div>
          <div className="v">{formatWind(weather.windSpeed)}</div>
        </div>

        <div className="metric">
          <div className="k">Pressure</div>
          <div className="v">{weather.pressure != null ? `${weather.pressure} hPa` : "–"}</div>
        </div>

        <div className="metric">
          <div className="k">Visibility</div>
          <div className="v">{formatVisibility(weather.visibility)}</div>
        </div>
      </div>

      <div className="footer">
        Data by OpenWeatherMap. Timestamp:{" "}
        {weather.dt ? new Date(weather.dt * 1000).toLocaleString() : "–"}
      </div>
    </div>
  );
}
