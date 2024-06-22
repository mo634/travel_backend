import express from 'express';
import { createService, getAllServices,deleteService } from '../controllers/our-services.controller.js';

const router = express.Router();

// Define the routes
router.post('/create', createService);
router.get('/getAllServices', getAllServices);
router.delete('/delete/:id', deleteService);

export default router;