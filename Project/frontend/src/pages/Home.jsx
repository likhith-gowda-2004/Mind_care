import React from 'react';
import { Button, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  return (
    <Container style={{ textAlign: 'center', padding: '50px' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to the Mental Health Support System
      </Typography>
      <Typography variant="h5" gutterBottom>
        We are here to help you. Explore resources, get support, and take care of your mental health.
      </Typography>
      {/* Link the button to the /register page */}
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
