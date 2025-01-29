const { test, expect } = require('@playwright/test');

const endpoints = require('../../support/api-endpoints');
const apiConfig = require('../../support/api-config');
const Utils = require('../../support/utils');

const env = process.env.ENV || 'tst';

if (!apiConfig[env]) {
	throw new Error(`Environment configuration for '${env}' is not defined in api-config.`);
}

const { headers } = apiConfig[env];

test.describe('API Testing with Reqres.in - Mocked Request', () => {
	const utils = new Utils();

	// Mock test
	test('Mock CREATE Users', async ({ page }) => {

		const { name, job } = await utils.generateRandomName();
		const payload = {
			name,
			job
		};

		// Intercept the request and provide a mock response
		await page.route(`${endpoints.createUser}`, async route => {
			console.log('Intercepted request:', route.request().url());
			await route.fulfill({
				status: 201,
				contentType: 'application/json',
				body: JSON.stringify({
					data: [
						{
							name: payload.name,
							job: payload.job,
						},
					],
				}),
			});
		});

		// Navigate to a blank page (to activate the page context)
		await page.goto('about:blank');

		// Make the mocked API request
		const dataResponse = await page.evaluate(async ({ url, headers, payload }) => {
			const response = await fetch(url, {
				method: 'POST',
				headers,
				body: JSON.stringify(payload),
			});

			const responseBody = await response.json();
			return { status: response.status, body: responseBody };
		}, { url: `${endpoints.createUser}`, headers, body: payload });

		// Check if the data response is OK
		await expect(dataResponse.status).toBe(201);
		await expect(dataResponse.body.data[0]).toHaveProperty('name', payload.name);

		test.info().annotations.push({
			type: 'Status Code',
			description: `Received status code: ${dataResponse.status} for Mock request`,
		});
	});

});
