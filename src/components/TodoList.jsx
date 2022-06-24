import React from "react";
import "../styles/components/TodoList.css"

function TodoList(props) {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
}

export { TodoList };
