/* eslint-disable @typescript-eslint/no-unused-vars */
import { TBookingValidationSchema } from './Booking.validation';
import { bookingService } from './Booking.service';
import ResponceFunction from '../../utils/sendResponce';
import httpStatus from 'http-status';
import { catchErrFunction } from '../User/user.controler';

// import { error } from 'console';

const createBooking = catchErrFunction(async (req, res, next) => {
  const bookingData = req.body;
  const zodParseBookingData = TBookingValidationSchema.parse(bookingData);
  const result = await bookingService.createBookingInDb(zodParseBookingData);
  ResponceFunction(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created success',
    data: result,
  });
});
export const bookingControlers = {
  createBooking,
};
