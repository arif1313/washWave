/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { userService } from './user.service';
import { TUserValidSchema } from './user.validation';
import ResponceFunction from '../../utils/sendResponce';
import httpStatus from 'http-status';

export const catchErrFunction = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

const createUser = catchErrFunction(async (req, res, next) => {
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
});
export const UserControlers = {
  createUser,
};
