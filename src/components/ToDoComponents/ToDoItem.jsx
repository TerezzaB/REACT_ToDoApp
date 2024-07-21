import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function ToDoItem({ todo, onToggleComplete, onDelete, onEdit }) {
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

  return (
    <div className="px-10 py-5">
      <div className={`flex justify-between p-4 border border-white rounded-2xl ${todo.completed ? 'line-through' : ''}`}>
        <input type="checkbox" checked={todo.completed} onChange={() => { onToggleComplete(todo.id); if (isEditing) setIsEditing(false);}} className="mr-4" />
        {isEditing ? 
        ( <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="mr-4" disabled={todo.completed} />) : 
        ( <div className="mr-4 font-bold">{todo.title}</div> )}
        <div className="mr-4">{formatDate(todo.createdAt)}</div>
        <div>
          <button
            onClick={handleEdit} disabled={todo.completed}
            className={`mr-2 px-3 py-1 border-2 border-cyan-500 hover:border-cyan-400 bg-cyan-500 hover:bg-cyan-400 rounded-lg font-medium ${todo.completed ? 'opacity-50 cursor-not-allowed' : ''}`}>
            <FontAwesomeIcon icon={faEdit} className="mr-2" /> {isEditing ? 'Save' : 'Edit'}
          </button>
          <button onClick={() => onDelete(todo.id)} className="px-2 py-1 border-2 border-pink-800 rounded-lg"><FontAwesomeIcon icon={faTrash} className="mr-2" />Delete</button>
        </div>
      </div>
    </div>
  );
}
