/* eslint-disable @typescript-eslint/no-unused-vars */

import { bookingService } from './Booking.service';
import ResponceFunction from '../../utils/sendResponce';
import httpStatus from 'http-status';
import { catchErrFunction } from '../../utils/catchAsync';

const createBooking = catchErrFunction(async (req, res, next) => {
  const bookingData = req.body;
  const result = await bookingService.createBookingInDb(bookingData);
  ResponceFunction(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking created success',
    data: result,
  });
});
export const bookingControlers = {
  createBooking,
};
