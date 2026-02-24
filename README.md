# Weather App (Create React App)

## Setup (VS Code)
1. Open this folder in VS Code.
2. Create a `.env` file in the project root (same level as package.json):
   ```
   REACT_APP_OWM_API_KEY=YOUR_KEY_HERE
   ```
3. Install deps:
   ```
   npm install
   ```
4. Run:
   ```
   npm start
   ```

## What it does
- Search current weather by city name (OpenWeatherMap)
- Unit toggle (°C / °F)
- Recent searches stored in localStorage
- Clean architecture: config, services, hooks, components, utils
