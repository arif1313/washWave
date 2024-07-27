import { TService } from './service.interface';
import ServiceModel from './service.model';

const createsServiceInDb = async (service: TService) => {
  const result = await ServiceModel.create(service);

  return result;
};
const getSingleServiceFromDB = async (_id: string) => {
  const result = await ServiceModel.findById({ _id });
  return result;
};
const getAllServiceFromDB = async () => {
  const result = await ServiceModel.find();
  return result;
};
const UpdateSingleServiceFromDB = async (_id: string, data: object) => {
  await ServiceModel.updateOne({ _id }, { ...data });
  const result = await ServiceModel.findById({ _id });
  return result;
};

export const servicesService = {
  createsServiceInDb,
  getSingleServiceFromDB,
  getAllServiceFromDB,
  UpdateSingleServiceFromDB,
};
