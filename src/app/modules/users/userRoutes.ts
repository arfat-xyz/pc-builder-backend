import { Router } from 'express';
import { UserController } from './userController';

const router = Router();

router.post('/', UserController.createUser);

export const UserRoutes = router;
