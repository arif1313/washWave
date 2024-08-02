/* eslint-disable @typescript-eslint/no-explicit-any */
import SlotModel from '../Slot/Slot.model';
import BookingModel from './Booking.model';

const createBookingInDb = async (Booking: any, customerId: string) => {
  const {
    serviceId,
    slotId,
    vehicleType,
    vehicleBrand,
    vehicleModel,
    manufacturingYear,
    registrationPlate,
  } = Booking;
  const booking = new BookingModel({
    customer: customerId,
    service: serviceId,
    slot: slotId,
    vehicleType,
    vehicleBrand,
    vehicleModel,
    manufacturingYear,
    registrationPlate,
  });

  const bookedSlot = await SlotModel.findByIdAndUpdate(
    { _id: slotId },
    { isBooked: 'booked' },
    { new: true },
  );

  const newBooking = await (
    await (
      await (await BookingModel.create(booking)).populate('customer')
    ).populate('service')
  ).populate('slot');
  const secondnewbooking: any = newBooking.toObject();

  secondnewbooking.slot = bookedSlot;
  return secondnewbooking;
};

export const bookingService = {
  createBookingInDb,
};
