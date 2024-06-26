import express from 'express';
import { upload, uploadPdf, updatePdf, deletePdf, getPdf } from '../controllers/russinaBook.controller.js'; // Adjust the path as necessary

const router = express.Router();

router.post('/upload', upload.single('pdf'), uploadPdf);
router.put('/update/:id', upload.single('pdf'), updatePdf);
router.delete('/delete/:id', deletePdf);
router.get('/get', getPdf);

export default router;
