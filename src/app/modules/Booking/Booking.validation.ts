import { z } from 'zod';
const objectIdPattern = /^[0-9a-fA-F]{24}$/;
const TBookingValidationSchema = z.object({
  customer: z
    .string({ required_error: 'Customer is required' })
    .regex(objectIdPattern, 'Invalid coustomer Id'),
  service: z
    .string({ required_error: 'service is required' })
    .regex(objectIdPattern, 'Invalid serviceId'),
  slot: z
    .string({ required_error: 'slod is required' })
    .regex(objectIdPattern, 'Invalid slodId'),
  vehicleType: z.enum(
    [
      'car',
      'truck',
      'SUV',
      'van',
      'motorcycle',
      'bus',
      'electricVehicle',
      'hybridVehicle',
      'bicycle',
      'tractor',
    ],
    { required_error: 'VehicleType is required' },
  ),
  vehicleBrand: z.string({ required_error: 'vehicle Brand is required' }),
  vehicleModel: z.string({ required_error: 'vehicle model is required' }),
  manufacturingYear: z.string({
    required_error: 'Manufactureing year is required',
  }),

  registrationPlate: z.string({
    required_error: 'ragistation plate is required',
  }),
});

export { TBookingValidationSchema };
