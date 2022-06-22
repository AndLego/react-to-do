import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li>
      <span
        className={`icon-check ${props.completed && "icon-check__completed"}`}
        onClick={props.onComplete}
      >
        ✔️
      </span>
      <p className={`todoItem-p ${props.completed && "todoItem-p__completed"}`}>
        {props.text}
      </p>
      <span onClick={props.onDelete}> X</span>
    </li>
  );
}

export { TodoItem };
