import express from 'express';
import { signnin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup);
router.post('/signin',signnin);

export default router;