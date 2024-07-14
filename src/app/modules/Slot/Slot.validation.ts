import { z } from 'zod';
const objectIdPattern = /^[0-9a-fA-F]{24}$/;
const TSlodValidationSchema = z.object({
  service: z
    .string({
      required_error: 'service  is required',
      invalid_type_error: 'service must be a string',
    })
    .regex(objectIdPattern, 'Invalid ObjectId'),
  date: z.string(),
  startTime: z.string({ required_error: 'start time  is required' }),
  endTime: z.string({ required_error: 'end time  is required' }),
  isBooked: z.enum(['available', 'booked', 'canceled'], {
    required_error: 'Status is required',
  }),
});

export { TSlodValidationSchema };
