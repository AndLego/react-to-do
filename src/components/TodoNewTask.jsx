import React from "react";
import { TodoContext } from "../hooks/TodoContext";
import "../styles/components/TodoNewTask.css";

function TodoNewTask() {
  const [disable, setDisable] = React.useState(false);
  const [btnState, setBtnState] = React.useState("notSubmitTask");
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal, onClickButton } =
    React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
    if (event.target.value.length > 0) {
      setBtnState("submitTask");
      setDisable(false);
    } else {
      setBtnState("notSubmitTask");
      setDisable(true);
    }
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13 && newTodoValue.length > 0) {
      const todoDate = new Date();
      addTodo(newTodoValue, todoDate);
      setOpenModal(false);
      onClickButton();
    } else if (event.keyCode === 13) {
      event.preventDefault();
    }
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
    <form
      onKeyDown={onKeyDown}
      onSubmit={onSubmit}
      className="create-container"
    >
      <h1 className="create-title">Create New Task</h1>
      <h4 className="create-subtitle">Task Name</h4>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        className="create-input"
        placeholder="Lunch rocket to the moon"
      ></textarea>
      <div>
        <button disabled={disable} className={btnState} type="submit">
          Add Task
        </button>
      </div>
    </form>
  );
}

export { TodoNewTask };
