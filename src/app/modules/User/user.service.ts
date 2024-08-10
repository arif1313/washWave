import AppError from '../../Errors/AppError';
import { TUser } from './user.interface';
import { MUserModel } from './user.modle';

const createUserInDb = async (UserData: TUser) => {
  if (await MUserModel.isUserExists(UserData.email)) {
    throw new AppError(404, 'user Already exist');
  }
  const result = await MUserModel.create(UserData);
  return result;
};
export const userService = {
  createUserInDb,
};
