import { request } from '@playwright/test';

export async function getApiContext() {
  return await request.newContext({
    baseURL: process.env.API_BASE_URL,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.API_KEY
    }
  });
}
