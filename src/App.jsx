import "./App.css";
import { useState, useEffect } from "react";

import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo"; 

function App() {
  const getStoredTodos = () => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  return (
    <>
      <div>
        <div className="navbar">
        <h1 className="logo">My Todo App</h1>
        </div>
        <hr />
        <AddTodo getStoredTodos={getStoredTodos} />

        

        <ListTodo getStoredTodos={getStoredTodos} /> 
      </div>
    </>
  );
}

export default App;
