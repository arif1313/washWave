import express /* { Request, Response } */ from 'express';
import { bookingControlers } from './Booking.controler';

import { AuthValidationMiddelware } from '../Middelwares/AuthMiddleware';
import { UserRole } from '../User/user.const';

const Router = express.Router();

Router.post(
  '/',
  AuthValidationMiddelware(UserRole.user),
  // ZodValidationMiddelware(zodBookingValidations.TBookingValidationSchema),
  bookingControlers.createBooking,
);

export const bookingRouter = Router;
