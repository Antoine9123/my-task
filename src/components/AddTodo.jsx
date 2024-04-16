import React, { useState, useEffect } from 'react';

const AddTodo = ({ getStoredTodos }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(getStoredTodos());
  }, [todos]);

  const addStoredTodos = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = { task: event.target.elements.todo.value, done: false };
    if (newTodo.task) {
      addStoredTodos(newTodo);
      event.target.elements.todo.value = '';
    }
  };

  return (
    <div>
      <form className="add-todo-box" onSubmit={handleSubmit}>
        <input type="text" name="todo" style={{ textAlign: 'center' }} placeholder="Write a new todo" />
        <br />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
