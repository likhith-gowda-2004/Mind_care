import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, List, ListItem, Button, Divider, CircularProgress, Card, CardContent, Link } from '@mui/material';
import axios from 'axios';

const topicContent = {
  'Counseling Services': {
    assessments: [
      { title: 'Emotional Well-being Score', score: '82/100', recommendation: 'Your emotional well-being is good. Continue practicing self-care.' },
      { title: 'Communication Skills Assessment', score: '75/100', recommendation: 'Good communication skills. Consider group counseling sessions.' }
    ],
    videos: [
      { title: 'Understanding Counseling Services', url: 'https://www.youtube.com/watch?v=R5k81KXXsvk' }
    ],
    blogs: [
      { title: 'Counseling Resources', url: 'https://www.counselindia.com/blog' }
    ],
    faculties: [
      { name: 'Dr. Meena Sharma', designation: 'Head Counselor', contact: 'meena.sharma@pes.edu' },
      { name: 'Dr. Raj Kumar', designation: 'Student Counselor', contact: 'raj.kumar@pes.edu' }
    ]
  },
  'Stress Management': {
    assessments: [
      { title: 'Stress Level Assessment', score: '65/100', recommendation: 'Moderate stress levels detected. Consider stress management techniques.' },
      { title: 'Work-Life Balance Check', score: '70/100', recommendation: 'Room for improvement in maintaining work-life balance.' }
    ],
    videos: [
      { title: 'Stress Management Techniques', url: 'https://www.youtube.com/watch?v=i-pazYyLSWQ' }
    ],
    blogs: [
      { title: 'Managing Daily Stress', url: 'https://www.healthpartners.com/blog/manage-stress/' }
    ],
    faculties: [
      { name: 'Dr. Priya Venkatesh', designation: 'Stress Management Specialist', contact: 'priya.v@pes.edu' },
      { name: 'Prof. Siddharth Menon', designation: 'Wellness Coach', contact: 'siddharth.m@pes.edu' }
    ]
  },
  'Anxiety Support': {
    assessments: [
      { title: 'Anxiety Level Check', score: '75/100', recommendation: 'Mild anxiety indicators present. Regular mindfulness practice recommended.' },
      { title: 'Social Anxiety Assessment', score: '80/100', recommendation: 'Minimal social anxiety detected.' }
    ],
    videos: [
      { title: 'Understanding Anxiety', url: 'https://www.youtube.com/watch?v=MK0rESk_oW0' }
    ],
    blogs: [
      { title: 'Best Anxiety Resources', url: 'https://www.healthline.com/health/anxiety/best-blogs-of-the-year#1' }
    ],
    faculties: [
      { name: 'Dr. Anita Desai', designation: 'Clinical Psychologist', contact: 'anita.d@pes.edu' },
      { name: 'Dr. Kiran Reddy', designation: 'Mental Health Specialist', contact: 'kiran.r@pes.edu' }
    ]
  },
  'Depression Help': {
    assessments: [
      { title: 'Depression Screening', score: '88/100', recommendation: 'Your mood scores are within healthy range.' },
      { title: 'Daily Activity Assessment', score: '85/100', recommendation: 'Good engagement in daily activities.' }
    ],
    videos: [
      { title: 'Understanding Depression', url: 'https://www.youtube.com/watch?v=HQm7xRjl6-I' }
    ],
    blogs: [
      { title: 'Depression Support Blog', url: 'https://thedepressionproject.com/blogs/news' }
    ],
    faculties: [
      { name: 'Dr. Ramesh Nair', designation: 'Clinical Psychiatrist', contact: 'ramesh.n@pes.edu' },
      { name: 'Dr. Lakshmi Iyer', designation: 'Mental Health Counselor', contact: 'lakshmi.i@pes.edu' }
    ]
  },
  'Mindfulness Practices': {
    assessments: [
      { title: 'Mindfulness Awareness Score', score: '70/100', recommendation: 'Good mindfulness awareness. Continue regular practice.' },
      { title: 'Present-Moment Focus', score: '75/100', recommendation: 'Consider incorporating more mindfulness exercises.' }
    ],
    videos: [
      { title: 'Introduction to Mindfulness', url: 'https://www.youtube.com/watch?v=zr42pt0kuZE' }
    ],
    blogs: [
      { title: 'Mindfulness Resources', url: 'https://melliobrien.com/blog/' }
    ],
    faculties: [
      { name: 'Dr. Anjali Krishnan', designation: 'Mindfulness Coach', contact: 'anjali.k@pes.edu' },
      { name: 'Prof. Suresh Kumar', designation: 'Meditation Expert', contact: 'suresh.k@pes.edu' }
    ]
  },
  'Self-Care Strategies': {
    assessments: [
      { title: 'Self-Care Routine Check', score: '78/100', recommendation: 'Good self-care habits. Consider adding more relaxation activities.' },
      { title: 'Wellness Practice Assessment', score: '72/100', recommendation: 'Room for improvement in regular exercise routine.' }
    ],
    videos: [
      { title: 'Self-Care Basics', url: 'https://www.youtube.com/watch?v=lTTNgnF4Zu8' }
    ],
    blogs: [
      { title: 'Self-Care Guide', url: 'https://theblissfulmind.com/category/self-care/' }
    ],
    faculties: [
      { name: 'Dr. Sunita Rao', designation: 'Wellness Coordinator', contact: 'sunita.r@pes.edu' },
      { name: 'Dr. Arun Prakash', designation: 'Health Education Specialist', contact: 'arun.p@pes.edu' }
    ]
  },
  'Therapy Options': {
    assessments: [
      { title: 'Therapy Readiness Assessment', score: '85/100', recommendation: 'Good candidacy for various therapy options.' },
      { title: 'Treatment Preference Analysis', score: '80/100', recommendation: 'Consider cognitive behavioral therapy.' }
    ],
    videos: [
      { title: 'Types of Therapy', url: 'https://www.youtube.com/watch?v=ZdyOwZ4_RnI' }
    ],
    blogs: [
      { title: 'Therapy Resources', url: 'https://www.goodtherapy.org/blog/' }
    ],
    faculties: [
      { name: 'Dr. Maya Sharma', designation: 'Lead Therapist', contact: 'maya.s@pes.edu' },
      { name: 'Dr. Vikram Mehta', designation: 'Psychology Professor', contact: 'vikram.m@pes.edu' }
    ]
  },
  'Nutrition and Mental Health': {
    assessments: [
      { title: 'Nutritional Wellness Score', score: '70/100', recommendation: 'Consider improving dietary habits for better mental health.' },
      { title: 'Diet-Mood Connection Analysis', score: '75/100', recommendation: 'Good awareness of nutrition-mood connection.' }
    ],
    videos: [
      { title: 'Nutrition and Mental Health', url: 'https://www.youtube.com/watch?v=3dqXHHCc5lA' }
    ],
    blogs: [
      { title: 'Mental Health Nutrition', url: 'https://www.psychiatry.org/news-room/apa-blogs/mental-health-through-better-nutrition' }
    ],
    faculties: [
      { name: 'Dr. Priya Menon', designation: 'Nutritional Psychology Expert', contact: 'priya.m@pes.edu' },
      { name: 'Dr. Rahul Sharma', designation: 'Health & Wellness Consultant', contact: 'rahul.s@pes.edu' }
    ]
  },
  'Sleep Hygiene': {
    assessments: [
      { title: 'Sleep Quality Assessment', score: '68/100', recommendation: 'Room for improvement in sleep habits. Consider following a regular sleep schedule.' },
      { title: 'Sleep Pattern Analysis', score: '72/100', recommendation: 'Moderate sleep efficiency. Focus on pre-sleep routine.' }
    ],
    videos: [
      { title: 'Better Sleep Guide', url: 'https://www.youtube.com/watch?v=fk-_SwHhLLc' }
    ],
    blogs: [
      { title: 'Sleep Resources', url: 'https://www.sleepfoundation.org/sleep-hygiene' }
    ],
    faculties: [
      { name: 'Dr. Deepak Verma', designation: 'Sleep Health Specialist', contact: 'deepak.v@pes.edu' },
      { name: 'Dr. Ananya Reddy', designation: 'Behavioral Sleep Medicine Expert', contact: 'ananya.r@pes.edu' }
    ]
  },
  'Addiction Support': {
    assessments: [
      { title: 'Behavioral Pattern Assessment', score: '82/100', recommendation: 'Low risk indicators. Continue maintaining healthy habits.' },
      { title: 'Coping Mechanism Analysis', score: '75/100', recommendation: 'Good awareness of triggers and coping strategies.' }
    ],
    videos: [
      { title: 'Understanding Addiction', url: 'https://www.youtube.com/watch?v=5eJEzg0Tfc4' }
    ],
    blogs: [
      { title: 'Recovery Resources', url: 'https://7summitpathways.com/blog/five-best-recovery-blogs/' }
    ],
    faculties: [
      { name: 'Dr. Vikram Desai', designation: 'Addiction Counseling Specialist', contact: 'vikram.d@pes.edu' },
      { name: 'Dr. Shalini Kumar', designation: 'Behavioral Health Expert', contact: 'shalini.k@pes.edu' }
    ]
  },
  'Building Healthy Relationships': {
    assessments: [
      { title: 'Communication Skills Score', score: '80/100', recommendation: 'Strong communication abilities. Continue practicing active listening.' },
      { title: 'Relationship Dynamics Assessment', score: '75/100', recommendation: 'Good understanding of boundaries and mutual respect.' }
    ],
    videos: [
      { title: 'Building Better Relationships', url: 'https://www.youtube.com/watch?v=eMqWH3LYiII' }
    ],
    blogs: [
      { title: 'Relationship Guide', url: 'https://www.betterup.com/blog/healthy-relationships-in-life' }
    ],
    faculties: [
      { name: 'Dr. Meghana Iyer', designation: 'Relationship Counselor', contact: 'meghana.i@pes.edu' },
      { name: 'Dr. Arjun Nair', designation: 'Family Therapy Specialist', contact: 'arjun.n@pes.edu' }
    ]
  }
};

