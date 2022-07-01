import React from "react";
import { TodoContext } from "../hooks/TodoContext";
import "../styles/components/CreateButton.css";

function CreateButton() {
  const { btnText, btnClass, textClass, iconClass, onClickButton } =
    React.useContext(TodoContext);

  return (
    <div className="btn-container">
      <button className={`${btnClass} add-btn`} onClick={onClickButton}>
        <div className={iconClass} />
        <div className={textClass}>{btnText}</div>
      </button>
    </div>
  );
}

export { CreateButton };
