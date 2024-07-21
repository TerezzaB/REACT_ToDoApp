import React from 'react';
import ToDoItem from '../ToDoComponents/ToDoItem';

export default function TodoList({ todos, onToggleComplete, onDelete, onEdit }) {
  
  return (
    <div className="mx-10">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
