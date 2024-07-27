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
const getService = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const result = id
      ? await servicesService.getSingleServiceFromDB(id)
      : await servicesService.getAllServiceFromDB();
    ResponceFunction(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const updateService = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const UpdateData = req.body;
    const result = await servicesService.UpdateSingleServiceFromDB(
      id,
      UpdateData,
    );
    ResponceFunction(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Service updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const serviceControlers = {
  createService,
  getService,
  updateService,
};
