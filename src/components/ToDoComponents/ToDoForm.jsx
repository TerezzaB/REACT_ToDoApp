import React, { useState } from 'react';

export default function ToDoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo({
      id: Date.now(),
      title,
      completed: false,
    });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo item"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}
