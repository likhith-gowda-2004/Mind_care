import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Faculties from './pages/Faculties';
import Contact from './pages/Contact';
import About from './pages/About';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Dashboard from './pages/Dashboard';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import AdminDashboard from './pages/AdminDashboard';
import { useAuth } from './contexts/AuthContext';
import Appointment from './pages/Appointment';
import TopicDetailsPage from './pages/TopicDetails';

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <Router>
        {/* Navbar - Fixed at top */}
        <Navbar />
        
        {/* Main Content - Grows to fill available space */}
        <main className="mt-16 mx-4 sm:mx-[10%] flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/topics' element={<Topics />} />
            <Route path='/topics/:id' element={<TopicDetailsPage />} />
            <Route path='/faculties' element={<Faculties />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/appointment/:facultyId' element={<Appointment />} />

            {/* Auth Routes */}
            <Route 
              path='/register' 
              element={!isAuthenticated ? <Register /> : <Navigate to='/' />}
            />
            <Route 
              path='/login' 
              element={!isAuthenticated ? <Login /> : <Navigate to='/' />}
            />

            {/* Protected Routes */}
            <Route 
              path='/dashboard' 
              element={isAuthenticated ? <Dashboard /> : <Navigate to='/login' />}
            />
            <Route 
              path='/profile' 
              element={isAuthenticated ? <MyProfile /> : <Navigate to='/login' />}
            />
            <Route 
  path='/appointments/:facultyId' 
  element={isAuthenticated ? <MyAppointments /> : <Navigate to='/login' />}
/>

            {/* Admin Route */}
            <Route path='/admin' element={<AdminDashboard />} />

            {/* Default redirect for unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
            
          </Routes>
        </main>

        {/* Footer - Sticks to bottom */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;