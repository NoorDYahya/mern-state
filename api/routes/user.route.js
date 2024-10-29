import express from 'express';
import {test ,updateUser ,deleteUser ,getUserListing} from '../controllers/user.controllers.js';
import { verifyToken } from '../utils/verifyUser.js';



const router = express.Router();

router.get('/test',test );
router.post('/update/:id',verifyToken, updateUser);
router.delete('/delete/:id',verifyToken, deleteUser);
router.get('/listings/:id',verifyToken,getUserListing);
export default router; 
