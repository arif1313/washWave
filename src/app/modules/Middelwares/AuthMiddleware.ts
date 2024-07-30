import { NextFunction, Request, Response } from 'express';
import { catchErrFunction } from '../../utils/catchAsync';
import AppError from '../../Errors/AppError';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../config';
import { TUserRole } from '../User/user.interface';

export const AuthValidationMiddelware = (...roles: TUserRole[]) => {
  return catchErrFunction(
    async (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization;
      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'you are not Authorized');
      }
      jwt.verify(token, config.Jwt_secret as string, function (err, decoded) {
        // err
        if (err) {
          throw new AppError(httpStatus.UNAUTHORIZED, 'you are not Authorized');
        }
        const role = (decoded as JwtPayload)?.role;
        if (roles && !roles.includes(role)) {
          throw new AppError(httpStatus.UNAUTHORIZED, 'you are not Authorized');
        }

        req.user = decoded as JwtPayload;
        // decoded undefined
        next();
      });
    },
  );
};
