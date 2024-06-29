import { z } from 'zod';

export const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    contactNumber: z.string(),
    passwordChangedAt: z.date().optional(),
    role: z.enum(['user']).optional(),
    status: z.enum(['active', 'blocked']).optional(),
    isDeleted: z.boolean().optional(),
    profileImg: z.string().optional(),
  }),
});

export const userValidationSchema = { createUserValidationSchema };
