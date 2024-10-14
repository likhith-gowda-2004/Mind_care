import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';

// Sample data for Core Team
const coreTeamMembers = [
  {
    name: 'Dr. Shruthi Ganesh',
    designation: 'Psychologist',
    bio: 'Dr. Shruthi specializes in cognitive behavioral therapy and has over 10 years of experience in mental health counseling.',
    image: 'https://via.placeholder.com/150', // Placeholder image
    email: 'shruthig@pesu.pes.edu',
    phone: '+91 9876543210',
  },
  {
    name: 'Prof. Anil Kumar',
    designation: 'Counseling Coordinator',
    bio: 'Prof. Anil has been instrumental in developing the mental health curriculum and providing student support.',
    image: 'https://via.placeholder.com/150', // Placeholder image
    email: 'anilk@pesu.pes.edu',
    phone: '+91 9876543211',
  },
  // Add more team members as needed
];

const About = () => {
  return (
    <Container style={{ padding: '50px' }}>
      <Typography variant="h4" gutterBottom align="center">
        About Us
      </Typography>

      <Typography variant="h5" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1" paragraph>
        Our mission is to provide comprehensive mental health support and resources to students, helping them navigate their challenges and achieve their potential.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Our Vision
      </Typography>
      <Typography variant="body1" paragraph>
        We envision a supportive environment where every student has access to mental health resources and support, fostering a culture of well-being and resilience.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Background
      </Typography>
      <Typography variant="body1" paragraph>
        The Mental Health Support System was developed in response to the increasing need for mental health awareness and resources among students. Our goal is to bridge the gap between students and mental health professionals, ensuring timely and effective support.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Core Team
      </Typography>
      <Grid container spacing={4}>
        {coreTeamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <img src={member.image} alt={member.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {member.designation}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {member.bio}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {member.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: {member.phone}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={5}>
        <Typography variant="h5" gutterBottom>
          Timeline of Initiatives
        </Typography>
        <Typography variant="body1">
          - 2021: Launched the Mental Health Awareness Campaign<br />
          - 2022: Introduced regular counseling sessions for students<br />
          - 2023: Expanded resources and created a dedicated mental health website<br />
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
