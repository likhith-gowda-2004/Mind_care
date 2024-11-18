import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import './MyAppointments.css';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userData } = useAuth();

  // Fetch appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/appointments/student/${userData._id}`
        );
        setAppointments(response.data.appointments);
      } catch (err) {
        setError('Failed to fetch appointments. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userData._id]);

  // Cancel appointment
  const handleCancel = async (appointmentId) => {
    try {
      await axios.delete(`http://localhost:5000/api/appointments/${appointmentId}`);
      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment._id !== appointmentId)
      );
      alert('Appointment canceled successfully.');
    } catch (err) {
      alert('Failed to cancel the appointment. Please try again.');
    }
  };

  if (loading)
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        <div>Loading appointments...</div>
      </div>
    );

  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">My Appointments</h2>
      <Row>
        {appointments.length === 0 ? (
          <Col>
            <Alert variant="info" className="text-center">
              No appointments found.
            </Alert>
          </Col>
        ) : (
          appointments.map((appointment) => (
            <Col key={appointment._id} md={6} lg={4} className="mb-4">
              <Card className="appointment-card h-100">
                <Card.Body>
                  <Card.Title>{appointment.facultyId.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {appointment.facultyId.specialization}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}
                    <br />
                    <strong>Time:</strong> {appointment.timeSlot}
                    <br />
                    <strong>Status:</strong>{' '}
                    <span className={`status-${appointment.status}`}>
                      {appointment.status}
                    </span>
                  </Card.Text>
                  {appointment.status === 'pending' && (
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleCancel(appointment._id)}
                    >
                      Cancel Appointment
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default MyAppointments;
