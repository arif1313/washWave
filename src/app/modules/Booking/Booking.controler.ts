import { NextFunction, Request, Response } from 'express';
import { TBookingValidationSchema } from './Booking.validation';
import { bookingService } from './Booking.service';
import ResponceFunction from '../../utils/sendResponce';
import httpStatus from 'http-status';

// import { error } from 'console';

const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const bookingData = req.body;
    const zodParseBookingData = TBookingValidationSchema.parse(bookingData);
    const result = await bookingService.createBookingInDb(zodParseBookingData);
    ResponceFunction(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created success',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const bookingControlers = {
  createBooking,
};
