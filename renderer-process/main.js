import { NewsArticle } from './components/news-article/news-article.js';

const header = document.querySelector('div.header-news__container');

const carouselItemCount = 2;
let carouselItemStart = 0;
let articles;

fetch('http://localhost:3000/news.json')
    .then(serverResponse => serverResponse.text())
    .then(responseText => { 
        const data = JSON.parse(responseText);
        articles = data.articles;
        populateNewsCarousel(data.articles, carouselItemStart);
    });

function populateNewsCarousel(news, startAt){
    header.innerText = '';
    for(let i = startAt; i < startAt + carouselItemCount; i++){
        const newsValue = news[i];
        const newsArticle = new NewsArticle();
        header.appendChild(newsArticle.createDivForNews(newsValue));
    }
    checkButtonsVisibilty();
}   

//2.domácí úkol
function checkButtonsVisibilty(){
    buttonRight.hidden = carouselItemStart >= (articles.length - carouselItemCount);
    buttonLeft.hidden = carouselItemStart == 0;
}

const buttonLeft = document.querySelector('#carousel-button-left');
const buttonRight = document.querySelector('#carousel-button-right');

buttonLeft.addEventListener('click', () => {
    carouselItemStart --;
    populateNewsCarousel(articles, carouselItemStart);
});
buttonRight.addEventListener('click', () => {
    carouselItemStart ++;
    populateNewsCarousel(articles, carouselItemStart);
});


// 1.domácí úkol
const section = document.querySelector('section.main-content');

for(let i = 1; i <= 31; i++){
    const day = document.createElement('div');
    day.innerText = i;
    day.classList.add('main-content__day');
    section.appendChild(day);
}