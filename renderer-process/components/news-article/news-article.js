export class NewsArticle extends HTMLElement{

    constructor(newsValue){
        super();
        this.classList.add('news-article');
        this.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), transparent) ,url(${newsValue.image})`;

        const title = document.createElement('span');
        title.classList.add('news-article__title');
        title.innerText = newsValue.title;

        this.appendChild(title);
    }
    
}

customElements.define('app-news-article', NewsArticle);