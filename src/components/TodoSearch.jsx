import React from "react";
import "../styles/components/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="input-group">
      <input
        required
        type="text"
        name="text"
        autoComplete="off"
        className="input"
        value={searchValue}
        onChange={onSearchValueChange}
      />
      <label className="user-label">Search Task</label>
    </div>
  );
}

export { TodoSearch };
