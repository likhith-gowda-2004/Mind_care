import mongoose from "mongoose";

const AssessmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String }, // e.g., Quiz, Written, etc.
  difficulty: { type: String },
  questions: [{ type: String }],
  topicId: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" }
});

export default mongoose.model("Assessment", AssessmentSchema);
