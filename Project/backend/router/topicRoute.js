// topicRoute.js

import express from 'express';
import { addContentToTopic } from '../controller/topicController.js';

const router = express.Router();

router.post('/add-content', addContentToTopic);

export default router;
