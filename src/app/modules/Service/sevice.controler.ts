import { NextFunction, Request, Response } from 'express';
import { TServiceValidationSchema } from './service.validation';
import { servicesService } from './service.sevice';
import ResponceFunction from '../../utils/sendResponce';
import httpStatus from 'http-status';

// import { error } from 'console';

const createService = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const serviceData = req.body;
    const zodParseServiceData = TServiceValidationSchema.parse(serviceData);
    const result =
      await servicesService.createsServiceInDb(zodParseServiceData);
    ResponceFunction(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created success',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getSingleService = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { servieId } = req.params;
    const result = await servicesService.getSingleServiceFromDB(servieId);
    ResponceFunction(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created success',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const serviceControlers = {
  createService,
  getSingleService,
};
