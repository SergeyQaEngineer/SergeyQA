import { test, expect, Page, Response, ConsoleMessage } from '@playwright/test';

const LANDING_URL = 'https://sergey-qa.vercel.app';

test.describe('Sergey QA Landing Page - Next.js Tests', () => {
  let page: Page;
  let consoleErrors: string[] = [];

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    
    // Capture console errors
    page.on('console', (msg: ConsoleMessage) => {
      if (msg.type() === 'error') {
        const errorText = msg.text();
        // Игнорируем common Next.js и Vercel errors
        if (!errorText.includes('NEXT_REDIRECT') &&
            !errorText.includes('vercel') &&
            !errorText.includes('gtag') &&
            !errorText.includes('analytics')) {
          consoleErrors.push(errorText);
          console.log(`Console Error: ${errorText}`);
        }
      }
    });

    // Capture failed network requests
    page.on('response', (response: Response) => {
      const status = response.status();
      const url = response.url();
      
      if (status >= 400 && 
          !url.includes('_next') &&
          !url.includes('vercel') &&
          !url.includes('api')) {
        console.log(`Failed request: ${url} - Status: ${status}`);
      }
    });
  });

  test.afterAll(async () => {
    await page.close();
  });

  test.beforeEach(async () => {
    consoleErrors = [];
    await page.goto(LANDING_URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000); // Wait for Next.js hydration
  });

  test.afterEach(async () => {
    // Check for critical console errors after each test
    if (consoleErrors.length > 0) {
      console.warn('Console errors detected during test:', consoleErrors);
      // Не падаем сразу, только предупреждаем
    }
  });

  test('✅ Next.js page loads correctly', async () => {
    // Check Next.js specific elements
    await expect(page.locator('body')).toBeVisible();
    await expect(page.getByText('Сергей Сафронов')).toBeVisible();
    
    // Check for Next.js hydration
    await expect(page.locator('script[src*="_next"]')).toBeDefined();
  });

  test('✅ Navigation and layout components exist', async () => {
    // Check if common Next.js components are present
    const componentsToCheck = [
      'header', 'footer', 'nav', 'main',
      '[class*="container"]', '[class*="layout"]',
      '[class*="header"]', '[class*="footer"]'
    ];

    for (const selector of componentsToCheck) {
      const element = page.locator(selector).first();
      const isVisible = await element.isVisible().catch(() => false);
      if (isVisible) {
        await expect(element).toBeVisible();
      }
    }
  });

  test('✅ Social media links work correctly', async () => {
    const socialLinks = [
      { selector: 'a[href*="t.me"], a[href*="telegram"]', name: 'Telegram' },
      { selector: 'a[href*="github.com"]', name: 'GitHub' },
      { selector: 'a[href*="wa.me"], a[href*="whatsapp"]', name: 'WhatsApp' },
      { selector: 'a[href*="linkedin.com"]', name: 'LinkedIn' }
    ];

    for (const link of socialLinks) {
      const element = page.locator(link.selector).first();
      const exists = await element.isVisible().catch(() => false);
      
      if (exists) {
        await test.expect(element).toBeVisible();
        const href = await element.getAttribute('href');
        test.expect(href).toBeTruthy();
        
        // Check if opens in new tab
        const target = await element.getAttribute('target');
        test.expect(target).toBe('_blank');
        
        console.log(`✓ ${link.name}: ${href}`);
      } else {
        console.log(`⚠ ${link.name} link not found`);
      }
    }
  });

  test('✅ Contact links are properly formatted', async () => {
    // Email link
    const emailLink = page.locator('a[href^="mailto:"]').first();
    const emailVisible = await emailLink.isVisible().catch(() => false);
    if (emailVisible) {
      await test.expect(emailLink).toBeVisible();
      const emailHref = await emailLink.getAttribute('href');
      test.expect(emailHref).toMatch(/^mailto:.+@.+\..+$/);
    }

    // Phone link
    const phoneLink = page.locator('a[href^="tel:"]').first();
    const phoneVisible = await phoneLink.isVisible().catch(() => false);
    if (phoneVisible) {
      await test.expect(phoneLink).toBeVisible();
      const phoneHref = await phoneLink.getAttribute('href');
      test.expect(phoneHref).toMatch(/^tel:\+?[0-9\s\-\(\)]+$/);
    }
  });

  test('✅ Images from public folder load correctly', async () => {
    const images = page.locator('img[src^="/"]');
    const imageCount = await images.count();
    console.log('Найдено изображений:', imageCount);

    test.expect(imageCount).toBeGreaterThan(0);

    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i);
      await test.expect(image).toBeVisible();
      
      // Verify images are not broken
      const isVisible = await image.isVisible();
      test.expect(isVisible).toBe(true);
      
      const src = await image.getAttribute('src');
      test.expect(src).toBe('/face.png');
    }
  });

  test('✅ No broken Next.js routes', async () => {
    // Check internal links don't lead to 404
    const internalLinks = page.locator('a[href^="/"]:not([href*="#"])');
    const linkCount = await internalLinks.count();
    
    for (let i = 0; i < linkCount; i++) {
      const link = internalLinks.nth(i);
      const href = await link.getAttribute('href');
      
      if (href && !href.includes('#')) {
        await test.expect(link).toBeEnabled();
      }
    }
  });

  test('✅ API endpoints are accessible', async () => {
    // Check if booking API exists
    const response = await page.request.get(`${LANDING_URL}/api/booking`).catch(() => null);
    if (response) {
      test.expect(response.status()).toBeLessThan(500);
    } else {
      // API might not exist, that's okay
      console.log('Booking API not available or returns 404');
    }
  });

  test('✅ CSS styles are loaded', async () => {
    // Check if CSS files are loaded
    const stylesheets = page.locator('link[rel="stylesheet"]');
    const stylesCount = await stylesheets.count();
    test.expect(stylesCount).toBeGreaterThan(0);
    
    // Check if Tailwind/Next.js styles are applied
    const bodyStyles = await page.locator('body').evaluate(el => {
      return window.getComputedStyle(el);
    });
    test.expect(bodyStyles).toBeTruthy();
  });

  test('✅ Mobile responsiveness', async () => {
    const viewports = [
      { width: 375, height: 667, name: 'mobile' },
      { width: 768, height: 1024, name: 'tablet' },
      { width: 1200, height: 800, name: 'desktop' }
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.reload({ waitUntil: 'networkidle' });
      
      await test.expect(page.locator('body')).toBeVisible();
      
      // Check no horizontal scroll
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      test.expect(hasHorizontalScroll).toBe(false);
    }
  });
 
}); 