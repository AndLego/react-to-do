import React from "react";
import "../styles/components/TodoNewTask.css";

function TodoNewTask() {
const onClickButton = (msg) => {
  alert(msg)
}

  return (
    <section className="create-container">
      <h1 className="create-title">Create New Task</h1>
      <h4 className="create-subtitle">Task Name</h4>
      <input
        className="create-input"
        placeholder="Lunch rocket to the moon">
      </input>
      <button 
        className="icon-btn add-btn"
        onClick={() => onClickButton("holi")}
        >
          <div className="add-icon" />
          <div className="btn-txt">Add Task</div>
      </button>
    </section>
  );
}

export { TodoNewTask };
