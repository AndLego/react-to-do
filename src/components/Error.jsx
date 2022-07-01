import React from "react";
import "../styles/components/Error.css";

function Error() {

  return (
    <>
      <img alt="Oops!" className="errorImg" src="https://www.multitrabajos.com/candidate/static/media/algo-no-salio-bien.d1d4c9ba.png" />
      <h1 className="error-message">Oops! Something went wrong. Please try again</h1>
    </>
  );
}

export { Error };
