import React, { useState, useEffect } from 'react';
import Todo from './Todo';

const ListTodo = ({ getStoredTodos }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(getStoredTodos());
  }, [todos]);

  const handleToggle = (taskToUpdate) => {
    const updatedTodos = todos.map(todo =>
      todo.task === taskToUpdate.task ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleDelete = (taskToDelete) => {
    const updatedTodos = todos.filter(todo => todo.task !== taskToDelete.task);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <>
      <h2>Liste des Todos</h2>
      <div className="todo-list-box">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            task={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default ListTodo;
