// import mongoose from "mongoose";

// const FacultySchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   specialization: { type: String },
//   contactInfo: { type: String },
//   available: { type: Boolean, default: true },
//  topicId: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" }
// });

// export default mongoose.model("Faculty", FacultySchema);

import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String },
  contactInfo: { type: String },
  available: { type: Boolean, default: true },
  topicId: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" },
  availableSlots: [{
    date: { type: String, required: true },  // Format: 'YYYY-MM-DD'
    times: [{ type: String, required: true }]  // Array of available times in format 'HH:MM'
  }]
});

export default mongoose.model("Faculty", FacultySchema);