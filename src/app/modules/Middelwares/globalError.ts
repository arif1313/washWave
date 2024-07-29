/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

const globalErrorHandeler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statuscode = error.statusCode || 500;
  const message = error.message || 'something went wrong';
  return res.status(statuscode).json({
    success: false,
    message,
    error,
  });
};
export default globalErrorHandeler;
