import React from "react";
import "./TrafficMessage.css";

function TrafficMessage({ message }) {
  return <div className="message">{message}</div>;
}

export { TrafficMessage };
