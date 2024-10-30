// topicController.js

import Topic from '../models/topicModel.js';
import Video from '../models/videoModel.js';
import Assessment from '../models/assessmentModel.js';
import Blog from '../models/blogModel.js';
import Faculty from '../models/facultyModel.js';

export const getAllTopics = async (req, res) => {
    try {
        const topics = await Topic.find();
        return res.status(200).json({ success: true, topics });
    } catch (error) {
        console.error('Error fetching topics:', error);
        return res.status(500).json({ success: false, message: 'Error fetching topics', error: error.message });
    }
};

export const addContentToTopic = async (req, res) => {
    try {
        const { topicId, type, content } = req.body;

        if (!topicId || !type || !content) {
            return res.status(400).json({
                success: false,
                message: "Topic ID, type, and content are required"
            });
        }

        // Determine content type and create the corresponding content object
        let newContent;
        switch (type) {
            case 'video':
                newContent = new Video(content);
                await newContent.save();
                await Topic.findByIdAndUpdate(
                    topicId,
                    { $push: { videos: newContent._id } },
                    { new: true }
                );
                break;
            case 'assessment':
                newContent = new Assessment(content);
                await newContent.save();
                await Topic.findByIdAndUpdate(
                    topicId,
                    { $push: { assessments: newContent._id } },
                    { new: true }
                );
                break;
            case 'blog':
                newContent = new Blog(content);
                await newContent.save();
                await Topic.findByIdAndUpdate(
                    topicId,
                    { Blog: newContent._id },
                    { new: true }
                );
                break;
            case 'faculty':
                newContent = new Faculty(content);
                await newContent.save();
                await Topic.findByIdAndUpdate(
                    topicId,
                    { $push: { faculty: newContent._id } },
                    { new: true }
                );
                break;
            default:
                return res.status(400).json({
                    success: false,
                    message: "Unsupported content type. Please provide a valid type."
                });
        }

        res.status(201).json({
            success: true,
            data: newContent,
            message: "Content added successfully to the topic"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while adding content to the topic",
            error: error.message
        });
    }
};

export const addNewTopic = async (req, res) => {
    try {
        const { title, content, description } = req.body; // Include description

        // Validate required fields
        if (!title || !content || !description) {
            return res.status(400).json({
                success: false,
                message: 'Title, content, and description are required.'
            });
        }

        // Create a new topic instance
        const newTopic = new Topic({ title, content, description }); // Save description

        // Save the new topic to the database
        await newTopic.save();

        res.status(201).json({
            success: true,
            message: 'Topic added successfully.',
            topic: newTopic
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error adding topic.',
            error: error.message
        });
    }
};


export const deleteTopic = async (req, res) => {
    try {
        const topicId = req.params.id;

        // Check if the topic exists before attempting to delete
        const topic = await Topic.findById(topicId);
        if (!topic) {
            return res.status(404).json({ success: false, message: 'Topic not found.' });
        }

        await Topic.findByIdAndDelete(topicId);
        return res.status(200).json({ success: true, message: 'Topic deleted successfully.' });
    } catch (error) {
        console.error('Error deleting topic:', error);
        return res.status(500).json({ success: false, message: 'Error deleting topic.', error: error.message });
    }
};
