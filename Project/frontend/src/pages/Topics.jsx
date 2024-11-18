// import React from 'react';
// import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// // Import images
// import CounselingImage from '../assets/Counselor.jpg';
// import StressImage from '../assets/StressManagement.jpg';
// import AnxietyImage from '../assets/AnxietySupport.jpg';
// import DepressionImage from '../assets/DepressionHelp.jpg';
// import MindfulnessImage from '../assets/Mindfulness.jpg';
// import SelfCareImage from '../assets/SelfCare.jpg';
// import TherapyImage from '../assets/Therapy.jpg';
// import NutritionImage from '../assets/Nutrition.jpg';
// import SleepImage from '../assets/Sleep.jpg';
// import AddictionImage from '../assets/AddictionSupport.jpg';
// import RelationshipsImage from '../assets/Relationships.jpg';

// const topics = [
//   {
//     title: 'Counseling Services',
//     description: 'Explore available counseling services to guide you through personal challenges.',
//     image: CounselingImage,
//   },
//   {
//     title: 'Stress Management',
//     description: 'Learn strategies to manage stress effectively and maintain a healthy balance in life.',
//     image: StressImage,
//   },
//   {
//     title: 'Anxiety Support',
//     description: 'Find resources to cope with anxiety and reduce its impact on your daily life.',
//     image: AnxietyImage,
//   },
//   {
//     title: 'Depression Help',
//     description: 'Access tools and techniques to overcome depression and foster positive mental health.',
//     image: DepressionImage,
//   },
//   {
//     title: 'Mindfulness Practices',
//     description: 'Discover mindfulness techniques to enhance your emotional well-being and reduce stress.',
//     image: MindfulnessImage,
//   },
//   {
//     title: 'Self-Care Strategies',
//     description: 'Learn about the importance of self-care and how to implement effective self-care practices.',
//     image: SelfCareImage,
//   },
//   {
//     title: 'Therapy Options',
//     description: 'Understand various therapy approaches and find the right fit for your needs.',
//     image: TherapyImage,
//   },
//   {
//     title: 'Nutrition and Mental Health',
//     description: 'Explore how nutrition impacts mental health and discover dietary tips for a healthier mind.',
//     image: NutritionImage,
//   },
//   {
//     title: 'Sleep Hygiene',
//     description: 'Learn the importance of sleep for mental health and strategies to improve your sleep quality.',
//     image: SleepImage,
//   },
//   {
//     title: 'Addiction Support',
//     description: 'Access resources for understanding and overcoming addiction-related challenges.',
//     image: AddictionImage,
//   },
//   {
//     title: 'Building Healthy Relationships',
//     description: 'Explore techniques for improving interpersonal relationships and enhancing communication skills.',
//     image: RelationshipsImage,
//   },
// ];

// const Topics = () => {
//   const navigate = useNavigate();

  // const handleLearnMore = (topic) => {
  //   navigate(`/topics/${topic.title}`);
  // };

//   return (
//     <Container
//       maxWidth="xl"
//       style={{
//         minHeight: '100vh',
//         padding: '50px',
//         backgroundColor: '#f9f9f9',
//         borderRadius: '8px',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//       }}
//     >
//       <Typography variant="h3" gutterBottom align="center" style={{ marginBottom: '20px' }}>
//         Explore Mental Health Topics
//       </Typography>
//       <Typography variant="h6" paragraph align="center" style={{ marginBottom: '40px' }}>
//         Dive into the resources that can help you manage your mental well-being. Click on any topic to learn more.
//       </Typography>

//       <Grid container spacing={4}>
//         {topics.map((topic, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card raised style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', height: '100%' }}>
//               <CardMedia
//                 component="img"
//                 alt={topic.title}
//                 height="200"
//                 image={topic.image}
//                 title={topic.title}
//                 style={{ objectFit: 'cover' }}
//               />
//               <CardContent style={{ minHeight: '80px', display: 'flex', flexDirection: 'column' }}>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {topic.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" style={{ flexGrow: 1 }}>
//                   {topic.description}
//                 </Typography>
//               </CardContent>
//               <Box display="flex" justifyContent="center" pb={2}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => handleLearnMore(topic)}
//                   style={{ margin: '10px' }}
//                 >
//                   Learn More
//                 </Button>
//               </Box>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Topics;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'tailwindcss/tailwind.css';

