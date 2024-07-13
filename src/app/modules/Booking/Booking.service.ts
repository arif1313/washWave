import { TBooking } from './Booking.interface';
import BookingModel from './Booking.model';

const createBookingInDb = async () => {
  const bookingData: Partial<TBooking> = {};

  const newBooking = await BookingModel.create(bookingData);

  return newBooking;
};

export const bookingService = {
  createBookingInDb,
};
