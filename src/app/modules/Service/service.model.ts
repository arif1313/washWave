import { Schema, model } from 'mongoose';
import { TService } from './service.interface';
const ServiceSchema = new Schema<TService>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [20, 'Name can not be more than 20 characters'],
    },
    description: {
      type: String,
      required: [true, 'description is required'],
      trim: true,
      minlength: [20, 'description can not be less than 20 characters'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    price: {
      type: String,
      required: [true, 'Price is required'],
    },
    duration: {
      type: String,
      required: [true, 'Duration is required'],
    },
  },
  {
    timestamps: true,
  },
);
const Service = model<TService>('Service', ServiceSchema);

export default Service;
