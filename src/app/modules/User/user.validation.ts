import { z } from 'zod';

const NewUserSchema = z.object({
  name: z
    .string()
    .trim()
    .max(20, { message: 'Name can not be more than 20 characters' })
    .nonempty({ message: 'Name is required' }),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .nonempty({ message: 'Email is required' }),
  password: z.string().nonempty({ message: 'Password is required' }),
  phone: z.string().nonempty({ message: 'Phone is required' }),
  role: z.enum(['admin', 'user'], { required_error: 'Role is required' }),
  address: z.string().nonempty({ message: 'Address is required' }),
});

export const userValidation = {
  NewUserSchema,
};
