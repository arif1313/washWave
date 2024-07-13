import { z } from 'zod';

const TBookingValidationSchema = z.object({
  customer: z
    .string({ required_error: 'Customer is required' })
    .trim()
    .max(20, { message: 'Customer name can not be more than 20 characters' }),
  service: z.string({ required_error: 'service is required' }).trim(),

  //service: z.string({ required_error: 'service is required' }).trim(),

  slot: z.string({ required_error: 'slot is required' }),

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
