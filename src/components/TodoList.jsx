import React from "react";
import "../styles/components/TodoList.css";

function TodoList({
  error,
  onError,
  loading,
  onLoading,
  totalTodos,
  onEmpty,
  searchedTodos,
  onNotFound,
  render,
}) {
  return (
    <section className="todo-container">
      <ul>
        {error && onError()}
        {loading && onLoading()}
        {!loading && totalTodos === 0 && onEmpty()}
        {searchedTodos.length === 0 && totalTodos > 0 && onNotFound()}

        {!loading && searchedTodos.map(render)}
      </ul>
    </section>
  );
}

export { TodoList };
