import Router from 'express';
import {loginUser, registerUser, validateToken } from '../controllers/authControllers.js';
import { validateJWT } from '../utils/verifyToken.js';

const router = Router();


router.post('/login', loginUser);
router.post('/register',registerUser);
router.get('/validateToken',validateJWT, validateToken) 


export default router