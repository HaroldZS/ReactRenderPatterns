import React from "react";
import "./OriginalButton.css";

function OriginalButton({ title, color }) {
  return (
    <button className="btn" style={{ backgroundColor: color }}>
      {title}
    </button>
  );
}

export { OriginalButton };
