import { readFile } from 'node:fs/promises';
import { expect, test } from '@playwright/test';

test('the portfolio pipeline navigates to projects and the archive can open', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Christian Guerrero', level: 1 })).toBeVisible();

  const pipeline = page.getByRole('navigation', { name: 'Portfolio pipeline' });
  const projects = pipeline.getByRole('link', { name: /Build.*Projects/ });
  await projects.click();
  await expect(page).toHaveURL(/#portfolio$/);
  await expect(projects).toHaveAttribute('aria-current', 'step');
  await expect(page.getByRole('heading', { name: 'AI Agent Security Lab' })).toBeVisible();

  const archivedProject = page.getByRole('heading', { name: 'Infrastructure Automation', includeHidden: true });
  await expect(archivedProject).toBeHidden();
  await page.getByText('More engineering projects', { exact: true }).click();
  await expect(archivedProject).toBeVisible();
});

test('the CV link downloads a PDF', async ({ page }) => {
  await page.goto('/');
  const [download] = await Promise.all([
    page.waitForEvent('download', { timeout: 5_000 }),
    page.getByRole('link', { name: 'Download CV' }).click(),
  ]);

  expect(download.suggestedFilename()).toBe('CV-Christian-Guerrero.pdf');
  const file = await readFile(await download.path());
  expect(file.subarray(0, 5).toString('ascii')).toBe('%PDF-');
});

test('the terminal completes its demo and can replay it', async ({ page }) => {
  await page.goto('/');
  const terminal = page.getByRole('region', { name: 'Simulated terminal deployment' });
  await terminal.scrollIntoViewIfNeeded();
  const ready = terminal.getByRole('status');
  await expect(ready).toContainText('System ready', { timeout: 15_000 });
  await expect(terminal.getByText('kubectl get pods', { exact: true })).toBeVisible();

  await terminal.getByRole('button', { name: 'Replay deployment demo' }).click();
  await expect(ready).toBeHidden();
  await expect(terminal.getByText('kubectl get pods', { exact: true })).toBeHidden();
});

test('reduced motion shows the completed terminal output immediately', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const terminal = page.getByRole('region', { name: 'Simulated terminal deployment' });

  await expect(terminal.getByRole('status')).toContainText('System ready');
  await expect(terminal.getByText('kubectl get pods', { exact: true })).toBeVisible();
  await expect(terminal.getByRole('button', { name: 'Replay deployment demo' })).toBeHidden();
});

test.describe('mobile portfolio', () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });

  test('keyboard users can skip content, dismiss the menu and navigate', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Christian Guerrero', level: 1 })).toBeVisible();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('main')).toBeFocused();

    const openMenu = page.getByRole('button', { name: 'Open menu' });
    const closeMenu = page.getByRole('button', { name: 'Close menu' });
    const navigation = page.getByRole('navigation', { name: 'Main navigation' });
    await openMenu.press('Enter');
    await expect(closeMenu).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(openMenu).toBeFocused();
    await expect(navigation).toBeHidden();

    await openMenu.click();
    await navigation.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/#contact$/);
    await expect(navigation).toBeHidden();
    await expect(page.getByRole('heading', { name: 'Get in touch' })).toBeInViewport();
  });
});
