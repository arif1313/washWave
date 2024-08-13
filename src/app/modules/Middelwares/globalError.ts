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
import handleCastError from '../../Errors/handleCastError';
import handleDuplicateError from '../../Errors/handleDuplicateError';
import AppError from '../../Errors/AppError';
import httpStatus from 'http-status';

const globalErrorHandeler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 500;
  let message = 'something went wrong';

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
  } else if (error?.name === 'CastError') {
    const simpifidError = handleCastError(error);
    statusCode = simpifidError?.statusCode;
    message = simpifidError?.message;
    errorSource = simpifidError?.errorSource;
  } else if (error?.code === 11000) {
    const simpifidError = handleDuplicateError(error);
    statusCode = simpifidError?.statusCode;
    message = simpifidError?.message;
    errorSource = simpifidError?.errorSource;
  } else if (error instanceof AppError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorSource = [
      {
        path: '',
        message: error?.message,
      },
    ];
  } else if (error instanceof Error) {
    message = error?.message;
    errorSource = [
      {
        path: '',
        message: error?.message,
      },
    ];
  }
  if (statusCode === httpStatus.UNAUTHORIZED) {
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,

      stack: config.Node_env === 'devlopment' ? error?.stack : null,
    });
  } else if (statusCode === httpStatus.BAD_REQUEST) {
    return res.status(statusCode).json({
      success: false,
      message,
      errorMessages: errorSource,
      stack: config.Node_env === 'devlopment' ? error?.stack : null,
    });
  } else {
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
      errorMessages: errorSource,
      stack: config.Node_env === 'devlopment' ? error?.stack : null,
    });
  }
};
export default globalErrorHandeler;
