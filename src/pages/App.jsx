import React from "react";
import { useTodos } from "../hooks/useTodos";

import { TodoHeader } from "../components/TodoHeader";
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
import { TodoNotFound } from "../components/TodoNotFound";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodos,
    deleteTodos,
    openModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    setOpenModal,
    onClickButton,
    btnText,
    btnClass,
    textClass,
    iconClass,
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        {!totalTodos === 0 && (
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        )}
      </TodoHeader>

      <TodoList>
        {loading && <Loader loading={loading} />}
        {!loading && totalTodos === 0 && <EmptyTodo />}
        {searchedTodos.length === 0 && totalTodos > 0 && <TodoNotFound />}
        {error && <Error />}

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
          <TodoNewTask
            addTodo={addTodo}
            setOpenModal={setOpenModal}
            onClickButton={onClickButton}
          />
        </Modal>
      )}
      <CreateButton
        btnText={btnText}
        btnClass={btnClass}
        textClass={textClass}
        iconClass={iconClass}
        onClickButton={onClickButton}
      />
    </>
  );
}

export default App;
