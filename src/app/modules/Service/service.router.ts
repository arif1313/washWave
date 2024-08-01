import express /* { Request, Response } */ from 'express';
import { serviceControlers } from './sevice.controler';

import { zodServiceValidations } from './service.validation';
import { ZodValidationMiddelware } from '../Middelwares/zodValidation';
import { AuthValidationMiddelware } from '../Middelwares/AuthMiddleware';
import { UserRole } from '../User/user.const';
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
Router.delete('/:id', serviceControlers.DeleteService);
export const serviceRouter = Router;
