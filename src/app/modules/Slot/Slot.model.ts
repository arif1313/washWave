import { Schema, model } from 'mongoose';
import { TSlot } from './Slot.interface';
const SlotSchema = new Schema<TSlot>(
  {
    service: {
      type: String,
      required: [true, 'Service is required'],
    },
    date: {
      type: Date,
      required: [true, 'Date is required'],
    },
    startTime: {
      type: String,
      required: [true, 'Start time is required'],
    },
    endTime: {
      type: String,
      required: [true, 'End time is required'],
    },
    isBooked: {
      type: String,
      enum: ['available', 'booked', 'canceled'],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
const Slot = model<TSlot>('Slot', SlotSchema);

export default Slot;
