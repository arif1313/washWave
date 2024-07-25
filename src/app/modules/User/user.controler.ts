import { Request, Response } from 'express';
import { userService } from './user.service';
import { TUserValidSchema } from './user.validation';

// import { error } from 'console';

const createUser = async (req: Request, res: Response) => {
  try {
    //zod validatin

    const userData = req.body;

    const zodParseUserData = TUserValidSchema.parse(userData);
    const result = await userService.createUserInDb(zodParseUserData);
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
export const UserControlers = {
  createUser,
};
