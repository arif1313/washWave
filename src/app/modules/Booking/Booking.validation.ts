import { z } from 'zod';

const BookingSchema = z.object({
  customer: z
    .string()
    .trim()
    .max(20, { message: 'Customer name can not be more than 20 characters' })
    .nonempty({ message: 'Customer is required' }),
  service: z.string().trim().nonempty({ message: 'Service is required' }),
  slot: z.string().nonempty({ message: 'Slot is required' }),
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
  vehicleBrand: z.string().nonempty({ message: 'VehicleBrand is required' }),
  vehicleModel: z.string().nonempty({ message: 'Vehicle Model is required' }),
  manufacturingYear: z
    .string()
    .nonempty({ message: 'Manufacturing year is required' }),
  registrationPlate: z
    .string()
    .nonempty({ message: 'Registration plate is required' }),
});

export const bookingValidation = { BookingSchema };
