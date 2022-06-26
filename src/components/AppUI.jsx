import React from "react";
import { TodoContext } from "../hooks/TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoNewTask } from "../components/TodoNewTask";
import { CreateButton } from "../components/CreateButton";
import { Modal } from "../components/Modal";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodos,
    deleteTodos,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      {/* <TodoNewTask /> */}

      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Run Bitch...</p>}
        {loading && <p>Give it a second...</p>}
        {!loading && !searchedTodos.length && <p>Create your first Todo</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>


      {!!openModal && (
        <Modal>
          <p>{searchedTodos[0]?.text}</p>
        </Modal>
      )}
      <CreateButton openModal={openModal} setOpenModal={setOpenModal}/>
    </>
  );
}

export { AppUI };
