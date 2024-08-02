/* eslint-disable @typescript-eslint/no-unused-vars */

import { slodService } from './Slot.service';
import { ObjectId, Types } from 'mongoose';
import ResponceFunction from '../../utils/sendResponce';
import httpStatus from 'http-status';
import { catchErrFunction } from '../../utils/catchAsync';
import { MinteCalculate } from '../../utils/timeFormat';
import AppError from '../../Errors/AppError';

// import { error } from 'console';

const createSlod = catchErrFunction(async (req, res, next) => {
  //zod validatin

  const slodData = req.body;

  const totalStartMinutes = MinteCalculate(slodData?.startTime);

  const totalEndMinutes = MinteCalculate(slodData?.endTime);
  const totalSlot = (totalEndMinutes - totalStartMinutes) / 60;

  if (totalEndMinutes <= totalStartMinutes) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'endTime should be greater than startTime',
    );
  }
  const result = await slodService.createSlodInDb(
    slodData,
    totalSlot,
    totalStartMinutes,
  );
  ResponceFunction(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Slots created successfully',
    data: result,
  });
});
const getAvailableSlot = catchErrFunction(async (req, res, next) => {
  const date = req?.query?.date as string;
  const id = req?.query?.serviceId as string;
  const result = await slodService.getAvailableSlotInDB(date, id);
  ResponceFunction(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Slots created successfully',
    data: result,
  });
});
export const slodControlers = {
  createSlod,
  getAvailableSlot,
};

// import { slodService } from './Slot.service';

// // import { error } from 'console';

// const createSlod = async (req: Request, res: Response) => {
//   try {
//     const result = await slodService.createSlodInDb();

//     res.status(200).json({
//       success: true,
//       message: 'student created succes',
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const slodControlers = {
//   createSlod,
// };
