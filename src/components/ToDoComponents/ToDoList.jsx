import React from 'react';
import ToDoItem from '../ToDoComponents/ToDoItem';

export default function TodoList({ todos, onToggleComplete, onDelete, onEdit, onTogglePriority }) {
  const sortedTodos = todos.sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    if (a.highPriority !== b.highPriority) {
      return a.highPriority ? -1 : 1;
    }
    return 0;
  });

  return (
    <div className="mx-5 sm:mx-10">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onEdit={onEdit}
          onTogglePriority={onTogglePriority}
        />
      ))}
    </div>
  );
}
