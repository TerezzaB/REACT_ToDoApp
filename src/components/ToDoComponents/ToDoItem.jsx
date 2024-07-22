import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function ToDoItem({ todo, onToggleComplete, onDelete, onEdit, onTogglePriority }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes} - ${day}.${month}.${year}`;
  };

  const handleEdit = () => {
    if (isEditing && newTitle !== todo.title) {
      onEdit(todo.id, newTitle);
    }
    setIsEditing(!isEditing);
  };

  const handlePriorityToggle = () => {
    if (!todo.completed) {
      onTogglePriority(todo.id, !todo.highPriority);
    }
  };

  return (
    <div className={`my-5 sm:my-10 px-5 sm:px-10 py-3 sm:py-5 border text-xs sm:text-base xs:text-sm ${todo.highPriority ? 'border-2 border-orange-600' : 'border-white'} rounded-2xl`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input type="checkbox" checked={todo.completed} onChange={() => { onToggleComplete(todo.id); if (isEditing) setIsEditing(false); }} className="mr-3 sm:mr-6" />
          <button onClick={handlePriorityToggle} disabled={todo.completed} className={`${todo.completed ? 'opacity-50 cursor-not-allowed line-through' : ''}`}>🔥</button>
        </div>
        <div className="flex-1 mx-2 sm:mx-4">
          {isEditing ? 
            (<input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="mr-4 w-full" disabled={todo.completed} />) : 
            (<div className={`font-bold ${todo.completed ? 'line-through' : ''}`}>{todo.title}</div>)}
        </div>
        <div className="flex flex-col sm:flex-row items-center space-x-4 gap-y-3">
          <div className="hidden md:block">{formatDate(todo.createdAt)}</div>
          <button 
            onClick={handleEdit} disabled={todo.completed}
            className={`px-3 py-1 border-2 border-cyan-500 hover:border-cyan-400 bg-cyan-500 hover:bg-cyan-400 rounded-lg font-medium ${todo.completed ? 'opacity-50 cursor-not-allowed' : ''}`}>
            <FontAwesomeIcon icon={faEdit} className="mr-2 whitespace-nowrap" />{isEditing ? 'Save' : 'Edit'}
          </button>
          <button onClick={() => onDelete(todo.id)} className="px-2 py-1 border-2 border-pink-800 rounded-lg whitespace-nowrap">
            <FontAwesomeIcon icon={faTrash} className="mr-2" />Delete
          </button>
        </div>
      </div>
    </div>
  );
}
