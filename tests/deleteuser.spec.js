const { test, expect } = require('@playwright/test');

const endpoints = require('../support/api-endpoints');
const apiConfig = require('../support/api-config');

const env = process.env.ENV || 'tst';

if (!apiConfig[env]) {
	throw new Error(`Environment configuration for '${env}' is not defined in api-config.`);
}

const { headers } = apiConfig[env];

test.describe('API Testing with Reqres.in', () => {

	test('Delete User ', async ({ request }) => {

		// Make the API request
		const dataResponse = await request.delete(
			`${endpoints.updateUser}`,
			{
				headers,
			}
		);

		// Check if the data response is OK
		await expect(dataResponse.status()).toBe(204);

		test.info().annotations.push({
			type: 'Status Code',
			description: `Received status code: ${dataResponse.status()}`,
		});

	});

});
