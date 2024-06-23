import express from 'express';
import { createDocument, getDocuments, getDocumentById, updateDocument, deleteDocument } from '../controllers/required-documents.controller.js';

const router = express.Router();

router.post('/createDocument', createDocument);
router.get('/getAll', getDocuments);
router.get('/getDocumentById/:id', getDocumentById);
router.put('/updateDocument/:id', updateDocument);
router.delete('/deleteDocument/:id', deleteDocument);

export default router;

