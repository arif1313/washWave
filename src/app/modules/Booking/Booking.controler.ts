/* eslint-disable @typescript-eslint/no-unused-vars */

import ResponceFunction from '../../utils/sendResponce';
import httpStatus from 'http-status';
import { catchErrFunction } from '../../utils/catchAsync';
import { MUserModel } from '../User/user.modle';
import AppError from '../../Errors/AppError';
import { TUser, TUserWithId } from '../User/user.interface';
import { bookingService } from './Booking.service';

const createBooking = catchErrFunction(async (req, res, next) => {
  const bookingData = req.body;

  const User = req.user;

  const FindCustomer = await MUserModel.isUserExists(User?.email);

  const customerId = FindCustomer?._id?.toString();

  if (!FindCustomer) {
    throw new AppError(404, 'Customer not  exist');
  }
  const result = await bookingService.createBookingInDb(
    bookingData,
    customerId as string,
  );
  ResponceFunction(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking successful',
    data: result,
  });
});
const getBookings = catchErrFunction(async (req, res, next) => {
  const result = await bookingService.getBookingsInDb();
  ResponceFunction(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All bookings retrieved successfully',
    data: result,
  });
});
export const bookingControlers = {
  createBooking,
  getBookings,
};
