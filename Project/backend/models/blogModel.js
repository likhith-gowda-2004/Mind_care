import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  topicId: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" }
});

export default mongoose.model("Blog", BlogSchema);
