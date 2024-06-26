import express from 'express';
import { createLink, getAllLinks, updateLinkById, deleteLinkById } from '../controllers/ourStudents.controller.js'; // Adjust the path as necessary

const router = express.Router();

router.post('/create', createLink);
router.get('/getAll', getAllLinks);
router.put('/update/:id', updateLinkById);
router.delete('/delete/:id', deleteLinkById);

export default router;
