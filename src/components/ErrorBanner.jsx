// src/components/ErrorBanner.jsx
// This component shows an error message to the user in the UI.
// It is reusable — any part of the app can pass an error to it.

import React from "react"; 
// Imports React so we can create a React component.


// This defines a component called ErrorBanner.
// It receives "message" as a prop (data passed from another component).
// Example: <ErrorBanner message="City not found" />
export default function ErrorBanner({ message }) {

  // If there is NO error message, we return null.
  // Returning null means: "Render nothing on the screen."
  // This prevents an empty error box from showing.
  if (!message) return null;

  // If there IS a message, we display it inside a styled box.
  // className="error" connects to CSS to make it look like an error alert.
  return <div className="error">{message}</div>;
}