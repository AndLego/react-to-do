import React from "react";
import { TodoContext } from "../hooks/TodoContext";
import "../styles/components/Loader.css";

function Loader() {
  const { loading } = React.useContext(TodoContext);

  return (
    <>
      {loading && (
        <div className="loader">
          <div className="face">
            <div className="circle"></div>
          </div>
          <div className="face">
            <div className="circle"></div>
          </div>
        </div>
      )}
    </>
  );
}

export { Loader };
