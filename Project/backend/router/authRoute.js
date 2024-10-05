import express from "express";
import { signup, login } from "../controller/authController.js"; // Ensure you're importing correctly

const router = express.Router();

router.post('/signup', signup); // Ensure this is using POST
router.post('/login', login);

export default router; // Use ES module export