// const Topics = () => {
//   const [topics, setTopics] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const apiUrl = 'http://localhost:5000';

//   const fetchTopics = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const response = await axios.get(`${apiUrl}/api/admin/topics`);
//       if (response.data.topics) {
//         setTopics(response.data.topics);
//       } else {
//         setError("No topics found.");
//       }
//     } catch (error) {
//       setError("Failed to load topics. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTopics();
//   }, []);

//   const handleLearnMore = (topic) => {
//     navigate(`/topics/${topic.title}`);
//   };

//   return (
//     <Container
//       fluid
//       style={{
//         minHeight: '100vh',
//         padding: '50px',
//         backgroundColor: '#f9f9f9',
//         borderRadius: '8px',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//       }}
//     >
//       <h1 className="text-4xl font-bold text-center mb-6">Explore Mental Health Topics</h1>
//       <p className="text-center text-lg mb-10">
//         Dive into resources that can help you manage your mental well-being. Click on any topic to learn more.
//       </p>

//       {loading ? (
//         <div className="flex justify-center">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : error ? (
//         <Alert variant="danger" className="text-center">
//           {error}
//         </Alert>
//       ) : !topics.length ? (
//         <p className="text-center">No topics available.</p>
//       ) : (
//         <Row xs={1} sm={2} md={3} lg={4} className="g-4">
//           {topics.map((topic) => (
//             <Col key={topic._id}>
//               <Card
//                 className="shadow-lg rounded-lg h-full"
//                 style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', height: '100%' }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src={`https://source.unsplash.com/600x400/?mentalhealth,${topic.title}`}
//                   alt={topic.title}
//                   onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Mental+Health'; }}
//                   style={{ height: '200px', objectFit: 'cover' }}
//                 />
//                 <Card.Body style={{ minHeight: '120px', display: 'flex', flexDirection: 'column' }}>
//                   <Card.Title className="text-lg font-semibold text-gray-800 mb-2">
//                     {topic.title}
//                   </Card.Title>
//                   <Card.Text className="text-gray-600 text-base flex-grow-1">
//                     {topic.description}
//                   </Card.Text>
//                 </Card.Body>
//                 <div className="flex justify-center pb-4">
//                   <Button
//                     onClick={() => handleLearnMore(topic)}
//                     className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//                     style={{ margin: '10px' }}
//                   >
//                     Learn More
//                   </Button>
//                 </div>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
//   );
// };

// export default Topics;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'tailwindcss/tailwind.css';

// const Topics = () => {
//   const [topics, setTopics] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const apiUrl = 'http://localhost:5000';
//   const pixabayApiKey = '46972113-0b6cd7ffe1f434004fbdfa862';

//   const fetchTopics = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const response = await axios.get(`${apiUrl}/api/admin/topics`);
//       const fetchedTopics = response.data.topics || [];

//       const topicsWithImages = await Promise.all(
//         fetchedTopics.map(async (topic) => {
//           try {
//             const imageResponse = await axios.get(
//               `https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodeURIComponent(topic.title)}&image_type=photo&category=people&orientation=horizontal&per_page=3`
//             );
//             const imageUrl = imageResponse.data.hits[0]?.webformatURL || 'https://via.placeholder.com/600x400?text=Mental+Health';
//             return { ...topic, imageUrl };
//           } catch {
//             return { ...topic, imageUrl: 'https://via.placeholder.com/600x400?text=Mental+Health' };
//           }
//         })
//       );

//       setTopics(topicsWithImages);
//     } catch (error) {
//       setError("Failed to load topics. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTopics();
//   }, []);

