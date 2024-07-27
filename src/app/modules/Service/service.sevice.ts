import { TService } from './service.interface';
import ServiceModel from './service.model';

const createsServiceInDb = async (service: TService) => {
  const result = await ServiceModel.create(service);

  return result;
};
const getSingleServiceFromDB = async (id: string) => {
  const result = await ServiceModel.aggregate([{ $match: { _id: id } }]);
  return result;
};

export const servicesService = {
  createsServiceInDb,
  getSingleServiceFromDB,
};
