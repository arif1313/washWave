import { Request, Response } from 'express';
import { TSlodValidationSchema } from './Slot.validation';
import { slodService } from './Slot.service';
import { Types } from 'mongoose';

// import { error } from 'console';

const createSlod = async (req: Request, res: Response) => {
  try {
    //zod validatin

    const slodData = req.body;
    const zodParseSlodData = TSlodValidationSchema.parse(slodData);
    const slodDataWithObjectId = {
      ...zodParseSlodData,
      service: new Types.ObjectId(zodParseSlodData.service),
    };
    const result = await slodService.createSlodInDb(slodDataWithObjectId);
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'somethign worng',
      error: err,
    });
  }
};
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
