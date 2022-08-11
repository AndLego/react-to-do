import React from "react";
import "../styles/components/Loader.css";

function Loader({ loading }) {
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
