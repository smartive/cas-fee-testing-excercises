import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3030/');

  await expect(page).toHaveTitle(/Feathers Example/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3030/');

  await expect(page.getByPlaceholder('Message')).toBeVisible();
  await page.getByPlaceholder('Message').fill('hello world');

  await expect(page.getByText('SEND')).toBeVisible();

  await page.getByText('SEND').click();

  // TODO: check for new message
});

test('test with mocked api', async ({ page }) => {
  await page.goto('http://localhost:3030/');

  await expect(page.getByPlaceholder('Message')).toBeVisible();
  await page.getByPlaceholder('Message').fill('hello world');

  await expect(page.getByText('SEND')).toBeVisible();

  await page.getByText('SEND').click();

  // TODO: check for new message
});
