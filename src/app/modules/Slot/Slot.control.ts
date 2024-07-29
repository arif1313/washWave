/* eslint-disable @typescript-eslint/no-unused-vars */

import { slodService } from './Slot.service';
import { Types } from 'mongoose';
import ResponceFunction from '../../utils/sendResponce';
import httpStatus from 'http-status';
import { catchErrFunction } from '../../utils/catchAsync';

// import { error } from 'console';

const createSlod = catchErrFunction(async (req, res, next) => {
  //zod validatin

  const slodData = req.body;

  // const slodDataWithObjectId = {
  //   ...slodData,
  //   service: new Types.ObjectId(slodData.service),
  // };
  const result = await slodService.createSlodInDb(slodData);
  ResponceFunction(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created success',
    data: result,
  });
});
export const slodControlers = {
  createSlod,
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
