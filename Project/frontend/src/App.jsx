// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'; // Import Navbar component
import Home from './pages/Home';
import Topics from './pages/Topics';
import Faculties from './pages/Faculties';
import Contact from './pages/Contact';
import About from './pages/About';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Dashboard from './pages/Dashboard';
import MyProfile from './pages/MyProfile'; // Assuming you have these pages
import MyAppointments from './pages/MyAppointments';
import { useAuth } from './contexts/AuthContext';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Navbar /> {/* Add the Navbar component here */}
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/topics' element={<Topics />} />
        <Route path='/faculties' element={<Faculties />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        
        {/* Auth Routes */}
        <Route path='/register' element={!isAuthenticated ? <Register /> : <Navigate to='/' />} />
        <Route path='/login' element={!isAuthenticated ? <Login /> : <Navigate to='/' />} />
        
        {/* Protected Routes */}
        <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <Navigate to='/login' />} />
        <Route path='/profile' element={isAuthenticated ? <MyProfile /> : <Navigate to='/login' />} />
        <Route path='/appointments' element={isAuthenticated ? <MyAppointments /> : <Navigate to='/login' />} />
      </Routes>
    </Router>
  );
};

export default App;
