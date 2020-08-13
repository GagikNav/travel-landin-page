// alert('from index');

//get data from OpenWeather API Function
//
const ApiID = 'q9SYi9K3mCRKTrPUqFa9vvjPNW1zOJjM54E80UddPZo'; // process.env.unsplash_Api
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
