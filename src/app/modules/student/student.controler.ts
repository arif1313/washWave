import { Request, Response } from 'express';
import { studentService } from './student.service';
// import { error } from 'console';

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getStudentsFromDb();
    res.status(200).json({
      success: true,
      message: 'find success',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAsingleStudent = async (req: Request, res: Response) => {
  const studentInfo = req.params;
  const result = await studentService.getSingleStudent(studentInfo.id);
  res.status(200).json({
    success: true,
    message: 'got asingle data',
    data: result,
  });
};
const deleteAsingleStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await studentService.deleteAStudentFromDb(id);
  res.status(200).json({
    success: true,
    message: 'Deleted a single data',
    data: result,
  });
};
export const StudentControlers = {
  getStudents,
  getAsingleStudent,
  deleteAsingleStudent,
};
