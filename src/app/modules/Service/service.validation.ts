import { z } from 'zod';

const ServiceSchema = z.object({
  name: z
    .string()
    .trim()
    .max(20, { message: 'Name can not be more than 20 characters' })
    .nonempty({ message: 'Name is required' }),
  description: z
    .string()
    .trim()
    .min(20, { message: 'Description can not be less than 20 characters' })
    .nonempty({ message: 'Description is required' }),
  isDeleted: z.boolean().optional(),
  price: z.string().nonempty({ message: 'Price is required' }),
  duration: z.string().nonempty({ message: 'Duration is required' }),
});

export const serviceValidation = { ServiceSchema };
