import config from '../../config';
import { Student } from '../student/student.interface';
import { UserModel } from './user.modle';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';

const createStudentInDb = async (password: string, student: Student) => {
  //creat3e a user object
  const userData: Partial<TUser> = {};
  //if password is not given use default password

  userData.password = password || (config.default_password as string);
  // if (!password) {
  //   user.password = config.default_password as string;
  // } else {
  //   user.password = password;
  // }

  // set student role
  userData.role = 'student';
  //set menually generated id
  userData.id = '203018001';
  // create a usr
  const newuser = await UserModel.create(userData);
  // create a student
  if (Object.keys(newuser).length) {
    // set id _id as user
    student.id = newuser.id; // ambeding id
    student.userId = newuser._id; //referace id
  }
  const newStudent = await StudentModel.create(student);
  return newStudent;
};

export const userService = {
  createStudentInDb,
};
