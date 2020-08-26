'use strict';

require('dotenv');
const $ = require('jquery');

//
$('#navBtn').click(function () {
	$('#navBtn').toggleClass('close');
	$('ul').toggleClass('hide-navbar');
	$('.blocker').toggleClass('on');
});
//
// closing Menu  with outside click
//  div with class of blocker added in order to maintain outside click event
// when the menu is open
$('.blocker').click(() => {
	if ($('#navBtn').hasClass('close')) {
		toggleMenu();
		$('.blocker').toggleClass('on');
	}
});

function toggleMenu() {
	$('#navBtn').toggleClass('close');
	$('ul').toggleClass('hide-navbar');
}

//
// Swiper Carousel
const Swiper = require('../../node_modules/swiper/swiper-bundle');

const mySwiper = new Swiper(' #partner', {
	roundLengths: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	direction: 'horizontal',
	slidesPerView: '4',
	speed: 800,
	loop: true,
	grabCursor: true,
	spaceBetween: 50,
	freeMode: true,
	centeredSlides: true,
	breakpoints: {
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		200: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
	},
});

const mySwiper1 = new Swiper('#pop-trip-cards', {
	direction: 'horizontal',
	loop: false,
	slidesPerView: 4,
	spaceBetween: 20,
	breakpoints: {
		1024: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		800: {
			slidesPerView: 2,
			spaceBetween: 5,
		},
		200: {
			slidesPerView: 2,
			spaceBetween: 5,
		},
	},
	grabCursor: true,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
});

//
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
