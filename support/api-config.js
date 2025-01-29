/**
 * api-config.js
 * This file will include common configurations for API requests
 */

const apiConfig = {
	tst: {
		baseURL: 'https://reqres.in/api',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		timeout: 30000
	},
	prod: {
		// To-Do
	},

};

module.exports = apiConfig;