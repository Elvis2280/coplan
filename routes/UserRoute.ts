import { Router } from 'express';
import { createUser, loginUser } from '../controllers/UserController';
import validate from '../utils/middleware/zod/zodMiddleware';
import {
  createUserSchema,
  loginUserSchema,
} from '../utils/zodSchema/zodUserSchema';

const router = Router();

router.post('/login', validate(loginUserSchema), loginUser);
router.post('/', validate(createUserSchema), createUser);

export default router;
