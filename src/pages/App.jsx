import React from "react";
import { TodoProvider } from "../hooks/TodoContext";
import { AppUI } from "../components/AppUI";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;


// import './App.css';
// const deafaultTodos = [
//   { text: "Brush teeth", completed: false },
//   { text: "Study", completed: false },
//   { text: "Sleep", completed: false },
//   { text: "Sleep asdnasdjasjdnaj nasndajdnsajsa", completed: true },
//   { text: "jasjdnaj nasndajdnsajsa", completed: true },
//   { text: "Sleasdjasjdnaj nasndajdnsajsa", completed: true },
//   { text: "Sleepjasjdnaj nasndajdnsajsa", completed: true },
//   { text: "Sddddddasdjasjdnaj nasndajdnsajsa", completed: true },
//   { text: "Sfsdfdsdnsajsa", completed: true },
//   { text: "Sddddddddnasdjasfsdfsdssdssssajsa", completed: true },
//   { text: "Slefdsfsdfsddajdnsajsa", completed: true },
//   { text: "fffffffffffffffsdjasjdnaj nasndajdnsajsa", completed: true },
//   { text: "fsdfsasjdnaj nasndajdnsajsa", completed: true },
//   { text: "Sssssssssssssssxxxxxxsfsdfsddjasjdnaj nasndajdnsajsa", completed: true },

// ];