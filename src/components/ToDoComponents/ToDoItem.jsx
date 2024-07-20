import React from 'react';

export default function ToDoItem ({ todo, onToggleComplete, onDelete }) {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggleComplete(todo.id)} />
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}
