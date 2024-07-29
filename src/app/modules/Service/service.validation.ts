import { z } from 'zod';

const TServiceValidationSchema = z.object({
  name: z
    .string({
      required_error: 'name Number is required',
      invalid_type_error: 'Name must be a string',
    })
    .trim()
    .max(20, { message: 'Name can not be more than 20 characters' }),

  description: z
    .string({ invalid_type_error: 'description must be a string' })
    .trim()
    .min(20, { message: 'Description can not be less than 20 characters' }),
  isDeleted: z.boolean(),
  price: z.string({ invalid_type_error: 'price must be a string' }),

  duration: z.string({ invalid_type_error: 'Duration must be a string' }),
});

export const zodServiceValidations = { TServiceValidationSchema };
