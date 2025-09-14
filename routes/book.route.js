import express from 'express';
import * as BookController from '../controllers/book.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('',BookController.getBooks);
router.get('/:id',BookController.getBook)
router.post('', authMiddleware,BookController.addBook);
router.delete('/:id',authMiddleware,BookController.removeBook);
router.put('/:id',authMiddleware,BookController.updateBook);

export default router;