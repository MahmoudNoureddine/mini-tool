// src/components/ErrorBanner.jsx
// Consistent error message UI.

import React from "react";

export default function ErrorBanner({ message }) {
  if (!message) return null;

  return <div className="error">{message}</div>;
}
