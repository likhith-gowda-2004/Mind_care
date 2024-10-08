import React from 'react';
import { Menu, Dropdown, Avatar, Button } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import logo from '../assets/logo_02.png';  // Ensure the logo is in the correct path

const Navbar = () => {
  const { isAuthenticated, userData, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="/profile">My Profile</Link>
      </Menu.Item>
      <Menu.Item key="appointments">
        <Link to="/appointments">My Appointments</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <Button type="text" onClick={handleLogout}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  // Function to dynamically set "active" class based on current route
  const isActiveLink = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* Logo at the leftmost side */}
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        {/* Navigation Links */}
        <Link className={isActiveLink('/')} to="/">Home</Link>
        <Link className={isActiveLink('/topics')} to="/topics">Topics</Link>
        <Link className={isActiveLink('/faculties')} to="/faculties">Faculties</Link>
        <Link className={isActiveLink('/contact')} to="/contact">Contact</Link>
        <Link className={isActiveLink('/about')} to="/about">About</Link>
      </div>
      <div className="navbar-right">
        {!isAuthenticated ? (
          <Link to="/register">
            <Button type="primary">Create Account</Button>
          </Link>
        ) : (
          <Dropdown overlay={menu} trigger={['click']}>
            <div>
              <Avatar size="large" icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
              <DownOutlined style={{ marginLeft: '8px' }} />
            </div>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default Navbar;
