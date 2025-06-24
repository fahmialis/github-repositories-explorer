import { Zodios } from '@zodios/core';
import { ZodiosHooks } from '@zodios/react';
import { endpoints } from './endpoints';

export const dashboardApiClient = new Zodios(
  'https://api.github.com/',
  [endpoints.getUserList],
  { validate: true }
);

export const dashboardApiHooks = new ZodiosHooks(
  'dashboard',
  dashboardApiClient
);
