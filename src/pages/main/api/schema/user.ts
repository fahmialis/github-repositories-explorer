import * as z from 'zod';

export const userSchema = z.object({
  login: z.string(),
  id: z.number(),
});
export type User = z.infer<typeof userSchema>;
