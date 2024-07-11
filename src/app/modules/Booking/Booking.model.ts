import { Schema, model } from 'mongoose';
import { TBooking } from './Booking.interface';
const BookingSchema = new Schema<TBooking>(
  {
    customer: {
      type: String,
      required: [true, 'Customer is required'],
      trim: true,
      maxlength: [20, 'Customer name can not be more than 20 characters'],
    },
    service: {
      type: String,
      required: [true, 'Service is required'],
      trim: true,
    },
    slot: {
      type: String,
      required: [true, 'Slod is required'],
    },
    vehicleType: {
      type: String,
      enum: [
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
      required: [true, 'VehicleType is required'],
    },
    vehicleBrand: {
      type: String,
      required: [true, 'VehicleBrand is required'],
    },
    vehicleModel: {
      type: String,
      required: [true, 'Vehicle Model is required'],
    },
    manufacturingYear: {
      type: String,
      required: [true, 'Manufacturing year is required'],
    },
    registrationPlate: {
      type: String,
      required: [true, 'Registation plate is required'],
    },
  },
  {
    timestamps: true,
  },
);

// Create a Mongoose model based on the schema
const Booking = model<TBooking>('Booking', BookingSchema);

export default Booking;
