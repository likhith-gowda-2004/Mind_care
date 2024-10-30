import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Import images
import CounselingImage from '../assets/Counselor.jpg';
import StressImage from '../assets/StressManagement.jpg';
import AnxietyImage from '../assets/AnxietySupport.jpg';
import DepressionImage from '../assets/DepressionHelp.jpg';
import MindfulnessImage from '../assets/Mindfulness.jpg';
import SelfCareImage from '../assets/SelfCare.jpg';
import TherapyImage from '../assets/Therapy.jpg';
import NutritionImage from '../assets/Nutrition.jpg';
import SleepImage from '../assets/Sleep.jpg';
import AddictionImage from '../assets/AddictionSupport.jpg';
import RelationshipsImage from '../assets/Relationships.jpg';

const topics = [
  {
    title: 'Counseling Services',
    description: 'Explore available counseling services to guide you through personal challenges.',
    image: CounselingImage,
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
  {
    title: 'Mindfulness Practices',
    description: 'Discover mindfulness techniques to enhance your emotional well-being and reduce stress.',
    image: MindfulnessImage,
  },
  {
    title: 'Self-Care Strategies',
    description: 'Learn about the importance of self-care and how to implement effective self-care practices.',
    image: SelfCareImage,
  },
  {
    title: 'Therapy Options',
    description: 'Understand various therapy approaches and find the right fit for your needs.',
    image: TherapyImage,
  },
  {
    title: 'Nutrition and Mental Health',
    description: 'Explore how nutrition impacts mental health and discover dietary tips for a healthier mind.',
    image: NutritionImage,
  },
  {
    title: 'Sleep Hygiene',
    description: 'Learn the importance of sleep for mental health and strategies to improve your sleep quality.',
    image: SleepImage,
  },
  {
    title: 'Addiction Support',
    description: 'Access resources for understanding and overcoming addiction-related challenges.',
    image: AddictionImage,
  },
  {
    title: 'Building Healthy Relationships',
    description: 'Explore techniques for improving interpersonal relationships and enhancing communication skills.',
    image: RelationshipsImage,
  },
];

const Topics = () => {
  const navigate = useNavigate();

  const handleLearnMore = (topic) => {
    navigate(`/topics/${topic.title}`);
  };

  return (
    <Container
      maxWidth="xl"
      style={{
        minHeight: '100vh',
        padding: '50px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h3" gutterBottom align="center" style={{ marginBottom: '20px' }}>
        Explore Mental Health Topics
      </Typography>
      <Typography variant="h6" paragraph align="center" style={{ marginBottom: '40px' }}>
        Dive into the resources that can help you manage your mental well-being. Click on any topic to learn more.
      </Typography>

      <Grid container spacing={4}>
        {topics.map((topic, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card raised style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', height: '100%' }}>
              <CardMedia
                component="img"
                alt={topic.title}
                height="200"
                image={topic.image}
                title={topic.title}
                style={{ objectFit: 'cover' }}
              />
              <CardContent style={{ minHeight: '80px', display: 'flex', flexDirection: 'column' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {topic.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ flexGrow: 1 }}>
                  {topic.description}
                </Typography>
              </CardContent>
              <Box display="flex" justifyContent="center" pb={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleLearnMore(topic)}
                  style={{ margin: '10px' }}
                >
                  Learn More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Topics;
