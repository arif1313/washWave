import { Model } from 'mongoose';
import { UserRole } from './user.const';

export interface TUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'admin' | 'user';
  address: string;
}
export interface UserModel extends Model<TUser> {
  isUserExists(email: string): Promise<TUser | null>;
  ispasswordMatch(
    currentpassword: string,
    hasedPassword: string,
  ): Promise<boolean>;
}
export type TUserRole = keyof typeof UserRole;
//for instance
// export type IUserMethods = {
//   isUserExists(email: string): Promise<TUser | null>;
// };
// export type UserModel = Model<TUser, IUserModel>;
