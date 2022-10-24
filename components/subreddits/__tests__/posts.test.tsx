import { test, expect } from '@playwright/test';

test.describe('Subreddit Test', () => {
  test.beforeEach(({ page }) => {
    page.goto('http://localhost:3000/subreddits');
  });
  test('Test Initial State of Subreddits page', async ({ page }) => {
    const title = (
      await page.locator('data-testid=sub-title').innerText()
    ).valueOf();
    expect(title).toBe('r/AskReddit');
  });
  test('Updates Subreddit state variable', async ({ page }) => {
    const searchInput = page.locator('id=input-box');
    await searchInput.type('java');
    await searchInput.press('Enter');

    const title = (
      await page.locator('data-testid=sub-title').innerText()
    ).valueOf();
    expect(title).toBe('r/java');
  });
  test('Search Banned/Deprecated Subreddit Test', async ({ page }) => {
    const searchInput = page.locator('id=input-box');
    await searchInput.type('asdf');
    await searchInput.press('Enter');

    const title = (
      await page.locator('data-testid=sub-title').innerText()
    ).valueOf();
    expect(title).toBe('404');
  });
  test('Search Uncreated Subreddit Test', async ({ page }) => {
    const searchInput = page.locator('id=input-box');
    await searchInput.type('Jhuiice');
    await searchInput.press('Enter');

    const title = (
      await page.locator('data-testid=sub-title').innerText()
    ).valueOf();
    expect(title).toBe('404');
  });
});