//   const handleLearnMore = (topic) => {
//     navigate(`/topics/${topic._id}`);
// };
//   return (
//     <Container
//       fluid
//       style={{
//         minHeight: '100vh',
//         padding: '50px',
//         backgroundColor: '#f9f9f9',
//         borderRadius: '8px',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//       }}
//     >
//       <h1 className="text-4xl font-bold text-center mb-6">Explore Mental Health Topics</h1>
//       <p className="text-center text-lg mb-10">
//         Dive into resources that can help you manage your mental well-being. Click on any topic to learn more.
//       </p>

//       {loading ? (
//         <div className="flex justify-center">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : error ? (
//         <Alert variant="danger" className="text-center">
//           {error}
//         </Alert>
//       ) : !topics.length ? (
//         <p className="text-center">No topics available.</p>
//       ) : (
//         <Row xs={1} sm={2} md={3} lg={4} className="g-4">
//           {topics.map((topic) => (
//             <Col key={topic._id}>
//               <Card
//                 className="shadow-lg rounded-lg h-full"
//                 style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', height: '100%' }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src={topic.imageUrl}
//                   alt={topic.title}
//                   style={{ height: '200px', objectFit: 'cover' }}
//                 />
//                 <Card.Body style={{ minHeight: '120px', display: 'flex', flexDirection: 'column' }}>
//                   <Card.Title className="text-lg font-semibold text-gray-800 mb-2">
//                     {topic.title}
//                   </Card.Title>
//                   <Card.Text className="text-gray-600 text-base flex-grow-1">
//                     {topic.description}
//                   </Card.Text>
//                 </Card.Body>
//                 <div className="flex justify-center pb-4">
//                   <Button
//                     onClick={() => handleLearnMore(topic)}
//                     className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//                     style={{ margin: '10px' }}
//                   >
//                     Learn More
//                   </Button>
//                 </div>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
//   );
// };

// export default Topics;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext'; // Import useAuth to check authentication status
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'tailwindcss/tailwind.css';

// const Topics = () => {
//   const [topics, setTopics] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const { isAuthenticated } = useAuth(); // Get isAuthenticated from AuthContext

//   const apiUrl = 'http://localhost:5000';
//   const pixabayApiKey = '46972113-0b6cd7ffe1f434004fbdfa862';

//   const fetchTopics = async () => {
//     setLoading(true);
//     setError('');
//     try {
//       const response = await axios.get(`${apiUrl}/api/admin/topics`);
//       const fetchedTopics = response.data.topics || [];

//       const topicsWithImages = await Promise.all(
//         fetchedTopics.map(async (topic) => {
//           try {
//             const imageResponse = await axios.get(
//               `https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodeURIComponent(topic.title)}&image_type=photo&category=people&orientation=horizontal&per_page=3`
//             );
//             const imageUrl = imageResponse.data.hits[0]?.webformatURL || 'https://via.placeholder.com/600x400?text=Mental+Health';
//             return { ...topic, imageUrl };
//           } catch {
//             return { ...topic, imageUrl: 'https://via.placeholder.com/600x400?text=Mental+Health' };
//           }
//         })
//       );

//       setTopics(topicsWithImages);
//     } catch (error) {
//       setError("Failed to load topics. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTopics();
//   }, []);

//   const handleLearnMore = (topic) => {
//     if (!isAuthenticated) {  // Check if the user is authenticated
//       alert("You need to log in first to learn more about the topic.");
//       navigate("/login"); // Redirect to login page if not authenticated
//     } else {
//       navigate(`/topics/${topic._id}`); // Redirect to the topic details page if authenticated
//     }
//   };

//   return (
//     <Container
//       fluid
//       style={{
//         minHeight: '100vh',
//         padding: '50px',
//         backgroundColor: '#f9f9f9',
//         borderRadius: '8px',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//       }}
//     >
//       <h1 className="text-4xl font-bold text-center mb-6">Explore Mental Health Topics</h1>
//       <p className="text-center text-lg mb-10">
//         Dive into resources that can help you manage your mental well-being. Click on any topic to learn more.
//       </p>

