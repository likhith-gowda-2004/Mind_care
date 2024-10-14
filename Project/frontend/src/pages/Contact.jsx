import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending email)
    console.log('Form data submitted:', formData);
  };

  return (
    <Container style={{ padding: '50px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Contact Us
      </Typography>
      <Typography variant="h6" gutterBottom align="center">
        We're here to help. Fill out the form below or reach us through our contact details.
      </Typography>

      {/* Contact Form */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Contact Details */}
      <Box mt={5}>
        <Typography variant="h5">Office Contact Details</Typography>
        <Typography variant="body1">PES University, 100 Feet Ring Road, BSK 3rd Stage, Bengaluru - 560085</Typography>
        <Typography variant="body1">Support Email: support@pesu.pes.edu</Typography>
        <Typography variant="body1">Phone: +91 1234567890</Typography>
      </Box>

      {/* Google Map Embed */}
      <Box mt={5} style={{ textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>Find Us Here</Typography>
        <iframe
          src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5739572324605!2d77.5334657746502!3d12.935081687376949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e468d8d36d3%3A0x694d74f6ac640acf!2sPES%20University!5e0!3m2!1sen!2sin!4v1728820218380!5m2!1sen!2sin"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0, width: '100%', height: '400px' }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="University Location"
        ></iframe>
      </Box>
    </Container>
  );
};

export default Contact;
