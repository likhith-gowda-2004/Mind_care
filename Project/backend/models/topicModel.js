// import mongoose from "mongoose";

// const TopicSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   assessments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Assessment" }],
//   videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
//   blogs: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
//   faculty: [{ type: mongoose.Schema.Types.ObjectId, ref: "Faculty" }]
// });

// export default mongoose.model("Topic", TopicSchema);

import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assessments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Assessment" }],
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
  blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }], // Changed to an array
  faculty: [{ type: mongoose.Schema.Types.ObjectId, ref: "Faculty" }]
});

export default mongoose.model("Topic", TopicSchema);
