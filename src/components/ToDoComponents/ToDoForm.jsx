import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


export default function ToDoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo({
      id: Date.now(),
      title,
      completed: false,
      highPriority: false
    });
    setTitle('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add a new todo item" className="my-10 mr-10 p-4 text-center border rounded-2xl border-fuchsia-600 text-white" />
        <button type="submit" className="p-4 px-5 bg-fuchsia-600 hover:bg-fuchsia-500 rounded-2xl font-bold"><FontAwesomeIcon icon={faPlusCircle} className="mr-2" />Add Todo</button>
      </form>
    </>
  );
}
