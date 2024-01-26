import React from "react";
import "./Module.css";

function Module({ title, children }) {
  return (
    <section className="module-container">
      <p>{title}</p>
      <div>{children}</div>
    </section>
  );
}

export { Module };
