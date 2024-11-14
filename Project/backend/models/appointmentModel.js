import mongoose from "mongoose";

// Import the User and Faculty models
import User from './userModel';
import Faculty from './facultyModel';

const AppointmentSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Refers to User model
  facultyId: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty", required: true }, // Refers to Faculty model
  date: { type: String, required: true },  
  time: { type: String, required: true }   
});

export default mongoose.model("Appointment", AppointmentSchema);

