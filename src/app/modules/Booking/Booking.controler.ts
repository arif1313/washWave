import { Request, Response } from 'express';

import { bookingService } from './Booking.service';

const createBooking = async (req: Request, res: Response) => {
  try {
    const result = await bookingService.createBookingInDb();

    res.status(200).json({
      success: true,
      message: 'student created succes',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const bookingControlers = {
  createBooking,
};
