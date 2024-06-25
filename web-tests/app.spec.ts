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

  await expect(page.getByText('hello world')).toBeVisible();
});

test('display message from other user', async ({ page: firstSessionPage, browser }) => {
  await firstSessionPage.goto('http://localhost:3030/');

  const secondSessionPage = await browser.newPage();
  await secondSessionPage.goto('http://localhost:3030/');

  await expect(firstSessionPage.getByPlaceholder('Message')).toBeVisible();
  await expect(secondSessionPage.getByPlaceholder('Message')).toBeVisible();

  await firstSessionPage.getByPlaceholder('Message').fill('hello world from session one');
  await firstSessionPage.getByText('SEND').click();

  await expect(secondSessionPage.getByText('hello world from session one')).toBeVisible();
});

test('test with mocked api', async ({ page }) => {
  await page.route('**/messages', async route => {
    const json = [{ text: 'hey from api mock 1', id: 0 }, { text: 'hey from api mock 2', id: 1 }];
    await route.fulfill({ json });
  });

  await page.goto('http://localhost:3030/api.html');

  await expect(page.getByText('Message')).toBeVisible();

  await expect(page.getByText('hey from api mock 1')).toBeVisible();
  await expect(page.getByText('hey from api mock 2')).toBeVisible();
});