//       {loading ? (
//         <div className="flex justify-center">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : error ? (
//         <Alert variant="danger" className="text-center">
//           {error}
//         </Alert>
//       ) : !topics.length ? (
//         <p className="text-center">No topics available.</p>
//       ) : (
//         <Row xs={1} sm={2} md={3} lg={4} className="g-4">
//           {topics.map((topic) => (
//             <Col key={topic._id}>
//               <Card
//                 className="shadow-lg rounded-lg h-full"
//                 style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', height: '100%' }}
//               >
//                 <Card.Img
//                   variant="top"
//                   src={topic.imageUrl}
//                   alt={topic.title}
//                   style={{ height: '200px', objectFit: 'cover' }}
//                 />
//                 <Card.Body style={{ minHeight: '120px', display: 'flex', flexDirection: 'column' }}>
//                   <Card.Title className="text-lg font-semibold text-gray-800 mb-2">
//                     {topic.title}
//                   </Card.Title>
//                   <Card.Text className="text-gray-600 text-base flex-grow-1">
//                     {topic.description}
//                   </Card.Text>
//                 </Card.Body>
//                 <div className="flex justify-center pb-4">
//                   <Button
//                     onClick={() => handleLearnMore(topic)} // Trigger handleLearnMore when clicked
//                     className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//                     style={{ margin: '10px' }}
//                   >
//                     Learn More
//                   </Button>
//                 </div>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
//   );
// };

// export default Topics;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'tailwindcss/tailwind.css';

// // API Constants
// const apiUrl = 'http://localhost:5000';
// const pixabayApiKey = '46972113-0b6cd7ffe1f434004fbdfa862';
// const defaultImageUrl = 'https://via.placeholder.com/600x400?text=Mental+Health';

// const Topics = () => {
//   const [topics, setTopics] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [enrolling, setEnrolling] = useState(false);
//   const navigate = useNavigate();
//   const { isAuthenticated, userData } = useAuth();
//   // const [enrolledTopics, setEnrolledTopics] = useState([]);

//   const fetchTopics = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const { data } = await axios.get(`${apiUrl}/api/admin/topics`);
//       const fetchedTopics = data.topics || [];

//       const topicsWithImages = await Promise.all(
//         fetchedTopics.map(async (topic) => {
//           try {
//             const imageResponse = await axios.get(
//               `https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodeURIComponent(topic.title)}&image_type=photo&category=people&orientation=horizontal&per_page=3`
//             );
//             const imageUrl = imageResponse.data.hits[0]?.webformatURL || defaultImageUrl;
//             return { ...topic, imageUrl };
//           } catch {
//             return { ...topic, imageUrl: defaultImageUrl };
//           }
//         })
//       );

