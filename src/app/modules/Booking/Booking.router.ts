import express /* { Request, Response } */ from 'express';
import { bookingControlers } from './Booking.controler';

import { AuthValidationMiddelware } from '../Middelwares/AuthMiddleware';
import { UserRole } from '../User/user.const';
import { ZodValidationMiddelware } from '../Middelwares/zodValidation';
import { zodBookingValidations } from './Booking.validation';

const Router = express.Router();

Router.post(
  '/',
  AuthValidationMiddelware(UserRole.user),
  ZodValidationMiddelware(zodBookingValidations.TBookingValidationSchema),
  bookingControlers.createBooking,
);
Router.get(
  '/',
  AuthValidationMiddelware(UserRole.admin),
  bookingControlers.getBookings,
);

export const bookingRouter = Router;
