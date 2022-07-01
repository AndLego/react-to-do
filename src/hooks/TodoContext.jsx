import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

// TodoContext ->nombre que le doy
// este objeto tiene estas dos propiedades (o componentes)
// <TodoContext.Provider></TodoContext.Provider>envuelve nuestra app
// <TodoContext.Consumer></TodoContext.Consumer>nos permite acceder a

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  //searchValue es la const, el set la funcion que nos permite
  //actualizarlo, React.useState("") el valor inicial de searchValue

  //MODAL

  const [openModal, setOpenModal] = React.useState(false);

  //CLASS ADD-CLOSE BUTTON MODAL

  const [btnText, setBtnText] = React.useState("Add Task");
  const [{ btnClass, textClass, iconClass }, setClass] = React.useState({
    btnClass: "icon-btn",
    textClass: "btn-txt",
    iconClass: "add-icon",
  });

  //MODAL ONCLICK BUTTON

  const onClickButton = () => {
    if (!openModal) {
      setOpenModal(true);

      setBtnText("Close");
      setClass({
        btnClass: "close-btn",
        textClass: "close-btn-text",
        iconClass: "",
      });
    } else {
      setOpenModal(false);

      setBtnText("Add Task");
      setClass({
        btnClass: "icon-btn",
        textClass: "btn-txt",
        iconClass: "add-icon",
      });
    }

    // props.setOpenModal(prevState => !prevState);
  };

  //FILTER SEARCH CODE

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

  const addTodo = (text, date) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      date: date,
    });
    saveTodos(newTodos)
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
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleCompleteTodos,
        deleteTodos,
        addTodo,
        openModal,
        setOpenModal,
        btnText,
        btnClass,
        textClass,
        iconClass,
        onClickButton,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
