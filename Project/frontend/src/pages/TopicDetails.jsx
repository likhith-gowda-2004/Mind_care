import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, List, ListItem, Divider, CircularProgress } from '@mui/material';
import axios from 'axios';

const TopicDetails = () => {
  const { title } = useParams(); // Get the topic title from the URL
  const [topic, setTopic] = useState(null); // State to store topic details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const response = await axios.get(`/api/topics/${title}`); // Replace with your actual API route
        setTopic(response.data);
      } catch (err) {
        setError("Failed to load topic details.");
      } finally {
        setLoading(false);
      }
    };
    fetchTopic();
  }, [title]);

  if (loading) {
    return (
      <Container style={{ paddingTop: '100px', paddingBottom: '50px' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container style={{ paddingTop: '100px', paddingBottom: '50px' }}>
        <Typography variant="h4" color="error">{error}</Typography>
      </Container>
    );
  }

  if (!topic) {
    return (
      <Container style={{ paddingTop: '100px', paddingBottom: '50px' }}>
        <Typography variant="h4">Topic Not Found</Typography>
      </Container>
    );
  }

  return (
    <Container style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <Typography variant="h3" gutterBottom>
        {topic.title} Details
      </Typography>

      <Divider style={{ margin: '20px 0' }} />

      <Typography variant="h5" gutterBottom>
        Assessments
      </Typography>
      <List>
        {topic.assessments?.map((assessment, index) => (
          <ListItem key={index}>{assessment}</ListItem>
        ))}
      </List>

      <Divider style={{ margin: '20px 0' }} />

      <Typography variant="h5" gutterBottom>
        Videos
      </Typography>
      <List>
        {topic.videos?.map((video, index) => (
          <ListItem key={index}>{video}</ListItem>
        ))}
      </List>

      <Divider style={{ margin: '20px 0' }} />

      <Typography variant="h5" gutterBottom>
        Blogs
      </Typography>
      <List>
        {topic.blogs?.map((blog, index) => (
          <ListItem key={index}>{blog}</ListItem>
        ))}
      </List>

      <Divider style={{ margin: '20px 0' }} />

      <Typography variant="h5" gutterBottom>
        Related Faculties
      </Typography>
      <List>
        {topic.faculties?.map((faculty, index) => (
          <ListItem key={index}>{faculty}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TopicDetails;
