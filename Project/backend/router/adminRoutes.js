import express from 'express';
import {
    getAllTopics,
    addNewTopic,
    addContentToTopic,
    deleteTopic
} from '../controller/topicController.js';

const router = express.Router();

// Get all topics
router.get('/topics', (req, res) => {
    console.log('GET /api/admin/topics called');
    getAllTopics(req, res);
});

// Add a new topic
router.post('/add-topic', (req, res) => {
    console.log('POST /api/admin/add-topic called');
    addNewTopic(req, res);
});

// Add content to an existing topic
router.post('/add-content', (req, res) => {
    console.log('POST /api/admin/add-content called');
    addContentToTopic(req, res);
});

// Delete a topic by ID
router.delete('/delete-topic/:id', (req, res) => {
    console.log(`DELETE /api/admin/delete-topic/${req.params.id} called`);
    deleteTopic(req, res);
});

export default router;
