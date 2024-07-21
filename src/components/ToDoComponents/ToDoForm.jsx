import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


export default function ToDoForm({ onAddTodo }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required !');
      return;
    }
    setError('');
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
        <div className="flex flex-row justify-center items-center">
          <div><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add a new todo item" className="my-10 mr-5 sm:mr-10 p-3 sm:p-4 text-center border rounded-2xl border-fuchsia-600 text-white" /></div>
          <div><button type="submit" className="p-3 px-4 sm:p-4 sm:px-5 bg-fuchsia-600 hover:bg-fuchsia-500 rounded-2xl font-bold"><FontAwesomeIcon icon={faPlusCircle} className="mr-2" />Add Todo</button></div>
        </div>
        {error && <div className="font-bold text-pink-800 mt-2">{error}</div>}
      </form>
    </>
  );
}
