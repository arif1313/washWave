import { NextFunction, Request, Response } from 'express';
import { userService } from './user.service';
import { TUserValidSchema } from './user.validation';
import ResponceFunction from '../../utils/sendResponce';
import httpStatus from 'http-status';

// import { error } from 'console';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //zod validatin

    const userData = req.body;

    const zodParseUserData = TUserValidSchema.parse(userData);
    const result = await userService.createUserInDb(zodParseUserData);

    ResponceFunction(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created success',
      data: result,
    });
    // res.status(200).json({
    //   success: true,
    //   message: 'user created successfully!',
    //   data: result,
    // });
  } catch (err) {
    next(err);
  }
};
export const UserControlers = {
  createUser,
};
