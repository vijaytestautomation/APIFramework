const { test, expect } = require('@playwright/test');

const endpoints = require('../support/api-endpoints');
const apiConfig = require('../support/api-config');
const Utils = require('../support/utils');

const env = process.env.ENV || 'tst';

if (!apiConfig[env]) {
	throw new Error(`Environment configuration for '${env}' is not defined in api-config.`);
}

const { headers } = apiConfig[env];

test.describe('API Testing with Reqres.in', () => {

	const utils = new Utils();

	test('Create User', async ({ request }) => {
		const { name, job } = await utils.generateRandomName();
		const payload = {
			name,
			job
		};

		// Make the API request
		const dataResponse = await request.post(
			`${endpoints.createUser}`,
			{
				headers,
				data: payload
			}
		);

		// Check if the data response is OK
		await expect(dataResponse.status()).toBe(201);
		const responseBody = await dataResponse.json();
		console.log(responseBody);

		expect(responseBody).toHaveProperty('name', name);
		expect(responseBody).toHaveProperty('job', job);
		expect(responseBody).toHaveProperty('id');

		test.info().annotations.push({
			type: 'Status Code',
			description: `Received status code: ${dataResponse.status()}`,
		});

	});

});
