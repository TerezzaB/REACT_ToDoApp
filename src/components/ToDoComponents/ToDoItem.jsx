import React from 'react';

export default function ToDoItem ({ todo, onToggleComplete, onDelete }) {
  console.log(todo);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes} - ${day}.${month}.${year}`;
  };

  return (
    <div className="px-10 py-5">
      <div className="p-3 border-2 border-white">
        <input type="checkbox" checked={todo.completed} onChange={() => onToggleComplete(todo.id)} className='mr-4' />
        <span className="mr-4">{formatDate(todo.createdAt)}</span>
        <span className="mr-4">{todo.title}</span>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
}
