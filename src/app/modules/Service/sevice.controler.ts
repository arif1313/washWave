import { NextFunction, Request, Response } from 'express';
import { TServiceValidationSchema } from './service.validation';
import { servicesService } from './service.sevice';

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
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const serviceControlers = {
  createService,
};
