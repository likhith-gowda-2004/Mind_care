import express from 'express';
import {
    getAllAppointments,
    updateAppointmentStatus,
    deleteAppointment,
    getAppointmentStats
} from '../controller/appointmentController.js';

const router = express.Router();

// Admin routes
router.get('/all', getAllAppointments);
router.get('/stats', getAppointmentStats);
router.put('/:id', updateAppointmentStatus);
router.delete('/:id', deleteAppointment);

export default router;