//       setTopics(topicsWithImages);
//     } catch (error) {
//       setError("Failed to load topics. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchTopics();
//   }, []);

  // const handleEnroll = async (topic) => {
  //   if (!isAuthenticated) {
  //     alert("You need to log in first to enroll in a topic.");
  //     navigate("/login");
  //     return;
  //   }

  //   setEnrolling(true);
  //   try {
  //     const response = await axios.post(`${apiUrl}/api/enrollments/enroll`, {
  //       userId: userData._id,
  //       topicId: topic._id
  //     });

  //     if (response.data.success) {
  //       alert("Successfully enrolled in the topic!");
  //       navigate(`/topics/${topic._id}`);
  //     }
  //   } catch (error) {
  //     const errorMessage = error.response?.data?.message || "Error enrolling in topic. Please try again.";
  //     alert(errorMessage);
  //     console.error('Enrollment error:', error);
  //   } finally {
  //     setEnrolling(false);
  //   }
  // };

  // const handleEnroll = async (topic) => {
  //   if (!isAuthenticated) {
  //     alert("You need to log in first to enroll in a topic.");
  //     navigate("/login");
  //     return;
  //   }
  
  //   setEnrolling(true); // To indicate loading state (if required in the UI)
  //   try {
  //     const response = await axios.post(`${apiUrl}/api/enrollments/enroll`, {
  //       userId: userData._id,
  //       topicId: topic._id,
  //     });
  
  //     if (response.data.success) {
  //       alert("Successfully enrolled in the topic!");
  //       navigate(`/topics/${topic._id}`);
  //     }
  //   } catch (error) {
  //     if (error.response?.status === 400) {
  //       // Handle case where the user is already enrolled
  //       alert("You are already enrolled in this topic. Redirecting to the topic...");
  //       navigate(`/topics/${topic._id}`);
  //     } else {
  //       // General error handling
  //       const errorMessage =
  //         error.response?.data?.message || "Error enrolling in topic. Please try again.";
  //       alert(errorMessage);
  //     }
  //     console.error("Enrollment error:", error);
  //   } finally {
  //     setEnrolling(false); // Reset loading state
  //   }
  // };

  // const handleUnenroll = async (topic) => {
  //   if (!isAuthenticated) {
  //     alert('You need to log in first to unenroll from a topic.');
  //     navigate('/login');
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(`${apiUrl}/api/enrollments/unenroll`, {
  //       userId: userData._id,
  //       topicId: topic._id,
  //     });

  //     if (response.data.success) {
  //       alert('Successfully unenrolled from the topic!');
  //       setEnrolledTopics((prev) => prev.filter((id) => id !== topic._id));
  //     }
  //   } catch (error) {
  //     alert('Error unenrolling from topic. Please try again.');
  //     console.error('Unenrollment error:', error);
  //   }
  // };
  

//   return (
//     <Container fluid className="min-h-screen p-12 bg-gray-50">
//       <h1 className="text-4xl font-bold text-center mb-6">Explore Mental Health Topics</h1>
//       <p className="text-center text-lg mb-10">
//         Dive into resources that can help you manage your mental well-being. Enroll in topics to access detailed content.
//       </p>

//       {loading ? (
//         <div className="flex justify-center">
//           <Spinner animation="border" variant="primary" />
//         </div>
//       ) : error ? (
//         <Alert variant="danger" className="text-center">
//           {error}
//         </Alert>
//       ) : !topics.length ? (
//         <p className="text-center">No topics available.</p>
//       ) : (
//         <Row xs={1} sm={2} md={3} lg={4} className="g-4">
//           {topics.map((topic) => (
//             <Col key={topic._id}>
//               <Card className="shadow-lg rounded-lg h-full hover:shadow-xl transition-shadow duration-300">
//                 <Card.Img
//                   variant="top"
//                   src={topic.imageUrl}
//                   alt={topic.title}
//                   style={{ height: '200px', objectFit: 'cover' }}
//                 />
//                 <Card.Body className="flex flex-col">
//                   <Card.Title className="text-xl font-semibold mb-2">
//                     {topic.title}
//                   </Card.Title>
//                   <Card.Text className="text-gray-600 flex-grow">
//                     {topic.description}
//                   </Card.Text>
//                   <Button
//                     onClick={() => handleEnroll(topic)}
//                     disabled={enrolling}
//                     className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
//                   >
//                     {enrolling ? 'Enrolling...' : 'Enroll Now'}
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       )}
//     </Container>
//   );
// };

