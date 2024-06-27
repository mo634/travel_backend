import { Router } from 'express';
import { upload, uploadImages, getAllImages, deleteImage } from '../controllers/who-we-are.controller.js';

const router = Router();

router.post('/upload', upload.array('images', 10), uploadImages);
router.get('/getAll', getAllImages);
router.delete('/delete/:id', deleteImage);

export default router;
