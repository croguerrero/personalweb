import { expect, test } from '@playwright/test';

test('the architecture page explains delivery and the request preview can stop and finish', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /How this site is deployed/ }).click();
  await expect(page).toHaveURL(/\/architecture\.html$/);
  await expect(page.getByRole('heading', { name: 'Site architecture' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'DNS resolution' })).toBeVisible();

  const delivery = page.getByRole('region', { name: 'HTTPS and CDN caches' });
  await expect(delivery.getByRole('checkbox', { name: 'Sound' })).not.toBeChecked();
  const preview = delivery.getByRole('button', { name: 'Play preview' });
  const status = delivery.getByRole('status');

  await preview.click();
  await expect(delivery.getByRole('button', { name: 'Stop preview' })).toBeVisible();
  await delivery.getByRole('button', { name: 'Stop preview' }).click();
  await expect(status).toHaveText('Preview stopped.');
  await preview.click();
  await expect(status).toContainText('Request complete.', { timeout: 6_000 });
  await expect(preview).toBeVisible();
});

test.describe('mobile architecture without JavaScript', () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, javaScriptEnabled: false });

  test('the diagram fits the viewport and remains readable', async ({ page }) => {
    await page.goto('/architecture.html');
    await expect(page.getByRole('heading', { name: 'GitHub Actions' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Cloudflare authoritative DNS' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Amazon S3 origin' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Play preview' })).toBeHidden();
    await expect.poll(() => page.evaluate(() => (
      document.documentElement.scrollWidth - document.documentElement.clientWidth
    ))).toBe(0);
  });
});
