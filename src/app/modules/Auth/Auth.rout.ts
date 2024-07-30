import express from 'express';
import { ZodValidationMiddelware } from '../Middelwares/zodValidation';
import { AuthValidation } from './Auth.validation';
import { AuthControlers } from './Auth.controler';

const router = express.Router();
router.post(
  '/login',
  ZodValidationMiddelware(AuthValidation.loginVaidationSchema),
  AuthControlers.LoginUser,
);

export const AuthRouter = router;
