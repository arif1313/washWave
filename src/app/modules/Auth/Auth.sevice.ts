import httpStatus from 'http-status';
import AppError from '../../Errors/AppError';
import { MUserModel } from '../User/user.modle';
import { TlogUser } from './Auth.interface';
import jwt from 'jsonwebtoken';
import config from '../../config';
const LoginUserInDB = async (logerData: TlogUser) => {
  const User = await MUserModel.isUserExists(logerData.email);
  if (!User) {
    throw new AppError(httpStatus.NOT_FOUND, 'User is not found');
  }
  // if have soft delete property in user
  //   const isDeleted = isUserExists?.isDeleted;
  //   if (isDeleted) {
  //     throw new AppError(httpStatus.FORBIDDEN, 'User is not found');
  //   }

  if (
    !(await MUserModel.ispasswordMatch(logerData?.password, User?.password))
  ) {
    throw new AppError(httpStatus.FORBIDDEN, 'password not match');
  }
  const jwtPaylod = {
    email: User?.email,
    role: User?.role,
  };
  const accesToken = jwt.sign(jwtPaylod, config.Jwt_secret as string, {
    expiresIn: '30d',
  });
  return accesToken;
};

export const AuthService = {
  LoginUserInDB,
};
