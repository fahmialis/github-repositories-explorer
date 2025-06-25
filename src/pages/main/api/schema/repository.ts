import * as z from 'zod';

export const repositoryItemSchema = z.object({
  id: z.number(),
  node_id: z.string(),
  name: z.string(),
  full_name: z.string(),
  html_url: z.string(),
  description: z.string().nullable(),
  stargazers_count: z.number(),
  forks_count: z.number(),
});
export type RepositoryItem = z.infer<typeof repositoryItemSchema>;
