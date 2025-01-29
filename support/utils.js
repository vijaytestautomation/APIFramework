const faker = require('faker');

class Utils {
	constructor(page){
		this.page = page;
	}

	/*
	Generic function to generate random number
	*/
	async generateRandomNumber(length){
		let result = '';
		const characters = '0123456789';
		const charactersLength = characters.length;

		for (let i = 0; i < length; i++){
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	/**
	 * Generic function to generate random password
	 * with at least 1 number
	 */
	async generateRandomPassword(length){
		let result = '';
		let hasNumber = false;
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;

		for (let i = 0; i < length; i++){
			// Add at least one number
			if (!hasNumber && i == Math.floor(Math.random() * length)){
				result += characters.charAt(Math.floor(Math.random() * 10) + 52);
				hasNumber = true;
			} else {
				result += characters.charAt(Math.floor(Math.random() * charactersLength));
			}
		}
		return result;
	}

	/*
	Generic function to generate random address using `faker` library
	*/
	async generateRandomAddress(){
		const streetAddress = faker.address.streetAddress();
		const city = faker.address.city();
		return { streetAddress, city };
	}

	/*
	Generic function to generate random email using `faker` library
	*/
	async generateRandomEmail(){
		const name = faker.name.findName();
		const email = faker.internet.email(name);
		return email;
	}

	/*
	Generic function to generate random name and Job title using `faker` library
	*/
	async generateRandomName(){
		const name = faker.name.findName();
		const job = faker.name.jobTitle();
		return { name, job };
	}

	/*
	Generic function to set a promise based timeouts
	*/
	async delay(timeout){
		return new Promise((resolve) => {
			setTimeout(resolve, timeout);
		});
	}

}

module.exports = Utils;
