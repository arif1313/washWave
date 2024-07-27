import { NextFunction, Request, Response } from 'express';
import { TBookingValidationSchema } from './Booking.validation';
import { bookingService } from './Booking.service';

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
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const bookingControlers = {
  createBooking,
};
