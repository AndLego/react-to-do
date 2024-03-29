import React from "react";

const TodoNotFound = ({searchValue}) => {
  return (
    <>
      <h1 className="empty-title">oH- oH!</h1>
      <p className="empty-text">There's no task matching for "{searchValue}"</p>
    </>
  );
};

export { TodoNotFound };
