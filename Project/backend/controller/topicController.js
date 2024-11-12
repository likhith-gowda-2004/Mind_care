// // import Topic from '../models/topicModel.js';
// // import Video from '../models/videoModel.js';
// // import Assessment from '../models/assessmentModel.js';
// // import Blog from '../models/blogModel.js';
// // import Faculty from '../models/facultyModel.js';

// // // Get all topics
// // export const getAllTopics = async (req, res) => {
// //     try {
// //         const topics = await Topic.find().populate('assessments videos Blog faculty');
// //         return res.status(200).json({ success: true, topics });
// //     } catch (error) {
// //         console.error('Error fetching topics:', error);
// //         return res.status(500).json({ success: false, message: 'Error fetching topics', error: error.message });
// //     }
// // };

// // // Add content to an existing topic
// // export const addContentToTopic = async (req, res) => {
// //     try {
// //         const { topicId, type, content } = req.body;

// //         // Validate required fields
// //         if (!topicId || !type || !content) {
// //             return res.status(400).json({ success: false, message: "Topic ID, type, and content are required" });
// //         }

// //         // Check if topic exists
// //         const topic = await Topic.findById(topicId);
// //         if (!topic) {
// //             return res.status(404).json({ success: false, message: "Topic not found" });
// //         }

// //         // Initialize new content based on type
// //         let newContent;
// //         switch (type) {
// //             case 'video':
// //                 newContent = new Video(content);
// //                 topic.videos.push(newContent._id);
// //                 break;
// //             case 'assessment':
// //                 newContent = new Assessment(content);
// //                 topic.assessments.push(newContent._id);
// //                 break;
// //             // case 'blog':
// //             //     newContent = new Blog(content);
// //             //     topic.Blog = newContent._id;  // Single blog reference
// //             //     break;
// //             case 'blog':
// //                 // Here we assume content is a string. If you want to keep the title and description, consider
// //                 // updating your schema to reflect that structure or concatenate them into a single string.
// //                 const { title, url, description } = content; // Destructure to get title, url, and description
// //                 newContent = new Blog({
// //                     title: title,
// //                     content: description, // For now using description as the blog content
// //                     topicId: topicId
// //                 });
// //                 topic.blogs.push(newContent._id); // Assuming topic schema has a blogs field for storing blog references
// //                 break;
// //             case 'faculty':
// //                 newContent = new Faculty(content);
// //                 topic.faculty.push(newContent._id);
// //                 break;
// //             default:
// //                 return res.status(400).json({ success: false, message: "Unsupported content type. Valid types are: video, assessment, blog, faculty." });
// //         }

// //         // Save new content and update the topic
// //         await newContent.save();
// //         await topic.save();

// //         res.status(201).json({ success: true, data: newContent, message: "Content added successfully to the topic" });
// //     } catch (error) {
// //         console.error("Error adding content to topic:", error);
// //         res.status(500).json({ success: false, message: "An error occurred while adding content to the topic", error: error.message });
// //     }
// // };

// // // Add a new topic
// // export const addNewTopic = async (req, res) => {
// //     try {
// //         const { title, description } = req.body;

// //         // Validate required fields
// //         if (!title || !description) {
// //             return res.status(400).json({ success: false, message: 'Title and description are required.' });
// //         }

// //         // Create and save a new topic
// //         const newTopic = new Topic({ title, description });
// //         await newTopic.save();

// //         res.status(201).json({ success: true, message: 'Topic added successfully.', topic: newTopic });
// //     } catch (error) {
// //         console.error("Error adding new topic:", error);
// //         res.status(500).json({ success: false, message: 'Error adding topic.', error: error.message });
// //     }
// // };

// // // Delete a topic by ID
// // export const deleteTopic = async (req, res) => {
// //     try {
// //         const { id: topicId } = req.params;

// //         // Check if the topic exists
// //         const topic = await Topic.findById(topicId);
// //         if (!topic) {
// //             return res.status(404).json({ success: false, message: 'Topic not found.' });
// //         }

// //         await Topic.findByIdAndDelete(topicId);
// //         res.status(200).json({ success: true, message: 'Topic deleted successfully.' });
// //     } catch (error) {
// //         console.error("Error deleting topic:", error);
// //         res.status(500).json({ success: false, message: 'Error deleting topic.', error: error.message });
// //     }
// // };

// import Topic from '../models/topicModel.js';
// import Video from '../models/videoModel.js';
// import Assessment from '../models/assessmentModel.js';
// import Blog from '../models/blogModel.js';
// import Faculty from '../models/facultyModel.js';

// // Get all topics
// export const getAllTopics = async (req, res) => {
//     try {
//         const topics = await Topic.find().populate('assessments videos blogs faculty'); // Corrected to include blogs
//         return res.status(200).json({ success: true, topics });
//     } catch (error) {
//         console.error('Error fetching topics:', error);
//         return res.status(500).json({ success: false, message: 'Error fetching topics', error: error.message });
//     }
// };

// // Add content to an existing topic
// export const addContentToTopic = async (req, res) => {
//     try {
//         const { topicId, type, content } = req.body;

//         // Validate required fields
//         if (!topicId || !type || !content) {
//             return res.status(400).json({ success: false, message: "Topic ID, type, and content are required" });
//         }

