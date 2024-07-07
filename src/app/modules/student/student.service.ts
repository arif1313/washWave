import { StudentModel } from './student.model';

const getStudentsFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudent = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
const deleteAStudentFromDb = async (id: string) => {
  const result = await StudentModel.deleteOne({ id });
  return result;
};
export const studentService = {
  getStudentsFromDb,
  getSingleStudent,
  deleteAStudentFromDb,
};
