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
        this.articles = news;
        this.header.innerText = '';
        for(let i = this.carouselItemStart; i < this.carouselItemStart + this.carouselItemCount; i++){
            const newsValue = this.articles[i];
            const newsArticle = new NewsArticle();
            this.header.appendChild(newsArticle.createDivForNews(newsValue));
        }
        this.checkButtonsVisibilty(this.articles.length);
    }   

    checkButtonsVisibilty(length){
        this.buttonRight.hidden = this.carouselItemStart >= (length - this.carouselItemCount);
        this.buttonLeft.hidden = this.carouselItemStart == 0;
    }
}