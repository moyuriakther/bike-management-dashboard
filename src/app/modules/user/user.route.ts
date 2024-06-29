import express from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middleware/validateRequest';
import { userValidationSchema } from './user.validation';
import auth from '../../middleware/auth';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(userValidationSchema.createUserValidationSchema),
  UserControllers.createUser,
);
router.get('/', auth(), UserControllers.allUsers);

export const UserRoutes = router;
