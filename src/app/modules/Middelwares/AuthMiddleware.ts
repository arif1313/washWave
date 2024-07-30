import { NextFunction, Request, Response } from 'express';
import { catchErrFunction } from '../../utils/catchAsync';
import AppError from '../../Errors/AppError';
import httpStatus from 'http-status';

export const AuthValidationMiddelware = () => {
  return catchErrFunction(
    async (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization;
      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'you are not Authorized');
      }
      next();
    },
  );
};
