import { Router } from 'express';
import { createUser } from '../controllers/UserController';
import validate from '../utils/middleware/zod/zodMiddleware';
import { createUserSchema } from '../utils/zodSchema/zodUserSchema';

const router = Router();

router.post('/', validate(createUserSchema), createUser);

export default router;
