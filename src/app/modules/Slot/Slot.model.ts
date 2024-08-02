import { Schema, model } from 'mongoose';
import { TSlot } from './Slot.interface';

const SlotSchema = new Schema<TSlot>(
  {
    service: {
      type: Schema.Types.ObjectId,
      required: [true, 'Service is required'],
      ref: 'service',
    },
    date: {
      type: String,
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
SlotSchema.pre('find', function (next) {
  this.find({ isBooked: { $ne: 'booked' } });
  next();
});
const SlotModel = model<TSlot>('Slot', SlotSchema);

export default SlotModel;
