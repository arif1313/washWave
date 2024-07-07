import { z } from 'zod';

const UserValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(8, { message: 'password can not more 8 char' }),
  needPassChange: z.boolean().default(true).optional(),
  role: z.enum(['student', 'faculty', 'admin']),
  status: z.enum(['inprogress', 'block']).default('inprogress'),
  isDeleted: z.boolean().default(false),
});
export const userValidation = {
  UserValidationSchema,
};
