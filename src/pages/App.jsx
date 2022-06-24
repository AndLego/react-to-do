import React from "react";
import { AppUI } from "../components/AppUI";
import { useLocalStorage } from "../hooks/useLocalStorage";

// import './App.css';
// const deafaultTodos = [
//   { text: "Brush teeth", completed: false },
//   { text: "Study", completed: false },
//   { text: "Sleep", completed: false },
//   { text: "Sleep asdnasdjasjdnaj nasndajdnsajsa", completed: true },
// ];

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  //searchValue es la const, el set la funcion que nos permite
  //actualizarlo, React.useState("") el valor inicial de searchValue

  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  // !!todo.completed es lo mismo que todo.completed == true
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const toggleCompleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodos={toggleCompleteTodos}
      deleteTodos={deleteTodos}
    />
  );
}

export default App;
