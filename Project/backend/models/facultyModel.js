import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String },
  contactInfo: { type: String },
  available: { type: Boolean, default: true }
});

export default mongoose.model("Faculty", FacultySchema);
