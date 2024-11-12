// import React from 'react';
// import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

// const faculties = [
//   {
//     name: 'Dr. Shruthi G.',
//     specialization: 'Counseling Services',
//     email: 'shruthig@pesu.pes.edu',
//     phone: '+91 9876543210',
//   },
//   {
//     name: 'Dr. Arjun S.',
//     specialization: 'Stress Management',
//     email: 'arjuns@pesu.pes.edu',
//     phone: '+91 9876543211',
//   },
//   {
//     name: 'Dr. Kavitha N.',
//     specialization: 'Anxiety Support',
//     email: 'kavithan@pesu.pes.edu',
//     phone: '+91 9876543212',
//   },
//   {
//     name: 'Dr. Rajesh P.',
//     specialization: 'Depression Help',
//     email: 'rajeshp@pesu.pes.edu',
//     phone: '+91 9876543213',
//   },
// ];

// const Faculties = () => {
//   return (
//     <Container style={{ padding: '50px' }}>
//       <Typography variant="h4" gutterBottom align="center">
//         Meet Our Faculty Experts
//       </Typography>
//       <Grid container spacing={4}>
//         {faculties.map((faculty, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h6" component="div">
//                   {faculty.name}
//                 </Typography>
//                 <Typography color="textSecondary">
//                   {faculty.specialization}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Email: {faculty.email}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Phone: {faculty.phone}
//                 </Typography>
//                 {/* Add Buttons */}
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   style={{ marginTop: '10px' }}
//                   href={`mailto:${faculty.email}`}
//                 >
//                   Contact via Email
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   style={{ marginTop: '10px', marginLeft: '10px' }}
//                   href={`tel:${faculty.phone}`}
//                 >
//                   Call
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Faculties;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Faculties = () => {
//   const [faculties, setFaculties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/faculties')
//       .then((response) => {
//         setFaculties(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError('Error fetching faculties');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (!faculties.length) {
//     return <p>No faculties available.</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Our Counselors</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {faculties.map((faculty) => (
//           <Card key={faculty._id} className="shadow-lg p-3 mb-5 bg-white rounded">
//             <Card.Body>
//               <Card.Title>{faculty.name}</Card.Title>
//               <Card.Subtitle className="mb-2 text-muted">{faculty.specialization}</Card.Subtitle>
//               <Card.Text>Contact: {faculty.contactInfo}</Card.Text>
//               <Card.Text>Available: {faculty.available ? 'Yes' : 'No'}</Card.Text>
//               {/* <Card.Text>Topic: {faculty.topicId ? faculty.topicId.title : 'No Topic Assigned'}</Card.Text> */}
//               <Button variant="primary">Book Appointment</Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faculties;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Faculties = () => {
//   const [faculties, setFaculties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login state
//   const navigate = useNavigate();  // For programmatic navigation

//   useEffect(() => {
//     // Check if the user is logged in
//     const userLoggedIn = localStorage.getItem('isLoggedIn'); // Example: Check localStorage or context for login status
//     if (userLoggedIn === 'true') {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }

//     axios.get('http://localhost:5000/api/faculties')
//       .then((response) => {
//         setFaculties(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError('Error fetching faculties');
//         setLoading(false);
//       });
//   }, []);

//   const handleBookAppointment = () => {
//     if (!isLoggedIn) {
//       alert("You need to log in first before booking an appointment.");
//       navigate("/login"); // Redirect to login page
//     } else {
//       navigate("/appointments"); // Redirect to appointments page if logged in
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (!faculties.length) {
//     return <p>No faculties available.</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Our Counselors</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {faculties.map((faculty) => (
//           <Card key={faculty._id} className="shadow-lg p-3 mb-5 bg-white rounded">
//             <Card.Body>
//               <Card.Title>{faculty.name}</Card.Title>
//               <Card.Subtitle className="mb-2 text-muted">{faculty.specialization}</Card.Subtitle>
//               <Card.Text>Contact: {faculty.contactInfo}</Card.Text>
//               <Card.Text>Available: {faculty.available ? 'Yes' : 'No'}</Card.Text>
//               {/* Book Appointment Button */}
//               <Button variant="primary" onClick={handleBookAppointment}>Book Appointment</Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Faculties;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx'; // Import useAuth hook to access the AuthContext
import 'bootstrap/dist/css/bootstrap.min.css';

const Faculties = () => {
  const [faculties, setFaculties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();  // Consume isAuthenticated from AuthContext

  useEffect(() => {
    axios.get('http://localhost:5000/api/faculties')
      .then((response) => {
        setFaculties(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching faculties');
        setLoading(false);
      });
  }, []);

  const handleBookAppointment = () => {
    if (!isAuthenticated) {  // Use isAuthenticated from context
      alert("You need to log in first before booking an appointment.");
      navigate("/login"); // Redirect to login page if not authenticated
    } else {
      navigate("/appointments"); // Redirect to appointments page if logged in
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!faculties.length) {
    return <p>No faculties available.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Our Counselors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {faculties.map((faculty) => (
          <Card key={faculty._id} className="shadow-lg p-3 mb-5 bg-white rounded">
            <Card.Body>
              <Card.Title>{faculty.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{faculty.specialization}</Card.Subtitle>
              <Card.Text>Contact: {faculty.contactInfo}</Card.Text>
              <Card.Text>Available: {faculty.available ? 'Yes' : 'No'}</Card.Text>
              {/* Book Appointment Button */}
              <Button variant="primary" onClick={handleBookAppointment}>Book Appointment</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Faculties;
