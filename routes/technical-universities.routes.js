import express from 'express';
import { upload, uploadPdf, updatePdf, deletePdf, getPdf } from '../controllers/technical-universities.contorollers.js'

const router = express.Router();

router.post('/upload', upload.single('pdfFile'), uploadPdf);
router.put('/update/:id', upload.single('pdfFile'), updatePdf);
router.delete('/delete/:id', deletePdf);
router.get('/get', getPdf);

export default router;
