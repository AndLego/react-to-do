import React from "react";
import "../styles/components/EmptyTodo.css";

function EmptyTodo() {
  return (
    <>
      <h1 className="empty-title">It's Empty!</h1>
      <p className="empty-text">Add your first task clicking the button below</p>
    </>
  );
}

export { EmptyTodo };
