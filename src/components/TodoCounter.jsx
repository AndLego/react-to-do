import React from "react";
import "../styles/components/TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <div className="counter-container">
      <h1 className="main-title">Your tasks</h1>
      <h2 className="counter-title">
        Completed {completedTodos} of {totalTodos}
      </h2>
    </div>
  );
}

export { TodoCounter };
