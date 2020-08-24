'use strict';

require('dotenv');
const $ = require('jquery');

const config = {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  autoplay: 10000,
  animationDuration: 800,
  animationTimingFunc: 'ease-in',
  breakpoints: {
    1024: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
  peek: {
    before: 50,
    after: 20,
  },
};
new Glide('.glide', config).mount();

//

$('#navBtn').click(function () {
  $('ul').toggleClass('hide-navbar');
  $(this).toggleClass('close');
});

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
