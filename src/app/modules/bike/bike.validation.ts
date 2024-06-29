import { z } from 'zod';

const addBikeValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    releaseDate: z.string(),
    brand: z.string(),
    model: z.string(),
    type: z.string(),
    size: z.string(),
    color: z.string(),
    frameMaterial: z.string(),
    suspension: z.string(),
    image: z.string(),
  }),
});
const updateBikeValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    price: z.number().optional(),
    quantity: z.number().optional(),
    releaseDate: z.string().optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    type: z.string().optional(),
    size: z.string().optional(),
    color: z.string().optional(),
    frameMaterial: z.string().optional(),
    suspension: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const bikeValidations = {
  addBikeValidationSchema,
  updateBikeValidationSchema,
};
