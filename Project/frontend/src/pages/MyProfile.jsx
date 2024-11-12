import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyProfile = () => {
  // Destructure userData from the AuthContext
  const { userData } = useAuth();

  // Handle cases where userData is not yet loaded (e.g., initial render or logged-out state)
  if (!userData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-gray-700 text-lg">Loading user information or please log in...</div>
      </div>
    );
  }

  return (
    <Container className="py-5">
      <Card className="shadow-lg border-0">
        <Card.Header className="bg-primary text-white text-center text-2xl font-bold">
          User Profile
        </Card.Header>
        <Card.Body>
          <Row className="p-4">
            <Col md={6} className="mb-4">
              <p className="text-lg font-semibold">
                <span className="text-primary">Name:</span> {`${userData.firstName} ${userData.lastName}`}
              </p>
              <p className="text-lg font-semibold">
                <span className="text-primary">SRN:</span> {userData.srn}
              </p>
              <p className="text-lg font-semibold">
                <span className="text-primary">Email:</span> {userData.email}
              </p>
            </Col>
            <Col md={6} className="mb-4">
              <p className="text-lg font-semibold">
                <span className="text-primary">Phone Number:</span> {userData.phoneNumber}
              </p>
              <p className="text-lg font-semibold">
                <span className="text-primary">Gender:</span> {userData.gender}
              </p>
              <p className="text-lg font-semibold">
                <span className="text-primary">Date of Birth:</span> {new Date(userData.dateOfBirth).toLocaleDateString()}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MyProfile;
