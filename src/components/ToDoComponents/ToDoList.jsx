import React from 'react';
import ToDoItem from '../ToDoComponents/ToDoItem';

export default function TodoList({ todos, onToggleComplete, onDelete }) {
  return (
    <div>
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
