import express /* { Request, Response } */ from 'express';
import { UserControlers } from './user.controler';

import { zodUservalidations } from './user.validation';
import { ZodValidationMiddelware } from '../Middelwares/zodValidation';
const Router = express.Router();
Router.post(
  '/signup',
  ZodValidationMiddelware(zodUservalidations.TUserValidSchema),
  UserControlers.createUser,
);

export const userRouter = Router;
