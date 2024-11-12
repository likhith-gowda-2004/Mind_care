// import express from 'express';
// import { getAllFaculties } from '../controller/facultyController.js';

// const router = express.Router();

// // Define route to get all faculties
// router.get('/', getAllFaculties); // Root route for faculties

// export default router;

import express from 'express';
import { getAllFaculties, createFaculty, updateFaculty, deleteFaculty } from '../controller/facultyController.js';

const router = express.Router();

// Define routes for CRUD operations
router.get('/', getAllFaculties);
router.post('/', createFaculty);
router.put('/:id', updateFaculty);
router.delete('/:id', deleteFaculty);

export default router;
