import express from 'express'; // Import statement
const router = express.Router();
// Import the controller functions that handle the actual logic
import * as authController from '../controllers/authController.js'; // Note the .js extension and * as syntax

// --- Registration Routes ---
// POST /api/auth/mentor-register
router.post('/mentor-register', authController.registerMentor);
// POST /api/auth/learner-register
router.post('/learner-register', authController.registerLearner); 

// --- Login Routes ---
// POST /api/auth/mentor-login
router.post('/mentor-login', authController.loginMentor);
// POST /api/auth/learner-login
router.post('/learner-login', authController.loginLearner);

export default router; // Note the export default syntax
