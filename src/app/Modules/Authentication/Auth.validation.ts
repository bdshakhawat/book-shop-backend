import { z } from 'zod';

const LoginUserValidationSchema = z.object({
    email: z.string({
      required_error: 'email is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
  })

export const AuthValidation = {
  LoginUserValidationSchema,
};
