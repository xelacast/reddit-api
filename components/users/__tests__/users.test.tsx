import { expect, test } from '@playwright/test';

test.describe('Users Test', () => {
  test.beforeEach(({ page }) => {
    page.goto('http://localhost:3000/users');
  });
  test('Tests Page Load', async ({ page }) => {
    const title = page.locator('data-testid=user-title');
    expect((await title.innerText()).valueOf()).toBe('Elon_Musk');
  });
  test('Tests User Input', async ({ page }) => {
    const title = page.locator('data-testid=user-title');

    const input = page.locator('id=input-box');
    await input.type('Jhuiice');
    await input.press('Enter');

    expect((await input.innerText()).valueOf()).toBe('');
    expect((await title.innerText()).valueOf()).toBe('Jhuiice');
  });
  test('Tests No Accoutn Found Failure', async ({ page }) => {
    const title = page.locator('data-testid=user-title');

    const input = page.locator('id=input-box');
    await input.type('asdfaghcsd');
    await input.press('Enter');

    expect((await input.innerText()).valueOf()).toBe('');
    expect((await title.innerText()).valueOf()).toBe('404');
  });
});
