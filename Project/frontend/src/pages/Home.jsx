import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Box, Container, Grid, Card, CardContent } from '@mui/material';
import Header from '../Components/Header';
import { useAuth } from '../contexts/AuthContext';

// Icons
import MentalHealthIcon from '../assets/mental_health.jpg';
import CounselingIcon from '../assets/Counselor.jpg';
import CommunityIcon from '../assets/group_profiles.png';

const Home = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      title: "Professional Support",
      description: "Access to qualified mental health professionals and counselors from PES University.",
      image: CounselingIcon
    },
    {
      title: "Mental Health Resources",
      description: "Comprehensive library of resources, articles, and tools for mental wellness.",
      image: MentalHealthIcon
    },
    {
      title: "Supportive Community",
      description: "Join a caring community of students and professionals dedicated to mental health.",
      image: CommunityIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <Header />
      
      {/* Main Content Section */}
      <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            Welcome to MindCare
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Your Mental Health Matters
          </Typography>
          {!isAuthenticated && (
            <Button
              component={Link}
              to="/register"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
            >
              Get Started Today
            </Button>
          )}
        </Box>

        {/* Features Section */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 3
                  }
                }}
              >
                <Box
                  sx={{
                    height: 200,
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {feature.title}
                  </Typography>
                  <Typography>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action Section */}
        <Box 
          sx={{ 
            mt: 8, 
            p: 6, 
            textAlign: 'center',
            backgroundColor: 'primary.main',
            borderRadius: 2,
            color: 'white'
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to Take the First Step?
          </Typography>
          <Typography variant="h6" paragraph>
            Join our community and get the support you deserve
          </Typography>
          <Button
            component={Link}
            to="/topics"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 2 }}
          >
            Explore Topics
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Home;