import express from 'express';
import { upload, uploadPdf , updatePdf, deletePdf, getPdf} from '../controllers/univerities-prices-pdf.controller.js';

const router = express.Router();

router.post('/upload', upload.single('pdfFile'), uploadPdf);
router.get('/get', getPdf); 
router.put('/update/:id',upload.single('pdfFile'),updatePdf);
router.delete('/delete/:id', deletePdf);
export default router;
