import { test, expect } from '@playwright/test';

test.describe('Premium IT Services Website', () => {
    test('should navigate to the home page', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Premium IT Services/);
        await expect(page.getByText('Transforming Business')).toBeVisible();
    });

    test('should navigate to the services page', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: 'Services' }).first().click();
        await expect(page).toHaveURL(/.*services/);
        await expect(page.getByRole('heading', { name: 'Our Services' })).toBeVisible();
    });

    test('should submit the contact form', async ({ page }) => {
        await page.goto('/contact');

        await page.getByLabel('First Name').fill('John');
        await page.getByLabel('Last Name').fill('Doe');
        await page.getByLabel('Email').fill('john@example.com');
        await page.getByLabel('Message').fill('This is a test message.');

        await page.getByRole('button', { name: 'Send Message' }).click();

        await expect(page.getByText('Message Sent!')).toBeVisible();
    });

    test('should view a career detail page', async ({ page }) => {
        await page.goto('/careers');
        // Assuming there is at least one job listed
        const firstJobLink = page.locator('a[href^="/careers/"]').first();
        await firstJobLink.click();

        await expect(page.getByRole('button', { name: 'Apply for this Position' })).toBeVisible();
    });
});
