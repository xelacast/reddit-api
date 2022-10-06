import { test, expect } from '@playwright/test';

test.describe('Routes Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });
  test('Dashboard Navigation', async ({ page }) => {
    await page.locator('data-testid=Dashboard').click();
    await expect(page).toHaveURL('http://localhost:3000');
  });
  test('Subreddits Navigation', async ({ page }) => {
    await page.locator('data-testid=Subreddits').click();
    await expect(page).toHaveURL('http://localhost:3000/subreddits');
  });
  test('Users Navigation', async ({ page }) => {
    await page.locator('data-testid=Users').click();
    await expect(page).toHaveURL('http://localhost:3000/users');
  });
});
