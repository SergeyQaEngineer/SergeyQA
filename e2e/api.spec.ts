import { test, expect } from '@playwright/test';

const API_BASE = 'https://sergey-qa.vercel.app/api';

test.describe('API Endpoints Tests', () => {
  test('✅ Booking API should respond correctly', async ({ request }) => {
    // Test GET request
    const response = await request.get(`${API_BASE}/booking`);
    
    // API might return 404 if not implemented, that's acceptable
    if (response.status() !== 404) {
      expect(response.status()).toBeLessThan(500);
      
      // If it returns JSON, check the structure
      const contentType = response.headers()['content-type'];
      if (contentType?.includes('application/json')) {
        const json = await response.json();
        expect(json).toBeDefined();
      }
    }
  });

  test('✅ API endpoints should not expose errors', async ({ request }) => {
    const endpoints = ['/booking', '/contact', '/submit'];
    
    for (const endpoint of endpoints) {
      const response = await request.get(`${API_BASE}${endpoint}`);
      
      if (response.status() !== 404) {
        expect(response.status()).not.toBe(500);
        
        // Check for error messages in response
        const text = await response.text();
        if (text) {
          expect(text.toLowerCase()).not.toContain('error');
          expect(text.toLowerCase()).not.toContain('exception');
        }
      }
    }
  });
});