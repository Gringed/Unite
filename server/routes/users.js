import express from 'express';
import { signin, signup, followUser } from '../controllers/user.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/signin', signin)
router.post('/signup', signup)

router.patch('/:id/followUser', auth, followUser)


export default router;