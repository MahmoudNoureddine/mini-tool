// src/services/weatherMapper.js
// Maps raw API data to a small model that the UI can use safely.

export function mapCurrentWeather(raw, units) {
  return {
    city: (raw && raw.name) || "",
    country: (raw && raw.sys && raw.sys.country) || "",
    description: (raw && raw.weather && raw.weather[0] && raw.weather[0].description) || "",
    temp: raw && raw.main ? raw.main.temp : undefined,
    feelsLike: raw && raw.main ? raw.main.feels_like : undefined,
    humidity: raw && raw.main ? raw.main.humidity : undefined,
    pressure: raw && raw.main ? raw.main.pressure : undefined,
    visibility: raw ? raw.visibility : undefined,
    windSpeed: raw && raw.wind ? raw.wind.speed : undefined,
    dt: raw ? raw.dt : undefined,
    units
  };
}
