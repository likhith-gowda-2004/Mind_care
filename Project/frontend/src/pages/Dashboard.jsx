// import React from 'react'
// import {Avatar,Button,Card,Flex,Typography} from 'antd';
// import {useAuth} from '../contexts/AuthContext';
// import {UserOutlined} from '@ant-design/icons';


// const Dashboard = () => {
//   const {userData,logout} = useAuth();
//   const handleLogout = async () =>
//   {
//     await logout();
//   };
//   return (
//     <Card className='profile-card'>
//       <Flex vertical gap='small' align='center'>
//       <Avatar size = {150} icon ={<UserOutlined />} className="avatar"/>
//       <Typography.Title level={2} strong className="username">{userData.name}</Typography.Title>
//       <Typography.Text type="secondary" strong> Email: {userData.email}</Typography.Text>
//       <Typography.Text type = "secondary" strong> Role: {userData.role}</Typography.Text>
//       <Button size="large" type="primary" className="profile-btn" onClick = {handleLogout}>Logout</Button>
//       </Flex>
        
//     </Card>

//   );
// };

// export default Dashboard
import React from 'react';
import { Avatar, Button, Card, Typography, Space, Row, Col } from 'antd';
import { useAuth } from '../contexts/AuthContext';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { userData, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <Row justify="center" align="middle" style={{ marginTop: '50px' }}>
      <Col>
        <Card className="profile-card" style={{ width: 350, textAlign: 'center' }}>
          {/* User Avatar */}
          <Avatar
            size={150}
            icon={<UserOutlined />}
            className="avatar"
            style={{ marginBottom: '20px' }}
          />

          {/* User Name */}
          <Typography.Title level={3} className="username">
            {userData.name || 'User Name'}
          </Typography.Title>

          {/* User Email and Role */}
          <Typography.Text type="secondary" style={{ display: 'block', marginBottom: '10px' }}>
            Email: {userData.email || 'user@example.com'}
          </Typography.Text>
          <Typography.Text type="secondary" style={{ display: 'block', marginBottom: '20px' }}>
            Role: {userData.role || 'User Role'}
          </Typography.Text>

          {/* Navigation Links */}
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Link to="/profile">
              <Button type="primary" block size="large">
                My Profile
              </Button>
            </Link>
            <Link to="/appointments">
              <Button type="default" block size="large">
                My Appointments
              </Button>
            </Link>
            <Button danger block size="large" onClick={handleLogout}>
              Logout
            </Button>
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default Dashboard;