//         // Check if topic exists
//         const topic = await Topic.findById(topicId);
//         if (!topic) {
//             return res.status(404).json({ success: false, message: "Topic not found" });
//         }

//         // Initialize new content based on type
//         let newContent;
//         switch (type) {
//             case 'video':
//                 newContent = new Video(content);
//                 topic.videos.push(newContent._id);
//                 break;
//             case 'assessment':
//                 newContent = new Assessment(content);
//                 topic.assessments.push(newContent._id);
//                 break;
//             case 'blog':
//                 newContent = new Blog(content);
//                 topic.blogs.push(newContent._id);
//                 break;
//             case 'faculty':
//                 newContent = new Faculty(content);
//                 topic.faculty.push(newContent._id);
//                 break;
//             default:
//                 return res.status(400).json({ success: false, message: "Unsupported content type. Valid types are: video, assessment, blog, faculty." });
//         }

//         // Save the topic after updating it with the new content
//         await topic.save();

//         res.status(201).json({ success: true, data: newContent, message: "Content added successfully to the topic" });
//     } catch (error) {
//         console.error("Error adding content to topic:", error);
//         res.status(500).json({ success: false, message: "An error occurred while adding content to the topic", error: error.message });
//     }
// };

// // Add a new topic
// export const addNewTopic = async (req, res) => {
//     try {
//         const { title, description } = req.body;

//         // Validate required fields
//         if (!title || !description) {
//             return res.status(400).json({ success: false, message: 'Title and description are required.' });
//         }

//         // Create and save a new topic
//         const newTopic = new Topic({ title, description });
//         await newTopic.save();

//         res.status(201).json({ success: true, message: 'Topic added successfully.', topic: newTopic });
//     } catch (error) {
//         console.error("Error adding new topic:", error);
//         res.status(500).json({ success: false, message: 'Error adding topic.', error: error.message });
//     }
// };

// // Delete a topic by ID
// export const deleteTopic = async (req, res) => {
//     try {
//         const { id: topicId } = req.params;

//         // Check if the topic exists
//         const topic = await Topic.findById(topicId);
//         if (!topic) {
//             return res.status(404).json({ success: false, message: 'Topic not found.' });
//         }

//         await Topic.findByIdAndDelete(topicId);
//         res.status(200).json({ success: true, message: 'Topic deleted successfully.' });
//     } catch (error) {
//         console.error("Error deleting topic:", error);
//         res.status(500).json({ success: false, message: 'Error deleting topic.', error: error.message });
//     }
// };

import Topic from '../models/topicModel.js';
import Video from '../models/videoModel.js';
import Assessment from '../models/assessmentModel.js';
import Blog from '../models/blogModel.js';
import Faculty from '../models/facultyModel.js';

// Get all topics with populated references
export const getAllTopics = async (req, res) => {
    try {
        const topics = await Topic.find().populate('assessments videos blogs faculty');
        return res.status(200).json({ success: true, topics });
    } catch (error) {
        console.error('Error fetching topics:', error);
        return res.status(500).json({ success: false, message: 'Error fetching topics', error: error.message });
    }
};

// Fetch a specific topic by ID with populated content
export const getTopicById = async (req, res) => {
    try {
        const { id: topicId } = req.params;

        // Find topic by ID and populate related collections
        const topic = await Topic.findById(topicId).populate('assessments videos blogs faculty');
        
        if (!topic) {
            return res.status(404).json({ success: false, message: "Topic not found." });
        }

        res.status(200).json({ success: true, topic });
    } catch (error) {
        console.error("Error fetching topic by ID:", error);
        res.status(500).json({ success: false, message: "Error fetching topic", error: error.message });
    }
};


// Add content to an existing topic
export const addContentToTopic = async (req, res) => {
    try {
        const { topicId, type, content } = req.body;

        // Validate required fields
        if (!topicId || !type || !content) {
            return res.status(400).json({ success: false, message: "Topic ID, type, and content are required." });
        }

        // Check if topic exists
        const topic = await Topic.findById(topicId);
        if (!topic) {
            return res.status(404).json({ success: false, message: "Topic not found." });
        }

        // Initialize new content based on type and save it to its respective collection
        let newContent;
        switch (type) {
            case 'video':
                newContent = await new Video(content).save();
                topic.videos.push(newContent._id);
                break;
            case 'assessment':
                newContent = await new Assessment(content).save();
                topic.assessments.push(newContent._id);
                break;
            case 'blog':
                newContent = await new Blog(content).save();
                topic.blogs.push(newContent._id);
                break;
            case 'faculty':
                newContent = await new Faculty(content).save();
                topic.faculty.push(newContent._id);
                break;
            default:
                return res.status(400).json({ success: false, message: "Unsupported content type. Valid types are: video, assessment, blog, faculty." });
        }

        // Save the topic after updating it with the new content reference
        await topic.save();

        // Return the newly added content along with the updated topic
        const updatedTopic = await Topic.findById(topicId).populate('assessments videos blogs faculty');
        res.status(201).json({ success: true, data: newContent, topic: updatedTopic, message: "Content added successfully to the topic." });
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
