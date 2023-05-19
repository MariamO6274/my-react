import React from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  //show another component
  //
  return (
    <>
      <TodoList />
      <input type="text" />
      <button> Add Tesk</button>
      <div> 0 tesks left to do</div>
    </>
  );
}

export default App;
// div className ="cardDisplay"
