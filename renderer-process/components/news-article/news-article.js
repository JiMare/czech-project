export class NewsArticle {

    createDivForNews(newsValue){
        const newsArticle = document.createElement('div');
        newsArticle.classList.add('news-article');
        newsArticle.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), transparent) ,url(${newsValue.image})`;
    
        const title = document.createElement('span');
        title.classList.add('news-article__title');
        title.innerText = newsValue.title;
    
        newsArticle.appendChild(title);
        return newsArticle;
    }
}

