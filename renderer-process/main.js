import { NewsArticle } from './components/news-article/news-article.js';
import { Carousel } from './components/carousel/carousel.js';
import { Day } from './components/day/day.js';


let articles;

const carousel = document.querySelector('app-carousel');

fetch('http://localhost:3000/news.json')
    .then(serverResponse => serverResponse.text())
    .then(responseText => { 
        const data = JSON.parse(responseText);
        articles = data.articles;
        carousel.populateNewsCarousel(data.articles);
        carousel.browseTheCarousel(data.articles);
    });


// 1.domácí úkol
const section = document.querySelector('section.main-content');

/*
for(let i = 1; i <= 31; i++){
    const day = document.createElement('div');
    day.innerText = i;
    day.classList.add('main-content__day');
    section.appendChild(day);
}
*/



for(let i = 1; i < 31; i++){
    const day = new Day(i);
    section.appendChild(day);
}