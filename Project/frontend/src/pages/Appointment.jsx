import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, ListGroup, Container, Spinner, Alert } from 'react-bootstrap';
import 'tailwindcss/tailwind.css';

const Appointment = () => {
  const { facultyId } = useParams();
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacultyDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/faculties/${facultyId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch faculty details');
        }
        const data = await response.json();
        setFaculty(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyDetails();
  }, [facultyId]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );

  if (error) return <Alert variant="danger" className="text-center">{error}</Alert>;

  return (
    <Container className="mt-4 flex justify-center">
      {faculty ? (
        <Card className="shadow-lg p-4 max-w-lg w-full rounded-lg border-0">
          <div className="flex items-center">
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/featured/?person,doctor"
              alt={`${faculty.name}`}
              className="rounded-full w-28 h-28 object-cover mr-4"
            />
            <div className="flex flex-col">
              <Card.Title className="text-2xl font-semibold mb-1 text-gray-800">
                {faculty.name}
              </Card.Title>
              <Card.Text className="text-md font-medium text-gray-600 mb-1">
                <strong>Specialization:</strong> {faculty.specialization}
              </Card.Text>
              <Card.Text className="text-sm text-gray-500">
                <i className="fas fa-phone-alt mr-1"></i>{faculty.contactInfo}
              </Card.Text>
            </div>
          </div>

          <hr className="my-4" />

          <ListGroup variant="flush" className="mb-3">
            <ListGroup.Item className="text-lg font-semibold text-gray-700 bg-light">
              Available Slots:
            </ListGroup.Item>
            {faculty.availableSlots && faculty.availableSlots.length > 0 ? (
              faculty.availableSlots.map((slot) => (
                <ListGroup.Item key={slot._id} className="flex justify-between items-center py-2 bg-white border-0">
                  <div className="text-gray-700 text-sm">
                    <i className="fas fa-calendar-alt mr-2"></i>{slot.date} - {slot.times}
                  </div>
                  <Button variant="primary" className="px-3 py-1 text-sm">
                    Book Now
                  </Button>
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item className="text-gray-500 bg-light">No available slots at the moment.</ListGroup.Item>
            )}
          </ListGroup>
        </Card>
      ) : (
        <Alert variant="warning" className="text-center">Faculty details not found.</Alert>
      )}
    </Container>
  );
};

export default Appointment;
