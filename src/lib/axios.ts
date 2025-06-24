import { type AxiosRequestConfig } from 'axios';

export function createAxiosConfig(): AxiosRequestConfig {
  return {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  };
}
