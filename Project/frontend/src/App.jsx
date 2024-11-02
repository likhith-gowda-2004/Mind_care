import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'; // Import Navbar component
import Home from './pages/Home';
import Topics from './pages/Topics';
import TopicDetails from './pages/TopicDetails';
import Faculties from './pages/Faculties'; // Ensure Faculties is imported
import Contact from './pages/Contact';
import About from './pages/About';
import Register from './Auth/Register'; // This could be the Create Account page
import Login from './Auth/Login';
import Dashboard from './pages/Dashboard';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import AdminDashboard from './pages/AdminDashboard'; // Import AdminDashboard
import { useAuth } from './contexts/AuthContext';

const App = () => {
  const { isAuthenticated, isAdmin } = useAuth(); // Assuming you have isAdmin to check for admin user

  return (
    <div className='min-h-screen bg-gray-100'>
      
      <Router>
       {/* Add the Navbar component here */}
       <Navbar />
       <main className="mt-16 mx-4 sm:mx-[10%]">
        <Routes>
        
          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/topics' element={<Topics />} />
          <Route path='/topics/:title' element={<TopicDetails />} />
          <Route path='/faculties' element={<Faculties />} /> {/* Faculties route */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />

          {/* Auth Routes */}
          <Route path='/register' element={!isAuthenticated ? <Register /> : <Navigate to='/' />} /> {/* Create Account page */}
          <Route path='/login' element={!isAuthenticated ? <Login /> : <Navigate to='/' />} />

          {/* Protected Routes */}
          <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <Navigate to='/login' />} />
          <Route path='/profile' element={isAuthenticated ? <MyProfile /> : <Navigate to='/login' />} />
          <Route path='/appointments' element={isAuthenticated ? <MyAppointments /> : <Navigate to='/login' />} />

          {/* Admin Route */}
          <Route path='/admin' element ={<AdminDashboard/>}/>
        </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;