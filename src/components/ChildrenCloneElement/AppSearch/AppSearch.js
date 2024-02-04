import React, { useState } from "react";
import "./AppSearch.css";

function AppSearch({ searchExample, loading }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={searchExample}
        value={searchValue}
        disabled={loading}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export { AppSearch };
