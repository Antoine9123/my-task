

import React from 'react';

const Todo = ({ task, onToggle, onDelete }) => {
  const handleToggle = () => {
    onToggle(task);
  };

  const handleDelete = () => {
    onDelete(task);
  };

  return (
    <>
      <div className='todo-content'>
        <div className="task">
        <input type="checkbox" checked={task.done} onChange={handleToggle} />
        <label style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.task}</label>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
};

export default Todo;

