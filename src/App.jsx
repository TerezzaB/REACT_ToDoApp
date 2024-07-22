import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import InfoModal from './components/InfoModal';
import './App.css';
import HomeView from './views/HomeView';
import ToDoView from './views/ToDoView';
import modalContent from './assets/modalContent.json';


export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [infoContent, setInfoContent] = useState('');

  useEffect(() => {
    setInfoContent(modalContent.infoText);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div>
      <div className="sticky top-0 flex justify-between items-center p-2 _nav">
          <div className="flex-1 flex justify-center space-x-4">
            <NavLink to="/" className={({ isActive }) => `hover:text-purple-500 ${isActive ? 'text-purple-700 font-bold underline' : ''}`}>Home</NavLink>
            <NavLink to="/todo" className={({ isActive }) => `hover:text-purple-500 ${isActive ? 'text-purple-700 font-bold underline' : ''}`}>ToDo App</NavLink>
          </div>
          <div className="p-2"> 
            <FontAwesomeIcon icon={faInfoCircle} className="hover:text-purple-500 cursor-pointer" onClick={handleOpenModal} />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/todo" element={<ToDoView />} />
        </Routes>
        <InfoModal isOpen={isModalOpen} onClose={handleCloseModal} content={infoContent} />
      </div>
    </Router>
  );
}
