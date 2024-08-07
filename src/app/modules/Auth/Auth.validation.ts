import { z } from 'zod';

const loginVaidationSchema = z.object({
  email: z.string({ required_error: 'email is required' }),
  password: z.string({ required_error: 'password is required' }),
});
export const AuthValidation = {
  loginVaidationSchema,
};
