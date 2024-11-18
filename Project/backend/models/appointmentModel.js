// import mongoose from "mongoose";

// // Import the User and Faculty models
// import User from './userModel';
// import Faculty from './facultyModel';

// const AppointmentSchema = new mongoose.Schema({
//   studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Refers to User model
//   facultyId: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty", required: true }, // Refers to Faculty model
//   date: { type: String, required: true },  
//   time: { type: String, required: true }   
// });

// export default mongoose.model("Appointment", AppointmentSchema);

import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  studentId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  facultyId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Faculty", 
    required: true 
  },
  date: { 
    type: Date, 
    required: true 
  },
  timeSlot: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  reason: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model("Appointment", AppointmentSchema);