import { http, HttpResponse } from 'msw';

import userResponse from '../json/user.json';
import userReposResponse from '../json/user.json';

const baseUrl = 'https://api.github.com';

export const handlers = [
  http.get(`${baseUrl}/search/users`, () => {
    return HttpResponse.json(userResponse);
  }),
  http.get(`${baseUrl}/test/repos`, () => {
    return HttpResponse.json(userReposResponse);
  }),
];
