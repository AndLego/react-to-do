import React from "react";
import { withStorageListener } from "../hoc/withStorageListener";

const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div>
        <p>Hubo cambios</p>
        <button onClick={() => toggleShow(false)}>Refresh</button>
      </div>
    );
  } else {
    return null;
  }
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
