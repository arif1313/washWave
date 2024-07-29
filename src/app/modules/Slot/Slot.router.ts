import express from 'express';
import { slodControlers } from './Slot.control';

import { ZodSoldValidations } from './Slot.validation';

import { ZodValidationMiddelware } from '../Middelwares/zodValidation';

const Router = express.Router();

Router.post(
  '/create-slod',
  ZodValidationMiddelware(ZodSoldValidations.TSlodValidationSchema),
  slodControlers.createSlod,
);

export const slodRouter = Router;
