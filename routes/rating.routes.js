import express from 'express';
import { createRating, getAllRatings } from '../controllers/rating.controller.js'; // Adjust the path as necessary

const router = express.Router();

router.post('/create', createRating);
router.get('/getAll', getAllRatings);

export default router;
