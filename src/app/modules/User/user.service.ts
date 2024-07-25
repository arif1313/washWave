import { TUser } from './user.interface';
import { MUserModel } from './user.modle';

const createUserInDb = async (UserData: TUser) => {
  const user = new MUserModel(UserData);
  if (await user.isUserExists(UserData.email)) {
    throw new Error('user Already exist');
  }

  const result = await user.save(); //built in instance
  return result;
};
export const userService = {
  createUserInDb,
};
//const createUserInDb = async (user: TUser) => {
//creat3e a user object

//if password is not given use default password

// userData.password = password || (config.default_password as string);
// if (!password) {
//   user.password = config.default_password as string;
// } else {
//   user.password = password;
// }

// set student role
//userData.role = 'student';
//set menually generated id
//userData.id = '203018001';
// create a usr
// const newuser = await UserModel.create(user);
// create a student
//if (Object.keys(newuser).length) {
// set id _id as user
// student.id = newuser.id; // ambeding id
// student.userId = newuser._id; //referace id
// }

//return newuser;
//};
