import React from "react";
import "../styles/components/TodoNewTask.css";

function TodoNewTask() {


  return (
    <section className="create-container">
      <h1 className="create-title">Create New Task</h1>
      <h4 className="create-subtitle">Task Name</h4>
      <input
        className="create-input"
        placeholder="Lunch rocket to the moon">
      </input>
      
    </section>
  );
}

export { TodoNewTask };
