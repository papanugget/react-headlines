import React from 'react';

const ArticleItem = (props) => {
    const article = props.article;
    const articleDateTime = new Date(article.publishedAt).toLocaleDateString() + ' at ' + new Date(article.publishedAt).toLocaleTimeString();
    return (
        <div className="column">
            <div className="ui top attached info message">      
            <h4>
            {article.title}
            </h4>
            </div>
            <div className="ui bottom attached segment">
                {!article.urlToImage ? (
                    <div className="ui fluid placeholder">
                        <div className="rectangular image"></div>
                    </div>
                ) : (
                    <img src={article.urlToImage} className="ui fluid rounded image" alt={article.description}/>
                )
                }
                <br/>
                <p>
                    {article.description}
                </p>
                <p>Published on {articleDateTime}</p>
                <a className="ui primary button" href={article.url}target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        </div>
    )
}

export default ArticleItem;