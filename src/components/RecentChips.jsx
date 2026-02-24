// src/components/RecentChips.jsx
// Clickable recent cities.

import React from "react";

export default function RecentChips({ recents, onPick }) {
  if (!recents || recents.length === 0) return null;

  return (
    <div className="section">
      <div style={{ fontSize: 12, color: "var(--muted)" }}>Recent</div>

      <div className="chips">
        {recents.map((city) => (
          <button key={city} type="button" className="chip" onClick={() => onPick(city)}>
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}
