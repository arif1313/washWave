import express /* { Request, Response } */ from 'express';
import { serviceControlers } from './sevice.controler';

import { zodServiceValidations } from './service.validation';
import { ZodValidationMiddelware } from '../Middelwares/zodValidation';
import { AuthValidationMiddelware } from '../Middelwares/AuthMiddleware';
import { UserRole } from '../User/user.const';
import { slodControlers } from '../Slot/Slot.control';
import { ZodSoldValidations } from '../Slot/Slot.validation';
const Router = express.Router();
Router.post(
  '/',
  AuthValidationMiddelware(UserRole?.admin),
  ZodValidationMiddelware(zodServiceValidations.TServiceValidationSchema),
  serviceControlers.createService,
);
Router.get('/:id', serviceControlers.getService);
Router.get('/', serviceControlers.getService);
Router.put(
  '/:id',
  AuthValidationMiddelware(UserRole?.admin),
  serviceControlers.updateService,
);
Router.delete(
  '/:id',
  AuthValidationMiddelware(UserRole.admin),
  serviceControlers.DeleteService,
);
Router.post(
  '/slots',
  AuthValidationMiddelware(UserRole.admin),
  ZodValidationMiddelware(ZodSoldValidations.TSlodValidationSchema),
  slodControlers.createSlod,
);

export const serviceRouter = Router;
