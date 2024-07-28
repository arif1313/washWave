/* eslint-disable @typescript-eslint/no-unused-vars */
import { TServiceValidationSchema } from './service.validation';
import { servicesService } from './service.sevice';
import ResponceFunction from '../../utils/sendResponce';
import httpStatus from 'http-status';
import { catchErrFunction } from '../User/user.controler';

// import { error } from 'console';

const createService = catchErrFunction(async (req, res, next) => {
  const serviceData = req.body;
  const zodParseServiceData = TServiceValidationSchema.parse(serviceData);
  const result = await servicesService.createsServiceInDb(zodParseServiceData);
  ResponceFunction(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created success',
    data: result,
  });
});
const getService = catchErrFunction(async (req, res, next) => {
  const { id } = req.params;

  const result = id
    ? await servicesService.getSingleServiceFromDB(id)
    : await servicesService.getAllServiceFromDB();
  ResponceFunction(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${id ? 'Service' : 'Services'} ${'retrieved successfully'}`,
    data: result,
  });
});
const updateService = catchErrFunction(async (req, res, next) => {
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
});
const DeleteService = catchErrFunction(async (req, res, next) => {
  const { id } = req.params;
  const result = await servicesService.DeleteSingleServiceFromDB(id);
  ResponceFunction(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service deleted successfully',
    data: result,
  });
});

export const serviceControlers = {
  createService,
  getService,
  updateService,
  DeleteService,
};
//To do
// {
//   "success": false,
//   "statusCode": 404,
//   "message": "No Data Found",
//   "data":[]
// }
