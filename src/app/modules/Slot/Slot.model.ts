/* eslint-disable @typescript-eslint/no-explicit-any */
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
      type: Date,
      required: [true, 'Date is required'],
      validate: {
        validator: function (v: any) {
          const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
          return dateRegex.test(v.toISOString().slice(0, 10));
        },
        message: (props) =>
          `${props.value} is not a valid date! Date must be in YYYY-MM-DD format.`,
      },
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
  const query = this.getQuery();
  if (query.bypassIsBookedFilter) {
    delete query.bypassIsBookedFilter;
    return next();
  }
  this.find({ isBooked: { $ne: 'booked' } });
  next();
});
const SlotModel = model<TSlot>('Slot', SlotSchema);

export default SlotModel;
