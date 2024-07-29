import { z } from 'zod';

const TBookingValidationSchema = z.object({
  customer: z.string(),

  service: z.string(),

  slot: z.string(),

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

export const zodBookingValidations = { TBookingValidationSchema };
