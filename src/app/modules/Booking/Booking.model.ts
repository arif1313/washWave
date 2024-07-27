import { Schema, model } from 'mongoose';
import { TBooking } from './Booking.interface';
const BookingSchema = new Schema<TBooking>(
  {
    customer: {
      type: Schema.Types.ObjectId,
      required: [true, 'Customer is required'],
      ref: 'UserModel',
    },
    service: {
      type: Schema.Types.ObjectId,
      required: [true, 'Service is required'],
      ref: 'ServiceModel',
    },
    slot: {
      type: Schema.Types.ObjectId,
      required: [true, 'Slod is required'],
      ref: 'SlotModel',
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
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

const BookingModel = model<TBooking>('Booking', BookingSchema);

export default BookingModel;
