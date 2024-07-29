/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

const globalErrorHandeler: ErrorRequestHandler = (error, req, res, next) => {
  let statuscode = error.statusCode || 500;
  let message = error.message || 'something went wrong';
  type TErorSorce = {
    path: string | number;
    message: string;
  }[];
  let errorSource: TErorSorce = [
    {
      path: '',
      message: 'something went wrong',
    },
  ];
  if (error instanceof ZodError) {
    statuscode = 400;
    message = 'this is zod error';
  }

  return res.status(statuscode).json({
    success: false,
    message,
    errorSource,
  });
};
export default globalErrorHandeler;
