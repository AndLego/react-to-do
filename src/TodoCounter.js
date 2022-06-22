import React from "react";
import "./TodoCounter.css";

function TodoCounter({total, completed}) {

  return (
    <div className="counter-container">
      <h1 className="main-title">Your tasks</h1>
      <h2 className="counter-title">Completed {completed} of {total}</h2>
    </div>
  );
}

export { TodoCounter };
