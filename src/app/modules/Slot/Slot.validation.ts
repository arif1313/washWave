import { z } from 'zod';

const SlotSchema = z.object({
  service: z.string({
    required_error: 'service  is required',
    invalid_type_error: 'service must be a string',
  }),
  date: z
    .date()
    .refine((date) => !isNaN(date.getTime()), { message: 'Invalid date' }),
  startTime: z.string({ required_error: 'start time  is required' }),
  endTime: z.string({ required_error: 'end time  is required' }),
  isBooked: z.enum(['available', 'booked', 'canceled'], {
    required_error: 'Status is required',
  }),
});

export const slodValidation = { SlotSchema };
