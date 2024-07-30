/* eslint-disable @typescript-eslint/no-unused-vars */

import ResponceFunction from '../../utils/sendResponce';
import httpStatus from 'http-status';
import { catchErrFunction } from '../../utils/catchAsync';
import { AuthService } from './Auth.sevice';

const LoginUser = catchErrFunction(async (req, res, next) => {
  const logerData = req.body;
  const result = await AuthService.LoginUserInDB(logerData);
  ResponceFunction(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User login successfully',
    data: result,
  });
});
export const AuthControlers = {
  LoginUser,
};
