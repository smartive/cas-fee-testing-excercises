import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './web-tests',
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    launchOptions: {
      
    }
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
