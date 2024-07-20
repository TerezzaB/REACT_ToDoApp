import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import HomeView from './views/HomeView'
import ToDoView from './views/ToDoView';


export default function App() {
  return (
    <Router>
      <div>
        <nav className="main_nav">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/todo">ToDo App</Link></div> 
        </nav>

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/todo" element={<ToDoView />} />
        </Routes>
      </div>
    </Router>
  );
}


