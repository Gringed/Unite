import express from 'express';
import { signin, signup, getUser, followUser, getUsers, updatedProfile } from '../controllers/user.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/signin', signin)
router.post('/signup', signup)

router.get('/:id', getUser)
router.get('/', getUsers)

router.patch('/:id/followUser', auth, followUser)
router.patch('/:id', auth, updatedProfile)


export default router;