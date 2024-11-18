import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema({
  student: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  topic: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Topic", 
    required: true 
  },
  enrolledDate: { 
    type: Date, 
    default: Date.now 
  },
  status: { 
    type: String, 
    enum: ['active', 'completed', 'dropped'],
    default: 'active'
  }
});

// Ensure a student can only enroll once in a topic
EnrollmentSchema.index({ student: 1, topic: 1 }, { unique: true });

export default mongoose.model("Enrollment", EnrollmentSchema);