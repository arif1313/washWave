import express /* { Request, Response } */ from 'express';
import { bookingControlers } from './Booking.controler';

import { zodBookingValidations } from './Booking.validation';
import { ZodValidationMiddelware } from '../Middelwares/zodValidation';

const Router = express.Router();

Router.post(
  '/create-booking',
  ZodValidationMiddelware(zodBookingValidations.TBookingValidationSchema),
  bookingControlers.createBooking,
);

export const bookingRouter = Router;
