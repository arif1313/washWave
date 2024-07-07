import { Request, Response } from 'express';
import { userService } from './user.service';

// import { error } from 'console';

const createAstudent = async (req: Request, res: Response) => {
  try {
    const { password, student } = req.body;

    const result = await userService.createStudentInDb(password, student);

    res.status(200).json({
      success: true,
      message: 'student created succes',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const UserControlers = {
  createAstudent,
};
