import React from "react";

function Module({ title, children }) {
  return (
    <section>
      <p>{title}</p>
      <div>{children}</div>
    </section>
  );
}

export { Module };
