import { TBooking } from './Booking.interface';
import BookingModel from './Booking.model';

const createBookingInDb = async (Booking: TBooking) => {
  const newBooking = await BookingModel.create(Booking);

  return newBooking;
};

export const bookingService = {
  createBookingInDb,
};
