import express from 'express';
import { getAllUser, getUserProfile, loginUser, logoutUser, registerUser } from '../controllers/userController.js';
import { isAuthenticate } from '../middlewares/auth.js';

const router=express.Router();

router.post('/login',loginUser);
router.post('/register',registerUser);
router.get('/logout',logoutUser);
router.get('/me',isAuthenticate,getUserProfile);
router.get('/all-user',getAllUser);

export default router;