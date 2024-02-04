import React from "react";
import "./AppCounter.css";

function AppCounter({ count, total, loading }) {
  return (
    <div className={`container ${loading ? "loading" : ""}`}>
      {loading ? <p>Loading...</p> : <p>{`${count} results of ${total}`}</p>}
    </div>
  );
}

export { AppCounter };
