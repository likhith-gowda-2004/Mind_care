import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Import images
import CounselingImage from '../assets/Counselor.jpg';
import StressImage from '../assets/StressManagement.jpg';
import AnxietyImage from '../assets/AnxietySupport.jpg';
import DepressionImage from '../assets/DepressionHelp.jpg';

const topics = [
  {
    title: 'Counseling Services',
    description: 'Explore available counseling services to guide you through personal challenges.',
    image: CounselingImage,  // Use imported image
  },
  {
    title: 'Stress Management',
    description: 'Learn strategies to manage stress effectively and maintain a healthy balance in life.',
    image: StressImage,
  },
  {
    title: 'Anxiety Support',
    description: 'Find resources to cope with anxiety and reduce its impact on your daily life.',
    image: AnxietyImage,
  },
  {
    title: 'Depression Help',
    description: 'Access tools and techniques to overcome depression and foster positive mental health.',
    image: DepressionImage,
  },
];

const Topics = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  const handleLearnMore = () => {
    navigate('/faculties'); // Navigate to the Faculties page
  };

  return (
    <Container style={{ padding: '50px' }}>
      <Typography variant="h3" gutterBottom align="center">
        Explore Mental Health Topics
      </Typography>
      <Typography variant="h6" paragraph align="center">
        Dive into the resources that can help you manage your mental well-being. Click on any topic to learn more.
      </Typography>

      <Grid container spacing={4}>
        {topics.map((topic, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={topic.title}
                height="140"
                image={topic.image}  // Use the image dynamically
                title={topic.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {topic.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {topic.description}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                onClick={handleLearnMore} // Use handleLearnMore to redirect to faculties page
                style={{ margin: '10px' }}
              >
                Learn More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Topics;
