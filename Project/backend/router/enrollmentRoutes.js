import express from 'express';
import { enrollInTopic, getEnrollmentsByUser ,unenrollFromTopic} from '../controller/enrollmentController.js';

const router = express.Router();

router.post('/enroll', enrollInTopic);
router.get('/user/:userId', getEnrollmentsByUser);
router.post('/unenroll', unenrollFromTopic);

export default router;