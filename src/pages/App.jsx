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
import { ChangeAlertWithStorageListener } from "../components/ChangeAlert";

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
    sincronize,
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          loading={loading}
        />
        {!totalTodos == 0 && (
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            loading={loading}
          />
        )}
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        onError={() => <Error />}
        onLoading={() => <Loader loading={loading} />}
        onEmpty={() => <EmptyTodo />}
        onNotFound={() => <TodoNotFound searchValue={searchValue} />}
        render={(todo) => (
          <TodoItem
            key={todo.date}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        )}
      />

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

      <ChangeAlertWithStorageListener sincronize={sincronize} />
    </>
  );
}

export default App;
