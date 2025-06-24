import { makeEndpoint, parametersBuilder } from '@zodios/core';
import { z } from 'zod';
import { userSchema } from './schema/user';
import { repositoryItemSchema } from './schema/repository';

const getUserList = makeEndpoint({
  alias: 'getUserList',
  method: 'get',
  path: 'search/users',
  parameters: parametersBuilder()
    .addQueries({
      q: z.string(),
      per_page: z.number().default(5),
    })
    .build(),
  response: z.object({
    total_count: z.number(),
    incomplete_results: z.boolean(),
    items: z.array(userSchema),
  }),
});

const getUserRepositories = makeEndpoint({
  alias: 'getUserRepositories',
  method: 'get',
  path: 'users/:name/repos',
  parameters: parametersBuilder().addPath('name', z.string()).build(),
  response: z.array(repositoryItemSchema),
});

export const endpoints = {
  getUserList,
  getUserRepositories,
};