const TopicDetails = () => {
  const { title } = useParams();
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setContent(topicContent[title] || {
        assessments: [],
        faculties: []
      });
      setLoading(false);
    }, 1000);
  }, [title]);

  if (loading) {
    return (
      <Container sx={{ pt: 8, pb: 6, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ pt: 8, pb: 6 }}>
      <Typography variant="h3" gutterBottom>{title}</Typography>

      {/* Assessments Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Your Assessment Results</Typography>
      {content.assessments?.map((assessment, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{assessment.title}</Typography>
            <Typography variant="body1" color="primary">{assessment.score}</Typography>
            <Typography variant="body2" color="text.secondary">
              {assessment.recommendation}
            </Typography>
          </CardContent>
        </Card>
      ))}

      {/* Videos Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Helpful Videos</Typography>
      {content.videos?.map((video, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{video.title}</Typography>
            <Button
              variant="contained"
              color="primary"
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 1 }}
            >
              Watch Video
            </Button>
          </CardContent>
        </Card>
      ))}

      {/* Blogs Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Related Blogs</Typography>
      {content.blogs?.map((blog, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{blog.title}</Typography>
            <Button
              variant="contained"
              color="secondary"
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 1 }}
            >
              Read Blog
            </Button>
          </CardContent>
        </Card>
      ))}

      {/* Faculty Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>Related Faculty Members</Typography>
      {content.faculties?.map((faculty, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{faculty.name}</Typography>
            <Typography variant="body1">{faculty.designation}</Typography>
            <Button
              variant="contained"
              color="primary"
              href={`mailto:${faculty.contact}`}
              sx={{ mt: 1 }}
            >
              Contact
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
);
};

export default TopicDetails;