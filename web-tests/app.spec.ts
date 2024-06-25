import { expect, test } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('http://localhost:3030/');

  await expect(page.getByText('Clear All')).toBeVisible();
  await page.getByText('Clear All').click();

  await expect(page.getByText('Hello world from the server')).not.toBeVisible();
})

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3030/');

  await expect(page).toHaveTitle(/Feathers Example/);
});

test('add message to chat', async ({ page }) => {
  await page.goto('http://localhost:3030/');

  await expect(page.getByPlaceholder('Message')).toBeVisible();
  await page.getByPlaceholder('Message').fill('hello world');

  await expect(page.getByText('SEND')).toBeVisible();
  await page.getByText('SEND').click();

  // TODO: check for new message to be displayed
});

test('display message from other user', async ({ page: firstSessionPage, browser }) => {
  await firstSessionPage.goto('http://localhost:3030/');

  const secondSessionPage = await browser.newPage();
  await secondSessionPage.goto('http://localhost:3030/');

  await expect(firstSessionPage.getByPlaceholder('Message')).toBeVisible();
  await expect(secondSessionPage.getByPlaceholder('Message')).toBeVisible();

  await firstSessionPage.getByPlaceholder('Message').fill('hello world');
  await firstSessionPage.getByText('SEND').click();

  // TODO: check for new message to be displayed
});

test('test with mocked api', async ({ page }) => {
  // TODO: Mock API Requests

  await page.goto('http://localhost:3030/');

  await expect(page.getByPlaceholder('Message')).toBeVisible();

  // TODO: check for new message with mocked api
});
