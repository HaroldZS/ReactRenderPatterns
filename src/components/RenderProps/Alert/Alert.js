import React, { useEffect, useState } from "react";
import "./Alert.css";

function Alert({ message, error }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`alert ${error ? "alert-error" : "alert-success"} ${
        visible ? "visible" : "hidden"
      }`}
    >
      {message}
    </div>
  );
}

export { Alert };
