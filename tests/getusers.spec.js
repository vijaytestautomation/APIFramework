const { test, expect } = require('@playwright/test');

const endpoints = require('../support/api-endpoints');
const apiConfig = require('../support/api-config');

const env = process.env.ENV || 'tst';

if (!apiConfig[env]) {
	throw new Error(`Environment configuration for '${env}' is not defined in api-config.`);
}

const { headers } = apiConfig[env];

test.describe('API Testing with Reqres.in', () => {

	test('GET Users - Page 2', async ({ request }) => {

		// Make the API request
		const dataResponse = await request.get(
			`${endpoints.getUsers}`,
			{
				headers,
			}
		);

		// Check if the data response is OK
		await expect(dataResponse.status()).toBe(200);
		const responseBody = await dataResponse.json();
		console.log(responseBody);
		await expect(responseBody.page).toBe(2); // Validate the page number
		await expect(responseBody.data).toBeDefined(); // Ensure data exists

		// Validate structure of one user object
		expect(responseBody.data[0]).toHaveProperty('id');
		expect(responseBody.data[0]).toHaveProperty('email');
		expect(responseBody.data[0]).toHaveProperty('first_name');
		expect(responseBody.data[0]).toHaveProperty('last_name');
		expect(responseBody.data[0]).toHaveProperty('avatar');

		test.info().annotations.push({
			type: 'Status Code',
			description: `Received status code: ${dataResponse.status()}`,
		});

	});

});
