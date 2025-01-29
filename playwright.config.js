// @ts-check
const path = require('path');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	retries: 1,
	workers: 1,
	reporter: [['html', { outputFolder: 'playwright-report/html', open: 'on-failure' }]],	
	timeout: 30 * 1000,
	expect: {
		timeout: 15 * 1000
	},
	projects: [
		{
			name: 'API',
			use:{								
				viewport: { width: 1280, height: 720 },
				headless: false,
				browserName: 'chromium',
				launchOptions: { headless: false },
				ignoreHTTPSErrors: true,
				screenshot: 'only-on-failure',
			},
			testDir: path.resolve(__dirname, './tests')
		}		
	]	
};


module.exports = config;