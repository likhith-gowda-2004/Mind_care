// // adminController.js
// import Topic from '../models/topicModel.js'; // Ensure you include .js extension

// // Add a new topic
// export const addTopic = async (req, res) => {
//     try {
//         const topic = await Topic.create(req.body);
//         res.status(201).json({ success: true, topic });
//     } catch (error) {
//         res.status(400).json({ success: false, error: error.message });
//     }
// };

// // Update an existing topic
// export const updateTopic = async (req, res) => {
//     try {
//         const topic = await Topic.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!topic) {
//             return res.status(404).json({ success: false, message: 'Topic not found' });
//         }
//         res.status(200).json({ success: true, topic });
//     } catch (error) {
//         res.status(400).json({ success: false, error: error.message });
//     }
// };

// // Delete a topic
// export const deleteTopic = async (req, res) => {
//     try {
//         const topic = await Topic.findByIdAndDelete(req.params.id);
//         if (!topic) {
//             return res.status(404).json({ success: false, message: 'Topic not found' });
//         }
//         res.status(200).json({ success: true, message: 'Topic deleted' });
//     } catch (error) {
//         res.status(400).json({ success: false, error: error.message });
//     }
// };

// // Get all topics
// export const getAllTopics = async (req, res) => {
//     try {
//         const topics = await Topic.find();
//         res.status(200).json({ success: true, topics });
//     } catch (error) {
//         res.status(400).json({ success: false, error: error.message });
//     }
// };
