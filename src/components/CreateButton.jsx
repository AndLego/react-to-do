import React from "react";
import "../styles/components/CreateButton.css";

function CreateButton(props) {
  const [btnText, setBtnText] = React.useState("Add Task");
  const [{ btnClass, textClass, iconClass }, setClass] = React.useState({
    btnClass: "icon-btn",
    textClass: "btn-txt",
    iconClass: "add-icon",
  });

  const onClickButton = () => {
    if (!props.openModal) {
      props.setOpenModal(true);

      setBtnText("Close");
      setClass({
        btnClass: "close-btn",
        textClass: "close-btn-text",
        iconClass: "",
      });
    } else {
      props.setOpenModal(false);

      setBtnText("Add Task");
      setClass({
        btnClass: "icon-btn",
        textClass: "btn-txt",
        iconClass: "add-icon",
      });
    }

    // props.setOpenModal(prevState => !prevState);
  };

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
