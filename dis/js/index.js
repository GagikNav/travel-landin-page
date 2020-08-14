// alert('from index');
const dotenv = require('dotenv').config();
//get data from OpenWeather API Function
//
const ApiID = process.env['unsplash_Api'];
const baseURL = `https://api.unsplash.com/search/collections?page=2&query=travel&client_id=${ApiID}`;

async function getData(url) {
	const respond = await fetch(url);
	try {
		const data = await respond.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error('error', error);
	}
}
// getData(baseURL);
