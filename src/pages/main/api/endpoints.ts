import { makeEndpoint, parametersBuilder } from '@zodios/core';
import { z } from 'zod';

const getUserList = makeEndpoint({
  alias: 'getUserList',
  method: 'get',
  path: 'search/users',
  parameters: parametersBuilder()
    .addQueries({
      q: z.string().optional(),
    })
    .build(),
  response: z.object({
    total_count: z.number(),
    incomplete_results: z.boolean(),
  }),
});

export const endpoints = {
  getUserList,
};
