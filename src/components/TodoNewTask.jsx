import React from "react";
import { TodoContext } from "../hooks/TodoContext";
import "../styles/components/TodoNewTask.css";

function TodoNewTask() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal, onClickButton } =
    React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.length <= 0) {
      return;
    }
    const todoDate = new Date();
    addTodo(newTodoValue, todoDate);
    setOpenModal(false);
    onClickButton();
  };

  return (
    <form onSubmit={onSubmit} className="create-container">
      <h1 className="create-title">Create New Task</h1>
      <h4 className="create-subtitle">Task Name</h4>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        className="create-input"
        placeholder="Lunch rocket to the moon"
      ></textarea>
      <div>
        <button className="submitTask" type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
}

export { TodoNewTask };
