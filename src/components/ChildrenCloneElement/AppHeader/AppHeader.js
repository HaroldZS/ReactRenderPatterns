import React from "react";
import "./AppHeader.css";

function AppHeader({ children, loading }) {
  React.cloneElement(children, { loading });

  return (
    <header>
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading })
      )}
    </header>
  );
}

export { AppHeader };
