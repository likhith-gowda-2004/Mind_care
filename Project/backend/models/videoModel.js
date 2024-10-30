import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String },
  duration: { type: Number },
  topicId: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" }
});

export default mongoose.model("Video", VideoSchema);
