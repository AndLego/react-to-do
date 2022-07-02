import React from "react";
import { TodoContext } from "../hooks/TodoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoNewTask } from "../components/TodoNewTask";
import { CreateButton } from "../components/CreateButton";
import { Modal } from "../components/Modal";
import { Error } from "../components/Error";
import { Loader } from "../components/Loader";
import { EmptyTodo } from "../components/EmptyTodo";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodos,
    deleteTodos,
    openModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      {searchedTodos.length > 0 && <TodoSearch />}

      <TodoList>
        {loading && <Loader />}

        {!loading && !searchedTodos.length && !error ? (
          <EmptyTodo />
        ) : (
          error && <Error />
        )}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.date}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoNewTask />
        </Modal>
      )}
      <CreateButton />
    </>
  );
}

export { AppUI };
