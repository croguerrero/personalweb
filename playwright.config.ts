import { defineConfig } from '@playwright/test';

const baseURL = 'http://127.0.0.1:4175';

export default defineConfig({
  testDir: './tests',
  forbidOnly: Boolean(process.env.CI),
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL,
    browserName: 'chromium',
    viewport: { width: 1440, height: 900 },
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1 --port 4175 --strictPort',
    url: baseURL,
  },
});
