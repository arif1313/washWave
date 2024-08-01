/* eslint-disable @typescript-eslint/no-unused-vars */

import ResponceFunction from '../../utils/sendResponce';
import httpStatus from 'http-status';
import { catchErrFunction } from '../../utils/catchAsync';
import { AuthService } from './Auth.sevice';
import { error } from 'console';

const LoginUser = catchErrFunction(async (req, res, next) => {
  try {
    const logerData = req.body;

    const result = await AuthService.LoginUserInDB(logerData);
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      success: true,
      message: 'User login successfully',
      token: result.token,
      data: result.data,
    });
  } catch (error) {
    next(error);
  }
});
export const AuthControlers = {
  LoginUser,
};
