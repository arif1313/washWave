import { z } from 'zod';

const NewUserSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .trim()
    .max(20, { message: 'Name can not be more than 20 characters' }),

  email: z
    .string({ required_error: 'email is required' })
    .email({ message: 'Invalid email address' }),

  password: z.string({
    required_error: 'passWord is required',
    invalid_type_error: 'Password must be a string',
  }),
  phone: z.string({ required_error: 'Phone Number is required' }),

  role: z.enum(['admin', 'user'], { required_error: 'Role is required' }),
  address: z.string({ required_error: 'Phone Number is required' }),
});

export const userValidation = {
  NewUserSchema,
};
