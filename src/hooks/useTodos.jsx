import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronize,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");

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

  // COMPLETED TODOS COUNTER
  const completedTodos = todos.filter((todo) => todo.completed === true).length;

  //FILTER SEARCH CODE
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
    saveTodos(newTodos);
  };

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
  return {
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
    sincronize,
  };
}

export { useTodos };
