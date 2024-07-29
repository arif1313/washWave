/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

import { ZodError, ZodIssue } from 'zod';
import { TErorSorce } from '../../interface/error';
import config from '../../config';
import handleError from '../../Errors/handelzodError';
import handleValidationError from '../../Errors/handleVlalidationError';
import handleZodError from '../../Errors/handelzodError';

const globalErrorHandeler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || 'something went wrong';

  let errorSource: TErorSorce = [
    {
      path: '',
      message: 'something went wrong',
    },
  ];
  //zod error
  if (error instanceof ZodError) {
    const simpifidError = handleZodError(error);
    statusCode = simpifidError?.statusCode;
    message = simpifidError?.message;
    errorSource = simpifidError?.errorSource;
  } else if (error?.name === 'ValidationError') {
    const simpifidError = handleValidationError(error);
    statusCode = simpifidError?.statusCode;
    message = simpifidError?.message;
    errorSource = simpifidError?.errorSource;
  }
  return res.status(statusCode).json({
    success: false,
    message,
    errorSource,
    stack: config.Node_env === 'devlopment' ? error?.stack : null,
  });
};
export default globalErrorHandeler;
