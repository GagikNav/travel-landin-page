const d = document;

function partners() {
	const carouselSlide = d.querySelector('.slide');
	const carouselImages = d.querySelectorAll('.slide img');

	const prevBtn = d.querySelector('#prevBtn');
	const nextBtn = d.querySelector('#nextBtn');

	let counter = 0;

	const size = carouselImages[0].clientWidth;
	carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

	// button Listener

	nextBtn.addEventListener('click', () => {
		if (counter >= carouselImages.length - 1) {
			return;
		}
		prevBtn.classList.remove('hidden');
		carouselSlide.style.transition = 'transform 1s ease-in-out';
		counter++;
		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
	});

	prevBtn.addEventListener('click', () => {
		if (counter <= 0) {
			return;
		}
		nextBtn.classList.remove('hidden');
		carouselSlide.style.transition = 'transform 1s ease-in-out';
		counter--;
		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
	});

	carouselSlide.addEventListener('transitionend', () => {
		/*
		///! this code will be used when we want infinite carousel
	
		if (carouselImages[counter].id === 'lastClone') {
			carouselSlide.style.transition = 'none';
			counter = carouselImages.length - 2;
			carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
		}
		*/
		if (counter <= 0) {
			prevBtn.classList.add('hidden');
		}
		/*
		///! this code will be used when we want infinite carousel
	
		if (carouselImages[counter].id === 'firstClone') {
			carouselSlide.style.transition = 'none';
			counter = carouselImages.length - counter;
			carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
		}
	*/
		if (counter + 4 > carouselImages.length) {
			nextBtn.classList.add('hidden');
		}
	});
}

// Card section

function cards() {
	const carouselSlide = d.querySelector('.cards');
	const carouselImages = d.querySelectorAll('.cards img');

	const prevBtn = d.querySelector('#prevBtnCard');
	const nextBtn = d.querySelector('#nextBtnCard');

	let counter = 0;

	const size = carouselImages[0].clientWidth;
	carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

	// button Listener

	nextBtn.addEventListener('click', () => {
		if (counter >= carouselImages.length - 1) {
			return;
		}
		prevBtn.classList.remove('hidden');
		carouselSlide.style.transition = 'transform 0.5s ease-in-out';
		counter++;
		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
	});

	prevBtn.addEventListener('click', () => {
		if (counter <= 0) {
			return;
		}
		nextBtn.classList.remove('hidden');
		carouselSlide.style.transition = 'transform 0.5s ease-in-out';
		counter--;
		carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
	});

	carouselSlide.addEventListener('transitionend', () => {
		/*
		///! this code will be used when we want infinite carousel
	
		if (carouselImages[counter].id === 'lastClone') {
			carouselSlide.style.transition = 'none';
			counter = carouselImages.length - 2;
			carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
		}
		*/
		if (counter <= 0) {
			prevBtn.classList.add('hidden');
		}
		/*
		///! this code will be used when we want infinite carousel
	
		if (carouselImages[counter].id === 'firstClone') {
			carouselSlide.style.transition = 'none';
			counter = carouselImages.length - counter;
			carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
		}
	*/
		if (counter + 2 > carouselImages.length) {
			nextBtn.classList.add('hidden');
		}
	});
}

partners();
cards();

/* 
		End of carousel section 

*/

//get data from OpenWeather API Function
//

require('dotenv');
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
