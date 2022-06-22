import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoNewTask } from "./TodoNewTask";
// import './App.css';
const deafaultTodos = [
  { text: "Brush teeth", completed: false },
  { text: "Study", completed: false },
  { text: "Sleep", completed: true },
  { text: "Sleep asdnasdjasjdnaj nasndajdnsajsa", completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(deafaultTodos);

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
  //version toogle
  const toggleCompleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }
  
  // const completeTodos = (text) => {
  //   const todoIndex = todos.findIndex((todo) => todo.text === text);
  //   const newTodos = [...todos];
  //   newTodos[todoIndex].completed = true;
  //   setTodos(newTodos);
  // };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoNewTask />

      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
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
    </>
  );
}

export default App;
