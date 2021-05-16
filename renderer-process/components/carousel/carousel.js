import { NewsArticle } from '../news-article/news-article.js';

export class Carousel extends HTMLElement{

    constructor(){
       super(); 
       this.carouselItemCount = 2;
       this.carouselItemStart = 0;
       this.innerHTML = `<header class="header-news"> 
        <div class="header-news__container"> 
        </div>
        <button id="carousel-button-left">
            <i class="fas fa-chevron-left"></i>
            </button>
        <button id="carousel-button-right" class="last">
            <i class="fas fa-chevron-right"></i>
            </button>
            </header>`
       ;
       this.header = document.querySelector('div.header-news__container');
       this.buttonRight = document.querySelector('#carousel-button-right');
       this.buttonLeft = document.querySelector('#carousel-button-left');
    }

    populateNewsCarousel(news){
        this.header.innerText = '';
        for(let i = this.carouselItemStart; i < this.carouselItemStart + this.carouselItemCount; i++){
            const newsValue = news[i];
            const newsArticle = new NewsArticle(newsValue);
            this.header.appendChild(newsArticle);
        }
        this.checkButtonsVisibilty(news.length);
    }   

    checkButtonsVisibilty(length){
        this.buttonRight.hidden = this.carouselItemStart >= (length - this.carouselItemCount);
        this.buttonLeft.hidden = this.carouselItemStart == 0;
    }

    browseTheCarousel(articles){
        this.buttonLeft.addEventListener('click', () => {
            this.carouselItemStart --;
            this.populateNewsCarousel(articles);
        });
        
        this.buttonRight.addEventListener('click', () => {
            this.carouselItemStart ++;
            this.populateNewsCarousel(articles);
        });
    }
    
}

customElements.define('app-carousel', Carousel);