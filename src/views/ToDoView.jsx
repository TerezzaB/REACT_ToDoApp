import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ToDoList from '../components/ToDoComponents/ToDoList'
import ToDoForm from '../components/ToDoComponents/ToDoForm'

const API_URL = 'https://669bf379276e45187d36f110.mockapi.io/api/todoapp/todos';

export default function TodoView() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setTodos(response.data);
      });
  }, []);

  const addTodo = (todo) => {
    axios.post(API_URL, todo)
      .then(response => {
        setTodos([...todos, response.data]);
      });
  };

  const toggleComplete = (id) => {
    const todo = todos.find(todo => todo.id === id);
    axios.put(`${API_URL}/${id}`, { ...todo, completed: !todo.completed })
      .then(response => {
        setTodos(todos.map(todo => todo.id === id ? response.data : todo));
      });
  };

  const deleteTodo = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setTodos(todos.filter(todo => todo.id !== id));
      });
  };

  return (
    <div>
      <ToDoForm onAddTodo={addTodo} />
      <ToDoList todos={todos} onToggleComplete={toggleComplete} onDelete={deleteTodo} />
    </div>
  );
}

