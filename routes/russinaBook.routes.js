import express from 'express';
import {  uploadPdf, updatePdf, deletePdf, getPdf } from '../controllers/russinaBook.controller.js'; // Adjust the path as necessary

const router = express.Router();

router.post('/upload', uploadPdf);
router.put('/update/:id', updatePdf);
router.delete('/delete/:id', deletePdf);
router.get('/get', getPdf);

export default router;
