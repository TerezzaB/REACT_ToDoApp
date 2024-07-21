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
        <div className="sticky top-0 flex flex-row justify-center p-2 _nav">
            <div className="p-2"><Link to="/" activestyle={{ color: '#a87cff' }}>Home</Link></div>
            <div className="p-2"><Link to="/todo" activestyle={{ color: '#a87cff' }}>ToDo App</Link></div> 
        </div>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/todo" element={<ToDoView />} />
        </Routes>
      </div>
    </Router>
  );
}


