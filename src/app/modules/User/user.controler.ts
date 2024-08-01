/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { userService } from './user.service';
import ResponceFunction from '../../utils/sendResponce';
import httpStatus from 'http-status';
import { catchErrFunction } from '../../utils/catchAsync';

const createUser = catchErrFunction(async (req, res, next) => {
  //zod validatin

  const userData = req.body;
  const result = await userService.createUserInDb(userData);

  ResponceFunction(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User registered successfully',
    data: result,
  });
});
export const UserControlers = {
  createUser,
};
