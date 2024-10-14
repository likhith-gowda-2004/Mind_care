import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const faculties = [
  {
    name: 'Dr. Shruthi G.',
    specialization: 'Counseling Services',
    email: 'shruthig@pesu.pes.edu',
    phone: '+91 9876543210',
  },
  {
    name: 'Dr. Arjun S.',
    specialization: 'Stress Management',
    email: 'arjuns@pesu.pes.edu',
    phone: '+91 9876543211',
  },
  {
    name: 'Dr. Kavitha N.',
    specialization: 'Anxiety Support',
    email: 'kavithan@pesu.pes.edu',
    phone: '+91 9876543212',
  },
  {
    name: 'Dr. Rajesh P.',
    specialization: 'Depression Help',
    email: 'rajeshp@pesu.pes.edu',
    phone: '+91 9876543213',
  },
];

const Faculties = () => {
  return (
    <Container style={{ padding: '50px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Meet Our Faculty Experts
      </Typography>
      <Grid container spacing={4}>
        {faculties.map((faculty, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {faculty.name}
                </Typography>
                <Typography color="textSecondary">
                  {faculty.specialization}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Email: {faculty.email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Phone: {faculty.phone}
                </Typography>
                {/* Add Buttons */}
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '10px' }}
                  href={`mailto:${faculty.email}`}
                >
                  Contact via Email
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ marginTop: '10px', marginLeft: '10px' }}
                  href={`tel:${faculty.phone}`}
                >
                  Call
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Faculties;
