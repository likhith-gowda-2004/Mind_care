// import express from 'express';
// import {
//     getAllTopics,
//     addNewTopic,
//     addContentToTopic,
//     deleteTopic
// } from '../controller/topicController.js';

// const router = express.Router();

// // Middleware for logging
// const logRequest = (req, res, next) => {
//     console.log(`[${req.method}] ${req.originalUrl} called`);
//     next();
// };

// router.use(logRequest);

// // Get all topics
// router.get('/topics', async (req, res) => {
//     try {
//         await getAllTopics(req, res);
//     } catch (error) {
//         console.error("Error fetching topics:", error);
//         res.status(500).json({ message: "Internal Server Error while fetching topics" });
//     }
// });

// // Add a new topic
// router.post('/add-topic', async (req, res) => {
//     try {
//         await addNewTopic(req, res);
//     } catch (error) {
//         console.error("Error adding new topic:", error);
//         res.status(500).json({ message: "Internal Server Error while adding topic" });
//     }
// });

// // Add content to an existing topic
// router.post('/add-content', async (req, res) => {
//     try {
//         await addContentToTopic(req, res);
//     } catch (error) {
//         console.error("Error adding content:", error);
//         res.status(500).json({ message: "Internal Server Error while adding content" });
//     }
// });

// // Delete a topic by ID
// router.delete('/delete-topic/:id', async (req, res) => {
//     try {
//         await deleteTopic(req, res);
//     } catch (error) {
//         console.error(`Error deleting topic with ID ${req.params.id}:`, error);
//         res.status(500).json({ message: "Internal Server Error while deleting topic" });
//     }
// });

// export default router;
import express from 'express';
import {
    getAllTopics,
    getTopicById,    // Import the new getTopicById function
    addNewTopic,
    addContentToTopic,
    deleteTopic
} from '../controller/topicController.js';

const router = express.Router();

// Middleware for logging
const logRequest = (req, res, next) => {
    console.log(`[${req.method}] ${req.originalUrl} called`);
    next();
};

router.use(logRequest);

// Get all topics
router.get('/topics', async (req, res) => {
    try {
        await getAllTopics(req, res);
    } catch (error) {
        console.error("Error fetching topics:", error);
        res.status(500).json({ message: "Internal Server Error while fetching topics" });
    }
});

// Get a specific topic by ID
router.get('/topics/:id', async (req, res) => {
    try {
        await getTopicById(req, res);
    } catch (error) {
        console.error(`Error fetching topic with ID ${req.params.id}:`, error);
        res.status(500).json({ message: "Internal Server Error while fetching topic" });
    }
});

// Add a new topic
router.post('/add-topic', async (req, res) => {
    try {
        await addNewTopic(req, res);
    } catch (error) {
        console.error("Error adding new topic:", error);
        res.status(500).json({ message: "Internal Server Error while adding topic" });
    }
});

// Add content to an existing topic
router.post('/add-content', async (req, res) => {
    try {
        await addContentToTopic(req, res);
    } catch (error) {
        console.error("Error adding content:", error);
        res.status(500).json({ message: "Internal Server Error while adding content" });
    }
});

// Delete a topic by ID
router.delete('/delete-topic/:id', async (req, res) => {
    try {
        await deleteTopic(req, res);
    } catch (error) {
        console.error(`Error deleting topic with ID ${req.params.id}:`, error);
        res.status(500).json({ message: "Internal Server Error while deleting topic" });
    }
});

export default router;

