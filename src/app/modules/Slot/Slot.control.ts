import { Request, Response } from 'express';
import { slodService } from './Slot.service';

// import { error } from 'console';

const createSlod = async (req: Request, res: Response) => {
  try {
    const result = await slodService.createSlodInDb();

    res.status(200).json({
      success: true,
      message: 'student created succes',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const slodControlers = {
  createSlod,
};
