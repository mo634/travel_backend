import express from 'express';
import {
    createCommonQuesion,
    getAllCommonQuesions,
    getCommonQuesionById,
    updateCommonQuesionById,
    deleteCommonQuesionById
} from '../controllers/common-quesions.controller.js'; 

const router = express.Router();

router.post('/create', createCommonQuesion);

router.get('/getAll', getAllCommonQuesions);

router.get('/getById/:id', getCommonQuesionById);

router.put('/update/:id', updateCommonQuesionById);

router.delete('/delete/:id', deleteCommonQuesionById);


export default router;
