import { NewsArticle } from '../news-article/news-article.js';

export class Carousel {

    constructor(carouselItemCount, carouselItemStart, header, buttonRight, buttonLeft){
       this.carouselItemCount = carouselItemCount;
       this.carouselItemStart = carouselItemStart;
       this.header = header;
       this.buttonRight = buttonRight;
       this.buttonLeft = buttonLeft;
    }

    populateNewsCarousel(news){
        this.header.innerText = '';
        for(let i = this.carouselItemStart; i < this.carouselItemStart + this.carouselItemCount; i++){
            const newsValue = news[i];
            const newsArticle = new NewsArticle();
            this.header.appendChild(newsArticle.createDivForNews(newsValue));
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