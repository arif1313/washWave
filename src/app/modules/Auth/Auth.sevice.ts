import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import AppError from '../../Errors/AppError';
import { MUserModel } from '../User/user.modle';
import { TlogUser } from './Auth.interface';

const LoginUserInDB = async (logerData: TlogUser) => {
  const isUserExists = await MUserModel.isUserExists(logerData.email);
  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'User is not found');
  }
  // if have soft delete property in user
  //   const isDeleted = isUserExists?.isDeleted;
  //   if (isDeleted) {
  //     throw new AppError(httpStatus.FORBIDDEN, 'User is not found');
  //   }

  if (
    !(await MUserModel.ispasswordMatch(
      logerData?.password,
      isUserExists?.password,
    ))
  ) {
    throw new AppError(httpStatus.FORBIDDEN, 'password not match');
  }
};

export const AuthService = {
  LoginUserInDB,
};
