import express from 'express';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.userLoginValidationSchema),
  AuthController.loginUser,
);
export const AuthRoutes = router;
