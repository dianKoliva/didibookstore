import express from 'express';
import UserController from '../controllers/UserController.js';

const router = express.Router();

router.post('/', UserController.createUser);
router.post('/login', UserController.login);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;
