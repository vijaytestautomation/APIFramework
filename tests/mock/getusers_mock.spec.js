const { test, expect } = require('@playwright/test');

const endpoints = require('../../support/api-endpoints');
const apiConfig = require('../../support/api-config');

const env = process.env.ENV || 'tst';

if (!apiConfig[env]) {
	throw new Error(`Environment configuration for '${env}' is not defined in api-config.`);
}

const { headers } = apiConfig[env];

test.describe('API Testing with Reqres.in - Mocked Request', () => {
	// Mock test
	test('Mock GET Users - Page 2', async ({ page }) => {

		// Intercept the request and provide a mock response
		await page.route(`${endpoints.getUsers}`, async route => {
			console.log('Intercepted request:', route.request().url());
			await route.fulfill({
				status: 200,
				contentType: 'application/json',
				body: JSON.stringify({
					page: 2,
					data: [
						{
							id: 1,
							email: 'mockuser1@example.com',
							first_name: 'Mock',
							last_name: 'User1',
							avatar: 'https://mock.avatar/1.jpg',
						},
					],
				}),
			});
		});

		// Navigate to a blank page (to activate the page context)
		await page.goto('about:blank');

		// Make the mocked API request
		const dataResponse = await page.evaluate(async ({ url, headers }) => {
			const response = await fetch(url, {
				method: 'GET',
				headers,
			});

			const body = await response.json();
			return { status: response.status, body };
		}, { url: `${endpoints.getUsers}`, headers });

		// Check if the data response is OK
		await expect(dataResponse.status).toBe(200);
		await expect(dataResponse.body.page).toBe(2); // Validate the page number
		await expect(dataResponse.body.data[0].email).toBe('mockuser1@example.com');

		test.info().annotations.push({
			type: 'Status Code',
			description: `Received status code: ${dataResponse.status} for Mock request`,
		});
	});

});
