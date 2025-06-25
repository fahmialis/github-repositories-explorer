import { type AxiosRequestConfig } from 'axios';

export function createAxiosConfig(): AxiosRequestConfig | undefined {
  if (import.meta.env.MODE !== 'development') {
    return undefined;
  }

  return {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  };
}
