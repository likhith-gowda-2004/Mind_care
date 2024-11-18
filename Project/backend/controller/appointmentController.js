import Appointment from '../models/appointmentModel.js';
import Faculty from '../models/facultyModel.js';
import User from '../models/userModel.js';

// Create new appointment
export const createAppointment = async (req, res) => {
  try {
    const { studentId, facultyId, date, timeSlot, reason } = req.body;

    // Validate faculty availability
    const faculty = await Faculty.findById(facultyId);
    if (!faculty) {
      return res.status(404).json({ success: false, message: 'Faculty not found' });
    }

    // Check if slot is available
    const existingAppointment = await Appointment.findOne({
      facultyId,
      date,
      timeSlot,
      status: { $ne: 'cancelled' }
    });

    if (existingAppointment) {
      return res.status(400).json({ 
        success: false, 
        message: 'This time slot is already booked' 
      });
    }

    // Create appointment
    const appointment = await Appointment.create({
      studentId,
      facultyId,
      date,
      timeSlot,
      reason
    });

    res.status(201).json({
      success: true,
      appointment,
      message: 'Appointment booked successfully'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error booking appointment',
      error: error.message
    });
  }
};

// Get appointments for a student
export const getStudentAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ studentId: req.params.studentId })
      .populate('facultyId', 'name specialization')
      .sort({ date: 1 });

    res.status(200).json({
      success: true,
      appointments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching appointments',
      error: error.message
    });
  }
};

// Get appointments for admin
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate('studentId', 'firstName lastName email')
      .populate('facultyId', 'name specialization')
      .sort({ date: -1 });

    res.status(200).json({
      success: true,
      appointments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching appointments',
      error: error.message
    });
  }
};

// Update appointment status
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found'
      });
    }

    res.status(200).json({
      success: true,
      appointment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating appointment',
      error: error.message
    });
  }
};
// backend/controller/appointmentController.js
export const getAppointmentStats = async (req, res) => {
  try {
      const stats = await Appointment.aggregate([
          {
              $group: {
                  _id: "$status",
                  count: { $sum: 1 }
              }
          }
      ]);
      
      res.status(200).json({
          success: true,
          stats: stats.reduce((acc, curr) => {
              acc[curr._id] = curr.count;
              return acc;
          }, {})
      });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: 'Error fetching appointment statistics',
          error: error.message
      });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
      const appointment = await Appointment.findByIdAndDelete(req.params.id);
      
      if (!appointment) {
          return res.status(404).json({
              success: false,
              message: 'Appointment not found'
          });
      }

      res.status(200).json({
          success: true,
          message: 'Appointment deleted successfully'
      });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: 'Error deleting appointment',
          error: error.message
      });
  }
};