const { TouchBarScrubber } = require("electron");

const header = document.querySelector('div.header-news__container');

const carouselItemCount = 2;
let carouselItemStart = 0;
let articles;

function createDivForNews(newsValue){

    const newsArticle = document.createElement('div');
    newsArticle.classList.add('news-article');
    newsArticle.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), transparent) ,url(${newsValue.image})`;

    const title = document.createElement('span');
    title.classList.add('news-article__title');
    title.innerText = newsValue.title;

    newsArticle.appendChild(title);
    return newsArticle;
}

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
        header.appendChild(createDivForNews(newsValue));
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


const automobil = {
  pocetMistKSezeni: 5,
  barva: 'cervena'
}

console.log(automobil.barva);
/*
class Ptak {

    constructor(zvuk){
       this.zvuk = zvuk;
    }
    vydejZvuk(){
        console.log(this.zvuk);
    }
}

const kacer = new Ptak('kvakva');
kacer.vydejZvuk();*/






// 1.domácí úkol
const section = document.querySelector('section.main-content');

for(let i = 1; i <= 31; i++){
    const day = document.createElement('div');
    day.innerText = i;
    day.classList.add('main-content__day');
    section.appendChild(day);
}