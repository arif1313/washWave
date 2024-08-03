/* eslint-disable @typescript-eslint/no-explicit-any */

import SlotModel from '../Slot/Slot.model';
import BookingModel from './Booking.model';
import AppError from '../../Errors/AppError';
import httpStatus from 'http-status';
import mongoose, { Mongoose } from 'mongoose';

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
  const session: mongoose.ClientSession = await mongoose.startSession();
  try {
    session.startTransaction();
    const bookedSlot = await SlotModel.findByIdAndUpdate(
      { _id: slotId },
      { isBooked: 'booked' },
      { new: true, session },
    );
    if (!bookedSlot) {
      throw new AppError(httpStatus.BAD_REQUEST, 'booking faild');
    }

    const newBooking = await BookingModel.create([booking], { session });
    await newBooking[0].populate('customer');
    await newBooking[0].populate('service');
    if (!newBooking.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'booking create faild');
    }
    const secondnewbooking: any = newBooking[0].toObject();

    secondnewbooking.slot = bookedSlot;

    await session.commitTransaction();
    await session.endSession();

    return secondnewbooking;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(httpStatus.BAD_REQUEST, 'booking faild ');
  }
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

  return result;
};

const getSingleBookingsInDb = async (id: string) => {
  const result = await BookingModel.find({ customer: id })
    .populate('service')
    .populate({
      path: 'slot',
      match: { bypassIsBookedFilter: true },
    });
  return result;
};
export const bookingService = {
  createBookingInDb,
  getBookingsInDb,
  getSingleBookingsInDb,
};
