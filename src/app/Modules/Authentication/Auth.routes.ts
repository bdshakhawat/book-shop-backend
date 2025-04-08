import { Router } from 'express';
import { AuthControllers } from './Auth.controller';

const router = Router();

router.post('/login', AuthControllers.LoginUser);

export const AuthRoutes = router;
