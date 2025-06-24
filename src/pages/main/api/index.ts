import { Zodios } from '@zodios/core';
import { ZodiosHooks } from '@zodios/react';
import { endpoints } from './endpoints';

export const dashboardApiClient = new Zodios(
  import.meta.env.VITE_BASE_URL,
  [endpoints.getUserList, endpoints.getUserRepositories],
  {
    validate: true,
    axiosConfig: {
      headers: {
        Authorization: import.meta.env.VITE_GITHUB_TOKEN,
      },
    },
  }
);

export const dashboardApiHooks = new ZodiosHooks(
  'dashboard',
  dashboardApiClient
);
