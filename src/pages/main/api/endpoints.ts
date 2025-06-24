import { makeEndpoint, parametersBuilder } from '@zodios/core';
import { z } from 'zod';
import { userSchema } from './schema/user';

const getUserList = makeEndpoint({
  alias: 'getUserList',
  method: 'get',
  path: 'search/users',
  parameters: parametersBuilder()
    .addQueries({
      q: z.string(),
    })
    .build(),
  response: z.object({
    total_count: z.number(),
    incomplete_results: z.boolean(),
    items: z.array(userSchema),
  }),
});

export const endpoints = {
  getUserList,
};
