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
        className="my-10 mr-10 p-4 text-center border rounded-2xl border-fuchsia-600 text-white"
      />
      <button type="submit" className="p-4 px-5 bg-fuchsia-600 hover:bg-fuchsia-500 rounded-2xl font-bold">Add Todo</button>
    </form>
  );
}
