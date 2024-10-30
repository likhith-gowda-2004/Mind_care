import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assessments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Assessment" }],
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
  Blog: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
  faculty: [{ type: mongoose.Schema.Types.ObjectId, ref: "Faculty" }]
});

export default mongoose.model("Topic", TopicSchema);
