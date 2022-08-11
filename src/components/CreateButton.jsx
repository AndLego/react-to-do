import React from "react";
import "../styles/components/CreateButton.css";

function CreateButton({
  btnText,
  btnClass,
  textClass,
  iconClass,
  onClickButton,
}) {
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
