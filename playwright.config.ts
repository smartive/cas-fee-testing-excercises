import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './web-tests',
  reporter: 'html',
  webServer: {
    command: 'npm run start',
    port: 3030,
  },
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
