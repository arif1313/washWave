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
const getBookingsInDb = async () => {
  const result = await BookingModel.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'customer',
        foreignField: '_id',
        as: 'customer',
      },
    },
    {
      $lookup: {
        from: 'services',
        localField: 'service',
        foreignField: '_id',
        as: 'service',
      },
    },
    {
      $lookup: {
        from: 'slots',
        localField: 'slot',
        foreignField: '_id',
        as: 'slot',
      },
    },
    {
      $unwind: '$customer',
    },
    {
      $unwind: '$service',
    },
    {
      $unwind: '$slot',
    },
  ]);

  // .find()
  //   .populate('customer')
  //   .populate('service')
  //   .populate({
  //     path: 'slot',
  //     match: { bypassIsBookedFilter: true },
  //   });

  return result;
};
export const bookingService = {
  createBookingInDb,
  getBookingsInDb,
};
