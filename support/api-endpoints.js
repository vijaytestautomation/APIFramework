/**
 * api-endpoints.js
 * This file defines the endpoint paths for easy access
 */
const apiConfig = require('./api-config');
const env = process.env.ENV || 'tst';

if (!apiConfig[env]) {
	throw new Error(`Environment configuration for '${env}' is not defined in api-config.`);
}

const { baseURL } = apiConfig[env];

const apiEndpoints = {

	getUsers: `${baseURL}/users?page=2`,
	createUser: `${baseURL}/users`,
	updateUser: `${baseURL}/users/2`, // used for PUT/PATCH/DELETE
};

module.exports = apiEndpoints;