import React from "react";
import { TodoContext } from "../hooks/TodoContext";
import "../styles/components/TodoCounter.css";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

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
