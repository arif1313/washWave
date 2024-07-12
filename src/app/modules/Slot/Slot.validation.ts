import { z } from 'zod';

const SlotSchema = z.object({
  service: z.string().nonempty({ message: 'Service is required' }),
  date: z
    .date()
    .refine((date) => !isNaN(date.getTime()), { message: 'Invalid date' }),
  startTime: z.string().nonempty({ message: 'Start time is required' }),
  endTime: z.string().nonempty({ message: 'End time is required' }),
  isBooked: z.enum(['available', 'booked', 'canceled'], {
    required_error: 'Status is required',
  }),
});

export const slodValidation = { SlotSchema };