// export default Topics;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [enrolledTopics, setEnrolledTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [enrolling, setEnrolling] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, userData } = useAuth();

  const apiUrl = 'http://localhost:5000';
  const pixabayApiKey = '46972113-0b6cd7ffe1f434004fbdfa862';

  // Fetch topics and check enrollment status
  const fetchTopics = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch all topics
      const { data } = await axios.get(`${apiUrl}/api/admin/topics`);
      const fetchedTopics = data.topics || [];

      // Fetch enrolled topics if user is authenticated
      let enrolledTopicIds = [];
      if (isAuthenticated && userData?._id) {
        const enrollmentResponse = await axios.get(`${apiUrl}/api/enrollments/user/${userData._id}`);
        enrolledTopicIds = enrollmentResponse.data.enrollments.map((e) => e.topic._id);
      }
      setEnrolledTopics(enrolledTopicIds);

      // Add images to topics
      const topicsWithImages = await Promise.all(
        fetchedTopics.map(async (topic) => {
          try {
            const imageResponse = await axios.get(
              `https://pixabay.com/api/?key=${pixabayApiKey}&q=${encodeURIComponent(topic.title)}&image_type=photo&category=people&orientation=horizontal&per_page=3`
            );
            const imageUrl = imageResponse.data.hits[0]?.webformatURL || 'https://via.placeholder.com/600x400?text=Mental+Health';
            return { ...topic, imageUrl };
          } catch {
            return { ...topic, imageUrl: 'https://via.placeholder.com/600x400?text=Mental+Health' };
          }
        })
      );

      setTopics(topicsWithImages);
    } catch (error) {
      setError('Failed to load topics. Please try again.');
      console.error('Error fetching topics:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, [isAuthenticated, userData]);

  const handleEnroll = async (topic) => {
    if (!isAuthenticated) {
      alert('You need to log in first to enroll in a topic.');
      navigate('/login');
      return;
    }

    setEnrolling(true);
    try {
      const response = await axios.post(`${apiUrl}/api/enrollments/enroll`, {
        userId: userData._id,
        topicId: topic._id,
      });

      if (response.data.success) {
        alert('Successfully enrolled in the topic!');
        setEnrolledTopics((prev) => [...prev, topic._id]);
      }
    } catch (error) {
      alert('Error enrolling in topic. Please try again.');
      console.error('Enrollment error:', error);
    } finally {
      setEnrolling(false);
    }
  };

  const handleUnenroll = async (topic) => {
    if (window.confirm('Are you sure you want to unenroll from this topic?')) {
      try {
        const response = await axios.post(`${apiUrl}/api/enrollments/unenroll`, {
          userId: userData._id,
          topicId: topic._id,
        });

        if (response.data.success) {
          alert('Successfully unenrolled from the topic');
          setEnrolledTopics((prev) => prev.filter((id) => id !== topic._id));
        }
      } catch (error) {
        alert('Error unenrolling from topic. Please try again.');
        console.error('Unenrollment error:', error);
      }
    }
  };

  const handleView = (topicId) => {
    navigate(`/topics/${topicId}`);
  };

  return (
    <Container fluid className="min-h-screen p-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-6">Explore Mental Health Topics</h1>
      <p className="text-center text-lg mb-10">
        Dive into resources that can help you manage your mental well-being. Enroll in topics to access detailed content.
      </p>

      {loading ? (
        <div className="flex justify-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : !topics.length ? (
        <p className="text-center">No topics available.</p>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {topics.map((topic) => (
            <Col key={topic._id}>
              <Card className="shadow-lg rounded-lg h-full hover:shadow-xl transition-shadow duration-300">
                <Card.Img
                  variant="top"
                  src={topic.imageUrl}
                  alt={topic.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="flex flex-col">
                  <Card.Title className="text-xl font-semibold mb-2">
                    {topic.title}
                  </Card.Title>
                  <Card.Text className="text-gray-600 flex-grow">
                    {topic.description}
                  </Card.Text>
                  {enrolledTopics.includes(topic._id) ? (
                    <div className="flex gap-2 mt-4">
                      <Button
                        onClick={() => handleView(topic._id)}
                        variant="success"
                        className="flex-1"
                      >
                        View
                      </Button>
                      <Button
                        onClick={() => handleUnenroll(topic)}
                        variant="danger"
                        className="flex-1"
                      >
                        Unenroll
                      </Button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => handleEnroll(topic)}
                      disabled={enrolling}
                      variant="primary"
                      className="w-full mt-4"
                    >
                      {enrolling ? 'Enrolling...' : 'Enroll Now'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Topics;
