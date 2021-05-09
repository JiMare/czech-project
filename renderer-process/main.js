import { NewsArticle } from './components/news-article/news-article.js';
import { Carousel } from './components/carousel/carousel.js';


const carousel = new Carousel(2, 0, document.querySelector('div.header-news__container'),document.querySelector('#carousel-button-right'),
document.querySelector('#carousel-button-left'));

let articles;

fetch('http://localhost:3000/news.json')
    .then(serverResponse => serverResponse.text())
    .then(responseText => { 
        const data = JSON.parse(responseText);
        articles = data.articles;
        carousel.populateNewsCarousel(data.articles);
    });


carousel.buttonLeft.addEventListener('click', () => {
    carousel.carouselItemStart --;
    carousel.populateNewsCarousel(articles);
});

carousel.buttonRight.addEventListener('click', () => {
    carousel.carouselItemStart ++;
    carousel.populateNewsCarousel(articles);
});


// 1.domácí úkol
const section = document.querySelector('section.main-content');

for(let i = 1; i <= 31; i++){
    const day = document.createElement('div');
    day.innerText = i;
    day.classList.add('main-content__day');
    section.appendChild(day);
}