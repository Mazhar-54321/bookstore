import express from 'express';
import * as UserController from '../controllers/user.controller.js'
const router = express.Router();

router.post('/login',UserController.getUser);
router.post('/register',UserController.addUser);

export default router;