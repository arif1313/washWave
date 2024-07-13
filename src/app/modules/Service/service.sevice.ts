import { TService } from './service.interface';
import ServiceModel from './service.model';

const createsServiceInDb = async (service: TService) => {
  const result = await ServiceModel.create(service);

  return result;
};

export const servicesService = {
  createsServiceInDb,
};
