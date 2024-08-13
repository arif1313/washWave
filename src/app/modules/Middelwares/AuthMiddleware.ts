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
      const bearer_token: string = req.headers.authorization as string;
      const token = bearer_token?.split(' ')[1];
      if (!token) {
        throw new AppError(
          httpStatus.UNAUTHORIZED,
          'You have no access to this route',
        );
      }
      jwt.verify(token, config.Jwt_secret as string, function (err, decoded) {
        // err
        if (err) {
          throw new AppError(
            httpStatus.UNAUTHORIZED,
            'You have no access to this route',
          );
        }

        const role = (decoded as JwtPayload)?.role;
        if (roles && !roles.includes(role)) {
          throw new AppError(
            httpStatus.UNAUTHORIZED,
            'You have no access to this route',
          );
        }

        req.user = decoded as JwtPayload;
        // decoded undefined
        next();
      });
    },
  );
};
