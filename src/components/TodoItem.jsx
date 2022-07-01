import React from "react";
import { IoTrashBin } from "react-icons/io5";
import "../styles/components/TodoItem.css";

function TodoItem(props) {
  const [checked, setChecked] = React.useState(props.completed);

  return (
    <li>
      <div>
        <input
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
          type="checkbox"
          id={props.text}
        />
        <label
          onClick={props.onComplete}
          className="checkLabel"
          htmlFor={props.text}
        >
          <span />
        </label>
      </div>

      <p className={`todoItem-p ${props.completed && "todoItem-p__completed"}`}>
        {props.text}
      </p>
      <span className="closeTask" onClick={props.onDelete}>
        <IoTrashBin className="eraser-Icon" />
      </span>
    </li>
  );
}

export { TodoItem };
