import Topic from '../models/topicModel.js';
import Video from '../models/videoModel.js';
import Assessment from '../models/assessmentModel.js';
import Blog from '../models/blogModel.js';
import Faculty from '../models/facultyModel.js';

// Get all topics
export const getAllTopics = async (req, res) => {
    try {
        const topics = await Topic.find().populate('assessments videos Blog faculty');
        return res.status(200).json({ success: true, topics });
    } catch (error) {
        console.error('Error fetching topics:', error);
        return res.status(500).json({ success: false, message: 'Error fetching topics', error: error.message });
    }
};

// Add content to an existing topic
export const addContentToTopic = async (req, res) => {
    try {
        const { topicId, type, content } = req.body;

        // Validate required fields
        if (!topicId || !type || !content) {
            return res.status(400).json({ success: false, message: "Topic ID, type, and content are required" });
        }

        // Check if topic exists
        const topic = await Topic.findById(topicId);
        if (!topic) {
            return res.status(404).json({ success: false, message: "Topic not found" });
        }

        // Initialize new content based on type
        let newContent;
        switch (type) {
            case 'video':
                newContent = new Video(content);
                topic.videos.push(newContent._id);
                break;
            case 'assessment':
                newContent = new Assessment(content);
                topic.assessments.push(newContent._id);
                break;
            case 'blog':
                newContent = new Blog(content);
                topic.Blog = newContent._id;  // Single blog reference
                break;
            case 'faculty':
                newContent = new Faculty(content);
                topic.faculty.push(newContent._id);
                break;
            default:
                return res.status(400).json({ success: false, message: "Unsupported content type. Valid types are: video, assessment, blog, faculty." });
        }

        // Save new content and update the topic
        await newContent.save();
        await topic.save();

        res.status(201).json({ success: true, data: newContent, message: "Content added successfully to the topic" });
    } catch (error) {
        console.error("Error adding content to topic:", error);
        res.status(500).json({ success: false, message: "An error occurred while adding content to the topic", error: error.message });
    }
};

// Add a new topic
export const addNewTopic = async (req, res) => {
    try {
        const { title, description } = req.body;

        // Validate required fields
        if (!title || !description) {
            return res.status(400).json({ success: false, message: 'Title and description are required.' });
        }

        // Create and save a new topic
        const newTopic = new Topic({ title, description });
        await newTopic.save();

        res.status(201).json({ success: true, message: 'Topic added successfully.', topic: newTopic });
    } catch (error) {
        console.error("Error adding new topic:", error);
        res.status(500).json({ success: false, message: 'Error adding topic.', error: error.message });
    }
};

// Delete a topic by ID
export const deleteTopic = async (req, res) => {
    try {
        const { id: topicId } = req.params;

        // Check if the topic exists
        const topic = await Topic.findById(topicId);
        if (!topic) {
            return res.status(404).json({ success: false, message: 'Topic not found.' });
        }

        await Topic.findByIdAndDelete(topicId);
        res.status(200).json({ success: true, message: 'Topic deleted successfully.' });
    } catch (error) {
        console.error("Error deleting topic:", error);
        res.status(500).json({ success: false, message: 'Error deleting topic.', error: error.message });
    }
};
