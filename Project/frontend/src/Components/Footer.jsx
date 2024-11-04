import React from 'react';
import { Container, Grid, Typography, Link, Box, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Topics', path: '/topics' },
    { name: 'Faculties', path: '/faculties' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' }
  ];

  const resources = [
    { name: 'Mental Health Blog', path: '/topics' },
    { name: 'Support Groups', path: '/topics' },
    { name: 'Crisis Help', path: '/contact' },
    { name: 'Professional Counseling', path: '/faculties' }
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: '#077c9c',
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About MindCare
            </Typography>
            <Typography variant="body2">
              MindCare is PES University's dedicated mental health support platform, 
              providing students with resources and professional support for their 
              mental well-being.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              {quickLinks.map((link) => (
                <Link
                  component={RouterLink}
                  to={link.path}
                  key={link.name}
                  sx={{
                    color: 'white',
                    display: 'block',
                    mb: 1,
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Box>
              {resources.map((resource) => (
                <Link
                  component={RouterLink}
                  to={resource.path}
                  key={resource.name}
                  sx={{
                    color: 'white',
                    display: 'block',
                    mb: 1,
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  {resource.name}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 4, mb: 4, bgcolor: 'rgba(255,255,255,0.2)' }} />

        {/* Bottom Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} MindCare - PES University. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Emergency Contact: +91 1234567890 | Email: support@pesu.pes.edu
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;